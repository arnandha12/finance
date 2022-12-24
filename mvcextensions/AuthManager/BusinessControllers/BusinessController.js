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
      //alert("status"+status+" data "+data+" error "+error)
      if(data.opstatus === 0){
        if(data.hasOwnProperty("dbpErrCode") || data.hasOwnProperty("dbpErrMsg")) {
          failureCallback(data);
        } else {
          successCallback(data);
        }
      }
    } 
    function successCallback(resSucess){
      sucessCB(resSucess);
    }
    function failureCallback(resError){
      errorCB(resError);
    }
  };
  AuthManager.prototype.resendPassword = function(params,sucessCB,errorCB) {
    var self = this;
    var userRepo =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Retailer");
    userRepo.customVerb('resendPassword', params, serviceCompletionCallback);
    function serviceCompletionCallback(status, data, error) {
      //alert("status"+status+" data "+data+" error "+error)
      if(data.opstatus === 0){
        if(data.hasOwnProperty("dbpErrCode") || data.hasOwnProperty("dbpErrMsg")) {
          failureCallback(data);
        } else {
          successCallback(data);
        }
      }
    } 
    function successCallback(resSucess){
      sucessCB(resSucess);
    }
    function failureCallback(resError){
      errorCB(resError);
    }
  };
  AuthManager.prototype.requestMFA = function(params,sucessCB,errorCB) {
    var self = this;
    var userRepo =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Retailer");
    userRepo.customVerb('requestMFA', params, serviceCompletionCallback);
    function serviceCompletionCallback(status, data, error) {
      //alert("status"+status+" data "+data+" error "+error)
      if(data.opstatus === 0){
        if(data.hasOwnProperty("dbpErrCode") || data.hasOwnProperty("dbpErrMsg")) {
          failureCallback(data);
        } else {
          successCallback(data);
        }
      }
    } 
    function successCallback(resSucess){
      sucessCB(resSucess);
    }
    function failureCallback(resError){
      errorCB(resError);
    }
  };
  AuthManager.prototype.verifyMFA = function(params,sucessCB,errorCB) {
    var self = this;
    var userRepo =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Retailer");
    userRepo.customVerb('verifyMFA', params, serviceCompletionCallback);
    function serviceCompletionCallback(status, data, error) {
      //alert("status"+status+" data "+data+" error "+error)
      if(data.opstatus === 0){
        if(data.hasOwnProperty("dbpErrCode") || data.hasOwnProperty("dbpErrMsg")) {
          failureCallback(data);
        } else {
          successCallback(data);
        }
      }
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