define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
  function AuthManager() { 
    kony.mvc.Business.Delegator.call(this); 
  } 
  inheritsFrom(AuthManager, kony.mvc.Business.Delegator); 
  AuthManager.prototype.login = function(params,sucessCB,errorCB) {
    var authParams = {
      "userid": params.username,
      "password": params.password
    };
    authClient = KNYMobileFabric.getIdentityService("MoraRetailerRepo");
    authClient.login(authParams, successCallback, failureCallback);
    function successCallback(resSucess){
      sucessCB(resSucess);
    }
    function failureCallback(resError){
      errorCB(resError);
    }
  };
  AuthManager.prototype.resetPassword = function(params,sucessCB,errorCB) {
    var self = this;
    var userRepo =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Retailer");
    userRepo.customVerb('resetPassword', params, serviceCompletionCallback);
    function serviceCompletionCallback(status, data, error) {
      alert("status"+status+" data "+data+" error "+error)
    } 
    function successCallback(resSucess){
      sucessCB(resSucess);
    }
    function failureCallback(resError){
      errorCB(resError);
    }
  };
  return AuthManager;
});