define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function RetailerRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	RetailerRepository.prototype = Object.create(BaseRepository.prototype);
	RetailerRepository.prototype.constructor = RetailerRepository;

	//For Operation 'resetPassword' with service id 'ResetPassword7664'
	RetailerRepository.prototype.resetPassword = function(params, onCompletion){
		return RetailerRepository.prototype.customVerb('resetPassword', params, onCompletion);
	};

	return RetailerRepository;
})