flickr.controller('formCtrl', ['$scope', '$http', '$timeout',
    function($scope, $http, $timeout){

    'use strict';

        $scope.results = [];



        $scope.search = function(pageNum) {
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: '6a6bfe53444e7fa7db4028587ccf49c0',
                    format: "json",
                    nojsoncallback: 1,
                    tags: $scope.seachField,
                    user_id: $scope.user,
                    sort: 'interestingness-desc',
                    per_page: '1',
                    extras: 'date_upload, date_taken, owner_name, views, url_q',
                    page: pageNum
                }
            }).success(function(data){
                //console.log(JSON.stringify(data))
                $scope.results = data;
                pagination();
                //console.log("last: " + $scope.lastPage)
            }).error(function(error){
                console.warn(error)
            })
        }
	
}]);