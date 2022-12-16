define(['ApplicationManager'],function(ApplicationManager){ 
  return {
    onPreShow: function() {
      let self = this;
      this.resetUI();
      this.view.btnContinue.onClick = function() {
        self.validateFields();
      };
    },
    resetUI: function() {
      this.view.flxError.isVisible = false;
      this.view.btnContinue.top = "105px";
    },
    validateFields: function() {
      let username = this.view.txtEmailorPhone.text;
      let password = this.view.txtPassword.text;
      if(!username || !password) {
        this.view.flxError.isVisible = true;
      	this.view.btnContinue.top = "20px";
      } else {
        this.resetUI();
        let inputparam = {
          "username" : username,
          "password" : password
        };
        kony.application.showLoadingScreen("", "Loading", "", "", "", "");
        applicationManager.getAuthManager().login(inputparam,this.loginSucess,this.loginError);
      }
    },
    loginSucess: function(response) {
      kony.application.dismissLoadingScreen();
      var x = new kony.mvc.Navigation("frmResetPassword");
      x.navigate();
    },
    loginError: function(error) {
      kony.application.dismissLoadingScreen();
    }
  };
});