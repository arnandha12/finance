/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"UserName": "UserName",
		"Password": "Password",
		"TempPassword": "TempPassword",
		"ResetPassword": "ResetPassword",
		"status": "status",
		"RetailerId": "RetailerId",
	};

	Object.freeze(mappings);

	var typings = {
		"UserName": "string",
		"Password": "string",
		"TempPassword": "string",
		"ResetPassword": "string",
		"status": "string",
		"RetailerId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"RetailerId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "RetailerCustomer",
		tableName: "Retailer"
	};

	Object.freeze(config);

	return config;
})