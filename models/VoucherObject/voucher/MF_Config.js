/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"voucherid": "voucherid",
		"vouchercode": "vouchercode",
		"code": "code",
		"retailerid": "retailerid",
		"status": "status",
	};

	Object.freeze(mappings);

	var typings = {
		"voucherid": "string",
		"vouchercode": "string",
		"code": "string",
		"retailerid": "string",
		"status": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"voucherid",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "VoucherObject",
		tableName: "voucher"
	};

	Object.freeze(config);

	return config;
})