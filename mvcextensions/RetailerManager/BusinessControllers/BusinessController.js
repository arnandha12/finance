define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
  function RetailerManager() { 
    kony.mvc.Business.Delegator.call(this); 
  } 
  inheritsFrom(RetailerManager, kony.mvc.Business.Delegator); 
  RetailerManager.prototype.createUser = function(params,sucessCB,errorCB) {
    var self = this;
    var userRepo =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Retailer");
    userRepo.customVerb('createUser', params, serviceCompletionCallback);
    function serviceCompletionCallback(status, data, error) {
      //alert("status"+status+" data "+data+" error "+error);
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
  return RetailerManager;
});