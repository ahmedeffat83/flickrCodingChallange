flickr.controller('searchCtrl', ['flickrSrvc', '$scope', '$state', '$rootScope',
    function(flickrSrvc, $scope, $state, $rootScope){

    'use strict';

        $scope.results = flickrSrvc.searchResults;
        $scope.itemsNum = 1;
        $scope.pageNum = 1; // default

        // submit the search form
        $scope.submit = function() {
            flickrSrvc.searchFlickr($scope.seachTerm, $scope.user, $scope.itemsNum, $scope.pageNum)
                .success(function(data) {
                    if(data.photos.photo.length) {
                        flickrSrvc.searchResults.push(data.photos.photo[0]);
                        flickrSrvc.searchTerms.push($scope.seachTerm);
                        flickrSrvc.user = $scope.user;
                        $scope.seachTerm = "";
                        flickrSrvc.successfulSearch = true;
                        $rootScope.currentError = null;
                    } else {
                        $rootScope.currentError = ("No search results found, please try again");
                        console.warn($rootScope.currentError);
                    }
                })
        }

        // display related tiles based on the tile's search tag
        $scope.tagDetails = function(index) {
            flickrSrvc.selectedTag = flickrSrvc.searchTerms[index];
            $state.go("results");
        }

        // sorting method
        $scope.sortUsing = 'views'; // default
        $scope.reverse = true;
        $scope.sortBy = function(sortUsing) {
            $scope.reverse = ($scope.sortUsing === sortUsing) ? !$scope.reverse : false;
            $scope.sortUsing = sortUsing;
        };


}]);