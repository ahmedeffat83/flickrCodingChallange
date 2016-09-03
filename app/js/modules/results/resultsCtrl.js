flickr.controller('resultsCtrl', ['flickrSrvc', '$scope', '$state',
    function(flickrSrvc, $scope, $state){

    'use strict';

        if(flickrSrvc.successfulSearch) {
            $scope.results = [];
            $scope.pagination = false;
            $scope.itemsNum = 20; // default
            $scope.pageNum = 1;


            // displaying tiles according to the selected tile's tag
            flickrSrvc.searchFlickr(flickrSrvc.selectedTag, flickrSrvc.user, $scope.itemsNum, $scope.pageNum)
                .success(function (data) {
                    console.log(JSON.stringify(data.photos.photo));
                    $scope.results = data.photos.photo;
                    $scope.pagination = true;
                    $scope.lastPage = data.photos.pages;
                }).error(function(error) {
                    $state.go("search");
            });

            // pagination
            $scope.paginate = function (type) {
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
                    }).error(function (error) {
                        $state.go("search");
                });
            }
        } else {
            $state.go("search");
        }



	
}]);