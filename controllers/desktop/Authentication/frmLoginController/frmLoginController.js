define(['ApplicationManager'],function(ApplicationManager){ 
  return {
    onPreShow: function() {
      let self = this;
      this.view.btnContinue.onClick = function() {
        self.validateFields();
      };
    },
    validateFields: function() {
      let username = this.view.txtEmailorPhone.text;
      let password = this.view.txtPassword.text;
      if(!username || !password) {
        alert("fields should not be empty");
      } else {
        let inputparam = {
          "username" : username,
          "password" : password
        };
        applicationManager.getAuthManager().login(inputparam,this.loginSucess,this.loginError);
      }
    },
    loginSucess: function(response) {
      alert(response);
      var x = new kony.mvc.Navigation("frmResetPassword");
      x.navigate();
    },
    loginError: function(error) {
      alert(error);
    }
  };
});