/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Retailer", "objectService" : "RetailerCustomer"};

    var setterFunctions = {
        UserName: function(val, state) {
            context["field"] = "UserName";
            context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
            state['UserName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Password: function(val, state) {
            context["field"] = "Password";
            context["metadata"] = (objectMetadata ? objectMetadata["Password"] : null);
            state['Password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TempPassword: function(val, state) {
            context["field"] = "TempPassword";
            context["metadata"] = (objectMetadata ? objectMetadata["TempPassword"] : null);
            state['TempPassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ResetPassword: function(val, state) {
            context["field"] = "ResetPassword";
            context["metadata"] = (objectMetadata ? objectMetadata["ResetPassword"] : null);
            state['ResetPassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RetailerId: function(val, state) {
            context["field"] = "RetailerId";
            context["metadata"] = (objectMetadata ? objectMetadata["RetailerId"] : null);
            state['RetailerId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Retailer(defaultValues) {
        var privateState = {};
        context["field"] = "UserName";
        context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
        privateState.UserName = defaultValues ?
            (defaultValues["UserName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserName"], context) :
                null) :
            null;

        context["field"] = "Password";
        context["metadata"] = (objectMetadata ? objectMetadata["Password"] : null);
        privateState.Password = defaultValues ?
            (defaultValues["Password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Password"], context) :
                null) :
            null;

        context["field"] = "TempPassword";
        context["metadata"] = (objectMetadata ? objectMetadata["TempPassword"] : null);
        privateState.TempPassword = defaultValues ?
            (defaultValues["TempPassword"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TempPassword"], context) :
                null) :
            null;

        context["field"] = "ResetPassword";
        context["metadata"] = (objectMetadata ? objectMetadata["ResetPassword"] : null);
        privateState.ResetPassword = defaultValues ?
            (defaultValues["ResetPassword"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ResetPassword"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;

        context["field"] = "RetailerId";
        context["metadata"] = (objectMetadata ? objectMetadata["RetailerId"] : null);
        privateState.RetailerId = defaultValues ?
            (defaultValues["RetailerId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RetailerId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "UserName": {
                get: function() {
                    context["field"] = "UserName";
                    context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserName, context);
                },
                set: function(val) {
                    setterFunctions['UserName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Password": {
                get: function() {
                    context["field"] = "Password";
                    context["metadata"] = (objectMetadata ? objectMetadata["Password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Password, context);
                },
                set: function(val) {
                    setterFunctions['Password'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TempPassword": {
                get: function() {
                    context["field"] = "TempPassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["TempPassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TempPassword, context);
                },
                set: function(val) {
                    setterFunctions['TempPassword'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ResetPassword": {
                get: function() {
                    context["field"] = "ResetPassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["ResetPassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ResetPassword, context);
                },
                set: function(val) {
                    setterFunctions['ResetPassword'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "status": {
                get: function() {
                    context["field"] = "status";
                    context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);
                },
                set: function(val) {
                    setterFunctions['status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "RetailerId": {
                get: function() {
                    context["field"] = "RetailerId";
                    context["metadata"] = (objectMetadata ? objectMetadata["RetailerId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RetailerId, context);
                },
                set: function(val) {
                    setterFunctions['RetailerId'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.UserName = value ? (value["UserName"] ? value["UserName"] : null) : null;
            privateState.Password = value ? (value["Password"] ? value["Password"] : null) : null;
            privateState.TempPassword = value ? (value["TempPassword"] ? value["TempPassword"] : null) : null;
            privateState.ResetPassword = value ? (value["ResetPassword"] ? value["ResetPassword"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.RetailerId = value ? (value["RetailerId"] ? value["RetailerId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Retailer);

    //Create new class level validator object
    BaseModel.Validator.call(Retailer);

    var registerValidatorBackup = Retailer.registerValidator;

    Retailer.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Retailer.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'resetPassword' with service id 'ResetPassword7664'
     Retailer.resetPassword = function(params, onCompletion){
        return Retailer.customVerb('resetPassword', params, onCompletion);
     };

    var relations = [];

    Retailer.relations = relations;

    Retailer.prototype.isValid = function() {
        return Retailer.isValid(this);
    };

    Retailer.prototype.objModelName = "Retailer";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Retailer.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RetailerCustomer", "Retailer", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Retailer.clone = function(objectToClone) {
        var clonedObj = new Retailer();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Retailer;
});