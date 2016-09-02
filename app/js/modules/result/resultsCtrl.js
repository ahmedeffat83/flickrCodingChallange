flickr.controller('resultsCtrl', ['flickrSrvc', '$scope', '$timeout',
    function(flickrSrvc, $scope, $timeout){

    'use strict';

        $scope.results = [];
        //$scope.searchTerm = flickrSrvc.searchTerm;


        $scope.pagination = false;
        $scope.itemsNum = 20;
        // $scope.pageNum = 1;
        //
        // var pagination = function () {
        //  $scope.pagination = true;
        //  $scope.pageNum = 1;
        //  $scope.goFirstPage = function () {
        //  $scope.pageNum = 1;
        //  $scope.search($scope.pageNum);
        //  }
        //  $scope.goNextPage = function () {
        //  $scope.pageNum += 1;
        //  $scope.search($scope.pageNum);
        //  }
        //  $scope.goPrevPage = function () {
        //  $scope.pageNum -= 1;
        //  $scope.search($scope.pageNum);
        //  }
        //  $scope.goLastPage = function () {
        //  $scope.pageNum = $scope.lastPage;
        //  $scope.search(40);
        //  }
        //  }

        //$scope.submit = function() {
            flickrSrvc.searchFlickr(flickrSrvc.selectedTag, flickrSrvc.user, $scope.itemsNum, $scope.pageNum)
                .success(function(data) {
                    console.log(JSON.stringify(data));
                    $scope.results = data.photos.photo;
                });
        //}();
	
}]);