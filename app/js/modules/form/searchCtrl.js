flickr.controller('searchCtrl', ['flickrSrvc', '$scope', '$state',
    function(flickrSrvc, $scope, $state){

    'use strict';

        $scope.results = flickrSrvc.searchResults;

        $scope.pagination = false;
        $scope.itemsNum = 1;
        $scope.pageNum = 1;
        $scope.searchTerms = flickrSrvc.searchTerms;

        $scope.submit = function() {
            flickrSrvc.searchFlickr($scope.seachTerm, $scope.user, $scope.itemsNum, $scope.pageNum)
                .success(function(data) {
                    flickrSrvc.searchResults.push(data);
                    flickrSrvc.searchTerms.push($scope.seachTerm);
                    flickrSrvc.user = $scope.user;
                    $scope.seachTerm = "";
                    //console.log(JSON.stringify(searchTerms));
                });
        }

        $scope.tagDetails = function(index) {
            //console.log(searchTerms[index]);
            flickrSrvc.selectedTag = $scope.searchTerms[index];
            console.log(flickrSrvc.selectedTag)
            $state.go("results");
        }
	
}]);