flickr.controller('searchCtrl', ['flickrSrvc', '$scope', '$state', '$rootScope',
    function(flickrSrvc, $scope, $state, $rootScope){

    'use strict';

        $scope.results = flickrSrvc.searchResults;
        $scope.searchTerms = flickrSrvc.searchTerms;
        $scope.itemsNum = 1;
        $scope.pageNum = 1; // default

        // submit the search form
        $scope.submit = function() {
            flickrSrvc.searchFlickr($scope.seachTerm, $scope.user, $scope.itemsNum, $scope.pageNum)
                .success(function(data) {
                    //console.log(JSON.stringify(data.photos));
                    if(data.photos.photo.length) {
                        flickrSrvc.searchResults.push(data.photos.photo[0]);
                        flickrSrvc.searchTerms.push($scope.seachTerm);
                        flickrSrvc.user = $scope.user;
                        $scope.seachTerm = "";
                        flickrSrvc.successfulSearch = true;
                        $rootScope.currentError = null;
                    } else {
                        $rootScope.currentError = ("No search results found, please try again"); // Simulating the empty response when the userId is unavailable to be shown as an error in the view, as flickr return it as a success not a failure
                        $rootScope.errors.push($rootScope.currentError); // Adding it the errors array
                        //console.warn($rootScope.errors);
                    }
                })
        }

        // display related tiles based on the tile's search tag
        $scope.tagDetails = function(index) {
            flickrSrvc.selectedTag = $scope.searchTerms[index];
            $state.go("results");
        }

        // sorting method
        $scope.propertyName = 'views'; // default
        $scope.reverse = true;
        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };


}]);