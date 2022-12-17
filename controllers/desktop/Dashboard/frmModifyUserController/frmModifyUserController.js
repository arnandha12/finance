define([],function(){ 
  let retailerList = [];
  let selecteduser = {};
  return {
    onPreShow: function() {
      let self = this;
      this.resetUI();
      this.view.txtSearchUser.onBeginEditing = function() {
        self.view.flxSegmentSearchList.isVisible = true;
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
    },
    onPostShow: function() {
      this.getAllUserList();
    },
    resetUI: function() {
      this.view.flxUserDetails.isVisible = false;
      this.view.flxAcknowledgement.isVisible = false;
      this.view.flxSegmentSearchList.isVisible = false;
      this.view.flxUserNotFound.isVisible = false;
      this.view.flxUserSearch.isVisible = true;
      this.view.txtSearchUser.text = "";
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
    }
  };
});