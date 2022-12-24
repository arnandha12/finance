define([],function(){ 
  let voucherList = [];
  let selectedVoucher = {};
  let securityKey = "",resendtime = 180;
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
            data => ((data.vouchercode).toLowerCase()).includes(searchText.toLowerCase()));
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
        self.getVoucherDetails(selectedVoucher);
      };
      this.view.btnSendOtp.onClick = function(event) {
        if (event.text === "Send OTP") {
          self.requestMFA("request");
        } else {
          self.view.txtotp1.text = "";
          self.view.txtotp2.text = "";
          self.view.txtotp3.text = "";
          self.view.txtotp4.text = "";
          self.view.txtotp5.text = "";
          self.view.txtotp6.text = "";
          self.view.flxOTPSection.isVisible = true;
          self.view.btnReSend.setEnabled(false);
          self.view.flxVoucherDetails.isVisible = false;  
          self.view.flxError.isVisible = false;
          self.timer(resendtime);
        }
      };
      this.view.btnClose.onClick = function() {
        self.resetUI();
        self.view.segVouchers.setData(voucherList);
      };
      this.view.btnVerify.onClick = function() {
        let otp1 = self.view.txtotp1.text;
        let otp2 = self.view.txtotp2.text;
        let otp3 = self.view.txtotp3.text;
        let otp4 = self.view.txtotp4.text;
        let otp5 = self.view.txtotp5.text;
        let otp6 = self.view.txtotp6.text;
        if(otp1 && otp2 && otp3 && otp4 && otp5 && otp6) {
          let otp = otp1+otp2+otp3+otp4+otp5+otp6;
          self.verifyMFA(otp);  
        } else{
          self.view.flxError.isVisible = true;
        }
      };
      this.view.btnRedeemVoucher.onClick = function() {
        self.reedemVoucher();
      };
      this.view.btnContinue.onClick = function() {
        self.resetUI();
        self.view.segVouchers.setData(voucherList);
      };
      this.view.btnBack.onClick = function() {
        self.view.flxOTPSection.isVisible = false;
        self.view.flxVoucherDetails.isVisible = true;
      };
      this.view.btnReSend.onClick = function() {
        self.requestMFA("resend");
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
      this.view.btnRedeemVoucher.skin = "sknbtn898A8DRounded";
      this.view.btnRedeemVoucher.left = "55%";
    },
    onPostShow: function() {
      this.getAllVoucherList();
      //this.tempGtAll();
    },
    mapUserDetails: function(voucherdetails) {
      let createddate = "";
      if(voucherdetails.createdts) {
        createddate = (voucherdetails.createdts).split(" ");
      }
      this.view.lblVoucherID.text = voucherdetails.voucherCode;
      this.view.lblGenerateDateValue.text = createddate[0]; 
      this.view.lblExpiryDateValue.text = "";
      this.view.txtUApplicantName.text = "";
      this.view.txtPhone.text = voucherdetails.mobile;
      this.view.txtApplicantID.text = voucherdetails.applicationID;
      this.view.txtApplicantAddress.text = "";
      this.view.txtMerchnatt24CustId.text = voucherdetails.retailerID;
      this.view.txtLoanAmount.text = voucherdetails.offerAmount;
      this.view.txtEmi.text = voucherdetails.tenorCore;
      this.view.txtTenor.text = voucherdetails.tenor;

      this.view.txtUApplicantName.setEnabled(false);
      this.view.txtPhone.setEnabled(false);
      this.view.txtApplicantID.setEnabled(false);
      this.view.txtApplicantAddress.setEnabled(false);
      this.view.txtMerchnatt24CustId.setEnabled(false);
      this.view.txtLoanAmount.setEnabled(false);
      this.view.txtEmi.setEnabled(false);
      this.view.txtTenor.setEnabled(false);
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
        "retailerid":"101608"
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var voucherManager = applicationManager.getVoucherManager();
      voucherManager.getVoucherList(param,this.getListSucess,this.getListError);
    },
    getListSucess: function(response) {
      kony.application.dismissLoadingScreen();
      this.view.txtSearchVoucher.setEnabled(true);
      this.view.segVouchers.widgetDataMap = {
        lblUserName: "voucherCode"
      };
      this.view.segVouchers.setData(response.records);
      voucherList = response.records;
    },
    getListError: function(error) {
      kony.application.dismissLoadingScreen();
      this.view.txtSearchVoucher.setEnabled(false);
      this.view.flxPopupVoucherNotfound.isVisible = true;
    },
    getVoucherDetails: function(voucher) {
      let param = {
        "voucherid": voucher.voucherCode,
        "code": "CODE"
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var voucherManager = applicationManager.getVoucherManager();
      voucherManager.getVoucherDetails(param,this.getVoucherSucess,this.getVoucherError);
    },
    getVoucherSucess: function(response) {
      kony.application.dismissLoadingScreen();
      this.mapUserDetails(response.records[0]);
    },
    getVoucherError: function(error) {
      kony.application.dismissLoadingScreen();
      alert(JSON.stringify(error));
    },
    reedemVoucher: function() {
      let voucherCode = this.view.lblVoucherID.text;
      let param = {
        "vouchercode": voucherCode,
        "voucherid": "1",
        "status": "REDEEMED"
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var voucherManager = applicationManager.getVoucherManager();
      voucherManager.redeemVoucher(param,this.reedemVoucherSucess,this.reedemVoucherError);
    },
    reedemVoucherSucess: function(response) {
      kony.application.dismissLoadingScreen();
      this.view.flxAcknowledgementPopup.isVisible = true;
    },
    reedemVoucherError: function(error) {
      kony.application.dismissLoadingScreen();
      alert(error.dbpErrMsg);
    },
    requestMFA: function(otpType) {
      let param = {
        "phoneno": "9876543210"
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var authManager = applicationManager.getAuthManager();
      if(otpType == "request") {
       authManager.requestMFA(param,this.requestMFASucess,this.requestMFAError); 
      } else {
       authManager.requestMFA(param,this.resendMFASucess,this.requestMFAError); 
      }
    },
    requestMFASucess: function(response) {
      kony.application.dismissLoadingScreen();
      if(response.securityKey) {
        securityKey = response.securityKey;
        this.view.btnSendOtp.text = "Verify OTP";
        this.view.btnSendOtp.skin = "sknbtn2c3d73Rounded18px";  
      }
    },
    resendMFASucess: function(response) {
      kony.application.dismissLoadingScreen();
      if(response.securityKey) {
        securityKey = response.securityKey;
        this.view.txtotp1.text = "";
        this.view.txtotp2.text = "";
        this.view.txtotp3.text = "";
        this.view.txtotp4.text = "";
        this.view.txtotp5.text = "";
        this.view.txtotp6.text = "";
        this.view.btnReSend.setEnabled(false);
        this.timer(resendtime);
        this.view.flxError.isVisible = false;
      }
    },
    requestMFAError: function(error) {
      kony.application.dismissLoadingScreen();
      alert(error.dbpErrMsg);
    },
    verifyMFA: function(otp) {
      let param = {
        "securityKey": securityKey,
        "Otp": otp
      };
      kony.application.showLoadingScreen("", "Loading", "", "", "", "");
      var authManager = applicationManager.getAuthManager();
      authManager.verifyMFA(param,this.verifyMFASucess,this.verifyMFAError);
    },
    verifyMFASucess: function(response) {
      kony.application.dismissLoadingScreen();      
      this.view.flxVoucherDetails.isVisible = true;
      this.view.flxOTPSection.isVisible = false;
      this.view.btnRedeemVoucher.setEnabled(true);
      this.view.btnSendOtp.isVisible = false;
      this.view.btnRedeemVoucher.skin = "sknbtn2c3d73Rounded18px";
      this.view.btnRedeemVoucher.left = "39%";
    },
    verifyMFAError: function(error) {
      kony.application.dismissLoadingScreen();
      this.view.flxError.isVisible = true;
    },
    timer: function (remaining) {
      var timerself = this;
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      this.view.lblotpresend.text = m + ':' + s;
      remaining -= 1;
      if(remaining >= 0) {
        setTimeout(function() {
          timerself.timer(remaining);
        }, 1000);
        return;
      }
      this.view.btnReSend.setEnabled(true);
    }
  };
});