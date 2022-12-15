define([], function () { 
	return {
      onPreShow: function(){
        var self = this;
        this.view.btnContinue.onClick = function() {
          self.validateFields();
        };
      },
      validateFields: function() {
        let password = this.view.txtPassword.text;
        let repeatPassword = this.view.txtRepeatPassword.text;
        if(!password || !repeatPassword) {
          alert("Fill all the fields");
        } else if(password != repeatPassword) {
          alert("Password not matched");
        } else {
          var request = {
            "UserName" : "samsunguser",
            "ResetPassword" : password.trim()
          };
          var authManager = applicationManager.getAuthManager();
          authManager.resetPassword(request,this.resetPasswordSuccess,this.resetPasswordError);
        }
      },
      resetPasswordSuccess: function(success){
        alert(success);
      },
      resetPasswordError: function(error){
        alert(error);
      }
    };
});