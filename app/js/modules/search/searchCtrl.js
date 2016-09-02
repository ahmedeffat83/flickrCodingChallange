flickr.controller('searchCtrl', ['flickrSrvc', '$scope', '$state',
    function(flickrSrvc, $scope, $state){

    'use strict';

        $scope.results = flickrSrvc.searchResults;
        $scope.searchTerms = flickrSrvc.searchTerms;
        $scope.itemsNum = 1;
        $scope.pageNum = 1;

        // submit the search form
        $scope.submit = function() {
            flickrSrvc.searchFlickr($scope.seachTerm, $scope.user, $scope.itemsNum, $scope.pageNum)
                .success(function(data) {
                    flickrSrvc.searchResults.push(data.photos.photo[0]);
                    flickrSrvc.searchTerms.push($scope.seachTerm);
                    flickrSrvc.user = $scope.user;
                    $scope.seachTerm = "";
                    //console.log(JSON.stringify($scope.results));
                });
        }

        // display related tiles based on the tile's search tag
        $scope.tagDetails = function(index) {
            flickrSrvc.selectedTag = $scope.searchTerms[index];
            $state.go("results");
        }

        // sorting method
        $scope.propertyName = 'views';
        $scope.reverse = true;
        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };


}]);