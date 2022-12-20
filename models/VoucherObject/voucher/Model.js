/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "voucher", "objectService" : "VoucherObject"};

    var setterFunctions = {
        voucherid: function(val, state) {
            context["field"] = "voucherid";
            context["metadata"] = (objectMetadata ? objectMetadata["voucherid"] : null);
            state['voucherid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        vouchercode: function(val, state) {
            context["field"] = "vouchercode";
            context["metadata"] = (objectMetadata ? objectMetadata["vouchercode"] : null);
            state['vouchercode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        code: function(val, state) {
            context["field"] = "code";
            context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
            state['code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        retailerid: function(val, state) {
            context["field"] = "retailerid";
            context["metadata"] = (objectMetadata ? objectMetadata["retailerid"] : null);
            state['retailerid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function voucher(defaultValues) {
        var privateState = {};
        context["field"] = "voucherid";
        context["metadata"] = (objectMetadata ? objectMetadata["voucherid"] : null);
        privateState.voucherid = defaultValues ?
            (defaultValues["voucherid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["voucherid"], context) :
                null) :
            null;

        context["field"] = "vouchercode";
        context["metadata"] = (objectMetadata ? objectMetadata["vouchercode"] : null);
        privateState.vouchercode = defaultValues ?
            (defaultValues["vouchercode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["vouchercode"], context) :
                null) :
            null;

        context["field"] = "code";
        context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
        privateState.code = defaultValues ?
            (defaultValues["code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["code"], context) :
                null) :
            null;

        context["field"] = "retailerid";
        context["metadata"] = (objectMetadata ? objectMetadata["retailerid"] : null);
        privateState.retailerid = defaultValues ?
            (defaultValues["retailerid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["retailerid"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "voucherid": {
                get: function() {
                    context["field"] = "voucherid";
                    context["metadata"] = (objectMetadata ? objectMetadata["voucherid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.voucherid, context);
                },
                set: function(val) {
                    setterFunctions['voucherid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "vouchercode": {
                get: function() {
                    context["field"] = "vouchercode";
                    context["metadata"] = (objectMetadata ? objectMetadata["vouchercode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.vouchercode, context);
                },
                set: function(val) {
                    setterFunctions['vouchercode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "code": {
                get: function() {
                    context["field"] = "code";
                    context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.code, context);
                },
                set: function(val) {
                    setterFunctions['code'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.voucherid = value ? (value["voucherid"] ? value["voucherid"] : null) : null;
            privateState.vouchercode = value ? (value["vouchercode"] ? value["vouchercode"] : null) : null;
            privateState.code = value ? (value["code"] ? value["code"] : null) : null;
            privateState.retailerid = value ? (value["retailerid"] ? value["retailerid"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(voucher);

    //Create new class level validator object
    BaseModel.Validator.call(voucher);

    var registerValidatorBackup = voucher.registerValidator;

    voucher.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(voucher.isValid(this, propName, val)) {
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
    //For Operation 'getVoucherList' with service id 'dbxdb_sp_get_voucher_ids_by_retailerID9307'
     voucher.getVoucherList = function(params, onCompletion){
        return voucher.customVerb('getVoucherList', params, onCompletion);
     };

    //For Operation 'getVoucherDetails' with service id 'GetVoucherByCodeOrNumber7141'
     voucher.getVoucherDetails = function(params, onCompletion){
        return voucher.customVerb('getVoucherDetails', params, onCompletion);
     };

    //For Operation 'redeemVoucher' with service id 'RedeemVoucher3475'
     voucher.redeemVoucher = function(params, onCompletion){
        return voucher.customVerb('redeemVoucher', params, onCompletion);
     };

    var relations = [];

    voucher.relations = relations;

    voucher.prototype.isValid = function() {
        return voucher.isValid(this);
    };

    voucher.prototype.objModelName = "voucher";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    voucher.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("VoucherObject", "voucher", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    voucher.clone = function(objectToClone) {
        var clonedObj = new voucher();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return voucher;
});