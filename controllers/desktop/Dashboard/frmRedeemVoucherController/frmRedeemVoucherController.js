define([],function(){ 
  let voucherList = [];
  let selectedVoucher = {};
  return {
    onPreShow: function() {
      let self = this;
      this.resetUI();
      this.view.txtSearchVoucher.onBeginEditing = function() {
        self.view.flxSegmentSearchList.isVisible = true;
      };
      this.view.btnSearchAgain.onClick = function(){
        self.view.flxPopupVoucherNotfound.isVisible = false;
        self.view.txtSearchVoucher.text = "";
        self.view.txtSearchVoucher.setEnabled(true);
        self.view.segVouchers.setData(voucherList);
      };
      this.view.txtSearchVoucher.onTextChange = function(eventId) {
        let searchText = eventId.text;
        if(searchText.length > 1) {
          let filteredData = voucherList.filter(
            data => (data.voucherCode).includes(searchText));
          kony.print(filteredData);
          self.view.segVouchers.setData(filteredData);
          if(filteredData.length === 0) {
            self.view.flxSegmentSearchList.isVisible = false;
            self.view.flxPopupVoucherNotfound.isVisible = true;
            self.view.txtSearchVoucher.setEnabled(false);
          }
        } else {
          self.view.segVouchers.setData(voucherList);
        }
      };
      this.view.segVouchers.onRowClick = function(eventId) {
        kony.print(eventId.selectedRowItems[0]);
        selectedVoucher = eventId.selectedRowItems[0];
        self.view.flxSegmentSearchList.isVisible = false;
        self.mapUserDetails(selectedVoucher);
      };
      this.view.btnSendOtp.onClick = function(event) {
        if (event.text === "Send OTP") {
          self.view.btnSendOtp.text = "Verify OTP";
          self.view.btnSendOtp.skin = "sknbtn2c3d73Rounded18px";
        } else {
          self.view.flxOTPSection.isVisible = true;
          self.view.flxVoucherDetails.isVisible = false;
        }
      };
      this.view.btnClose.onClick = function() {
        self.resetUI();
        self.view.segVouchers.setData(voucherList);
      };
      this.view.btnVerify.onClick = function() {
        self.view.flxVoucherDetails.isVisible = true;
        self.view.flxOTPSection.isVisible = false;
        self.view.btnRedeemVoucher.setEnabled(true);
        self.view.btnSendOtp.isVisible = false;
        self.view.btnRedeemVoucher.skin = "sknbtn2c3d73Rounded18px";
      };
      this.view.btnRedeemVoucher.onClick = function() {
        self.view.flxAcknowledgementPopup.isVisible = true;
      };
      this.view.btnContinue.onClick = function() {
        self.resetUI();
      };
    },
    resetUI: function() {
      this.view.flxVoucherSearch.isVisible = true;
      this.view.flxVoucherDetails.isVisible = false;
      this.view.flxAcknowledgementPopup.isVisible = false;
      this.view.flxPopupVoucherNotfound.isVisible = false;
      this.view.flxSegmentSearchList.isVisible = false;
      this.view.flxOTPSection.isVisible = false;
      this.view.btnSendOtp.isVisible = true;
      this.view.btnSendOtp.skin = "sknbtn2c3d73Rounded18pxBorder";
      this.view.btnSendOtp.text = "Send OTP";
      this.view.txtSearchVoucher.setEnabled(true);
      this.view.txtSearchVoucher.text = "";
      this.view.btnRedeemVoucher.setEnabled(false);
      this.view.btnRedeemVoucher.skin = "";
    },
    onPostShow: function() {
      //this.getAllVoucherList();
      this.tempGtAll();
    },
    mapUserDetails: function() {
      this.view.flxVoucherDetails.isVisible = true;
    },
    tempGtAll: function() {
      let response = {"voucher": [{"voucherCode": "MORA-AKJS-1123"},
                                  {"voucherCode": "MORA-ZXAS-3214"},
                                  {"voucherCode": "MORA-QWER-2378"}]};
      this.view.segVouchers.widgetDataMap = {
        lblUserName: "voucherCode"
      };
      this.view.segVouchers.setData(response.voucher);
      voucherList = response.voucher;
      this.view.txtSearchVoucher.setEnabled(true);
    },
    getAllVoucherList: function() {
      let param = {
        "retailerid": "1"
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var voucherManager = applicationManager.getVoucherManager();
      voucherManager.getVoucherList(param,this.getListSucess,this.getListError);
    },
    getListSucess: function(success) {
      kony.application.dismissLoadingScreen();
      this.view.txtSearchVoucher.setEnabled(true);
      this.view.segVouchers.widgetDataMap = {
        lblUserName: "voucherCode"
      };
      this.view.segVouchers.setData(response.voucher);
      voucherList = response.voucher;
    },
    getListError: function(error) {
      kony.application.dismissLoadingScreen();
      this.view.txtSearchVoucher.setEnabled(false);
      this.view.flxPopupVoucherNotfound.isVisible = true;
    }
  };
});