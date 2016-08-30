Tifli.service('configService', function($http, $q){
	
var _loadStandardConfiguration = function(onSuccess, onFailure){
		return $http.get('static/standardConfiguration.json').then(function(response){
			// successfully loaded data
			var standardMilestones = response.data && response.data[APP_CONSTANTS.DEFAULT_COLLECTIONS.STANDARD_MILESTONES] ? response.data[APP_CONSTANTS.DEFAULT_COLLECTIONS.STANDARD_MILESTONES] : null;
			if(standardMilestones){
				StorageHandlerNew.addToCollection(
	    	        				APP_CONSTANTS.COLLECTIONS.STANDARD_MILESTONES, 
	    	        				standardMilestones, 
	    	        				onSuccess,
	    	        				onFailure);
			}
			else{
				var error = {
						code: 400,
						message: ""
					}
					onFailure(error);
				}
		},
		function(error){
			// Failed to Load data 
			onFailure(error);
		});
	};
	
});