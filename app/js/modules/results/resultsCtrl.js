flickr.controller('resultsCtrl', ['flickrSrvc', '$scope', '$timeout',
    function(flickrSrvc, $scope, $timeout){

    'use strict';

        $scope.results = [];
        $scope.pagination = false;
        $scope.itemsNum = 20;
        $scope.pageNum = 1;


        // displaying tiles according to the selected tile's tag
        flickrSrvc.searchFlickr(flickrSrvc.selectedTag, flickrSrvc.user, $scope.itemsNum, $scope.pageNum)
            .success(function (data) {
                $scope.results = data.photos.photo;
                $scope.pagination = true;
                $scope.lastPage = data.photos.pages;
                //console.log(JSON.stringify(data))
            });

        // pagination
         $scope.paginate = function(type) {
            switch (type) {
                case 'prev':
                    $scope.pageNum -= 1;
                    break;
                case 'next':
                    $scope.pageNum += 1;
                    break
                case 'last':
                    $scope.pageNum = $scope.lastPage;
                    break
                default:
                    $scope.pageNum = 1;
            }
             flickrSrvc.searchFlickr(flickrSrvc.selectedTag, flickrSrvc.user, $scope.itemsNum, $scope.pageNum)
                 .success(function (data) {
                     $scope.results = data.photos.photo;
                     $scope.lastPage = data.photos.pages;
                     //console.log(JSON.stringify(data))
                 });
        }



	
}]);