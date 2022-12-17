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
        userid: function(val, state) {
            context["field"] = "userid";
            context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
            state['userid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        temppassword: function(val, state) {
            context["field"] = "temppassword";
            context["metadata"] = (objectMetadata ? objectMetadata["temppassword"] : null);
            state['temppassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        resetpassword: function(val, state) {
            context["field"] = "resetpassword";
            context["metadata"] = (objectMetadata ? objectMetadata["resetpassword"] : null);
            state['resetpassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        retailerid: function(val, state) {
            context["field"] = "retailerid";
            context["metadata"] = (objectMetadata ? objectMetadata["retailerid"] : null);
            state['retailerid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        retailername: function(val, state) {
            context["field"] = "retailername";
            context["metadata"] = (objectMetadata ? objectMetadata["retailername"] : null);
            state['retailername'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        role: function(val, state) {
            context["field"] = "role";
            context["metadata"] = (objectMetadata ? objectMetadata["role"] : null);
            state['role'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneno: function(val, state) {
            context["field"] = "phoneno";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneno"] : null);
            state['phoneno'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        emailid: function(val, state) {
            context["field"] = "emailid";
            context["metadata"] = (objectMetadata ? objectMetadata["emailid"] : null);
            state['emailid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Retailer(defaultValues) {
        var privateState = {};
        context["field"] = "userid";
        context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
        privateState.userid = defaultValues ?
            (defaultValues["userid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userid"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "temppassword";
        context["metadata"] = (objectMetadata ? objectMetadata["temppassword"] : null);
        privateState.temppassword = defaultValues ?
            (defaultValues["temppassword"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["temppassword"], context) :
                null) :
            null;

        context["field"] = "resetpassword";
        context["metadata"] = (objectMetadata ? objectMetadata["resetpassword"] : null);
        privateState.resetpassword = defaultValues ?
            (defaultValues["resetpassword"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["resetpassword"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;

        context["field"] = "retailerid";
        context["metadata"] = (objectMetadata ? objectMetadata["retailerid"] : null);
        privateState.retailerid = defaultValues ?
            (defaultValues["retailerid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["retailerid"], context) :
                null) :
            null;

        context["field"] = "retailername";
        context["metadata"] = (objectMetadata ? objectMetadata["retailername"] : null);
        privateState.retailername = defaultValues ?
            (defaultValues["retailername"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["retailername"], context) :
                null) :
            null;

        context["field"] = "role";
        context["metadata"] = (objectMetadata ? objectMetadata["role"] : null);
        privateState.role = defaultValues ?
            (defaultValues["role"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["role"], context) :
                null) :
            null;

        context["field"] = "phoneno";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneno"] : null);
        privateState.phoneno = defaultValues ?
            (defaultValues["phoneno"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneno"], context) :
                null) :
            null;

        context["field"] = "emailid";
        context["metadata"] = (objectMetadata ? objectMetadata["emailid"] : null);
        privateState.emailid = defaultValues ?
            (defaultValues["emailid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["emailid"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "userid": {
                get: function() {
                    context["field"] = "userid";
                    context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userid, context);
                },
                set: function(val) {
                    setterFunctions['userid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "password": {
                get: function() {
                    context["field"] = "password";
                    context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);
                },
                set: function(val) {
                    setterFunctions['password'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "temppassword": {
                get: function() {
                    context["field"] = "temppassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["temppassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.temppassword, context);
                },
                set: function(val) {
                    setterFunctions['temppassword'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "resetpassword": {
                get: function() {
                    context["field"] = "resetpassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["resetpassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.resetpassword, context);
                },
                set: function(val) {
                    setterFunctions['resetpassword'].call(this, val, privateState);
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
            "retailerid": {
                get: function() {
                    context["field"] = "retailerid";
                    context["metadata"] = (objectMetadata ? objectMetadata["retailerid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.retailerid, context);
                },
                set: function(val) {
                    setterFunctions['retailerid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "retailername": {
                get: function() {
                    context["field"] = "retailername";
                    context["metadata"] = (objectMetadata ? objectMetadata["retailername"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.retailername, context);
                },
                set: function(val) {
                    setterFunctions['retailername'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "role": {
                get: function() {
                    context["field"] = "role";
                    context["metadata"] = (objectMetadata ? objectMetadata["role"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.role, context);
                },
                set: function(val) {
                    setterFunctions['role'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phoneno": {
                get: function() {
                    context["field"] = "phoneno";
                    context["metadata"] = (objectMetadata ? objectMetadata["phoneno"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phoneno, context);
                },
                set: function(val) {
                    setterFunctions['phoneno'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "emailid": {
                get: function() {
                    context["field"] = "emailid";
                    context["metadata"] = (objectMetadata ? objectMetadata["emailid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.emailid, context);
                },
                set: function(val) {
                    setterFunctions['emailid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "username": {
                get: function() {
                    context["field"] = "username";
                    context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.username, context);
                },
                set: function(val) {
                    setterFunctions['username'].call(this, val, privateState);
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
            privateState.userid = value ? (value["userid"] ? value["userid"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.temppassword = value ? (value["temppassword"] ? value["temppassword"] : null) : null;
            privateState.resetpassword = value ? (value["resetpassword"] ? value["resetpassword"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.retailerid = value ? (value["retailerid"] ? value["retailerid"] : null) : null;
            privateState.retailername = value ? (value["retailername"] ? value["retailername"] : null) : null;
            privateState.role = value ? (value["role"] ? value["role"] : null) : null;
            privateState.phoneno = value ? (value["phoneno"] ? value["phoneno"] : null) : null;
            privateState.emailid = value ? (value["emailid"] ? value["emailid"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
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

    //For Operation 'modifyUser' with service id 'ModifyUser2473'
     Retailer.modifyUser = function(params, onCompletion){
        return Retailer.customVerb('modifyUser', params, onCompletion);
     };

    //For Operation 'getAllUser' with service id 'getAllUsers5565'
     Retailer.getAllUser = function(params, onCompletion){
        return Retailer.customVerb('getAllUser', params, onCompletion);
     };

    //For Operation 'createUser' with service id 'CreateNewUser9107'
     Retailer.createUser = function(params, onCompletion){
        return Retailer.customVerb('createUser', params, onCompletion);
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