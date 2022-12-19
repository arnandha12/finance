define([],function(){ 
  let retailerList = [];
  let selecteduser = {};
  let selectedRole = "";
  let modifyUser = {};
  return {
    onPreShow: function() {
      let self = this;
      this.resetUI();
      this.view.btnMContinue.onClick = function() {
        this.view.flxUserModified.isVisible = false;
      };
      this.view.txtSearchUser.onBeginEditing = function() {
        self.view.flxSegmentSearchList.isVisible = true;
      };
      this.view.btnModifyUser.onClick = function() {
        self.modifyUser();
      };
      this.view.txtUsername.onEndEditing = function() {
        self.validateFields();
      };
      this.view.txtPhoneNo.onEndEditing = function() {
        self.validateFields();
      };
      this.view.txtEmail.onEndEditing = function() {
        self.validateFields();
      };
      this.view.txtSearchUser.onTextChange = function(eventId) {
        let searchText = eventId.text;
        if(searchText.length > 1) {
          let filteredData = retailerList.filter(
            data => (data.UserId).includes(searchText));
          kony.print(filteredData);
          self.view.segUsers.setData(filteredData);
          if(filteredData.length === 0) {
            self.view.flxSegmentSearchList.isVisible = false;
            self.view.flxUserNotFound.isVisible = true;
          }
        } else {
          self.view.segUsers.setData(retailerList);
        }
      };
      this.view.segUsers.onRowClick = function(eventId) {
        kony.print(eventId.selectedRowItems[0]);
        selecteduser = eventId.selectedRowItems[0];
        self.view.flxSegmentSearchList.isVisible = false;
        self.mapUserDetails(selecteduser);
      };
      this.view.btnClose.onClick = function() {
        self.resetUI();
        self.view.segUsers.setData(retailerList);
      };
      this.view.btnSearchAgain.onClick = function(){
        self.view.flxUserNotFound.isVisible = false;
        self.view.txtSearchUser.text = "";
        self.view.segUsers.setData(retailerList);
      };
      this.view.btnRoleSelection.onClick = function() {
        if(self.view.flxSegRole.isVisible) {
          self.view.imgArrow.src = "downarrow1x.png";
          self.view.flxSegRole.isVisible = false;  
        } else {
          self.view.imgArrow.src = "uparrow1x.png";
          self.view.flxSegRole.isVisible = true;
        }
      };
      this.view.segRole.onRowClick = function() {
        let selectedvalue = self.view.segRole.selectedRowItems[0];
        kony.print("selectedvalue :: "+JSON.stringify(selectedvalue));
        selectedRole = selectedvalue.lblUserName;
        self.view.lblRoleSelection.text = selectedRole;
        self.view.imgArrow.src = "downarrow1x.png";
        self.view.flxSegRole.isVisible = false;
        self.validateFields();
      };
    },
    onPostShow: function() {
      this.getAllUserList();
    },
    resetUI: function() {
      this.view.flxUserDetails.isVisible = false;
      this.view.flxAcknowledgement.isVisible = false;
      this.view.flxSegmentSearchList.isVisible = false;
      this.view.flxUserNotFound.isVisible = false;
      this.view.flxModifiedSucess.isVisible = false;
      this.view.flxUserSearch.isVisible = true;
      this.view.txtSearchUser.text = "";
      this.view.txtUserId.setEnabled(false);
    },
    getAllUserList: function() {
      let param = {
        "retailerid": "1"
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var retailerManager = applicationManager.getRetailerManager();
      retailerManager.getAllUser(param,this.getListSucess,this.getListError);
    },
    getListSucess: function(response) {
      kony.application.dismissLoadingScreen();
      this.view.txtSearchUser.setEnabled(true);
      this.view.segUsers.widgetDataMap = {
        lblUserName: "UserId"
      };
      this.view.segUsers.setData(response.retailer);
      retailerList = response.retailer;
    },
    getListError: function(error) {
      kony.application.dismissLoadingScreen();
      this.view.flxUserNotFound.isVisible = true;
      this.view.txtSearchUser.setEnabled(false);
    },
    mapUserDetails: function(data) {
      this.view.flxUserDetails.isVisible = true;
      this.view.txtUsername.text = data.UserName;
      this.view.txtEmail.text = data.EmailId;
      this.view.txtPhoneNo.text = data.PhoneNo;
      this.view.txtUserId.text = data.UserId;
      this.view.lblRoleSelection.text = data.Role;
      this.view.lblActiveSelection.text = (data.Status === "SID_ACTIVE")?"Active":"Unactive";
      selectedRole = data.Role;
    },
    validateFields: function() {
      var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      //var phoneformat = /[0-9]/g;
      var phoneformat = /^\d+$/;
      let username = this.view.txtUsername.text;
      let phone = this.view.txtPhoneNo.text;
      let email = this.view.txtEmail.text;
      let userid = this.view.txtUserId.text;
      if(username.length >= 3 && phone.length >= 8 && phone.match(phoneformat)
         && email.match(mailformat) && userid.length >= 3 
         && selectedRole !== "") {
        modifyUser.userid = userid.trim();
        modifyUser.phoneno = phone.trim();
        modifyUser.emailid = email.trim();
        modifyUser.username = username.trim();
        modifyUser.role = selectedRole;
        //TODO : Change based on login
        modifyUser.retailerid = "1";
        modifyUser.retailername = "samsung";
        this.view.btnModifyUser.setEnabled(true);
        this.view.btnModifyUser.skin = "sknbtn2c3d73Rounded18px";
      } else {
        this.view.btnModifyUser.setEnabled(false);
        this.view.btnModifyUser.skin = "sknbtn898A8DRounded";
      }
    },
    modifyUser: function() {
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var retailerManager = applicationManager.getRetailerManager();
      retailerManager.modifyUser(modifyUser,this.modifyUserSucess,this.modifyUserError);
    },
    modifyUserSucess: function(sucess) {
      this.view.flxUserModified.isVisible = true;
      kony.application.dismissLoadingScreen();
    },
    modifyUserError: function(error) {
      kony.application.dismissLoadingScreen();
      if(error.dbpErrMsg)
        alert(error.dbpErrMsg);
    }
  };
});