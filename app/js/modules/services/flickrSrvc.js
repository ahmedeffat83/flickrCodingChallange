flickr.service('flickrSrvc', ['$http', '$rootScope',
    function($http, $rootScope) {
        'use strict';

        this.searchResults = [];
        this.searchTerms = [];
        this.users = [];
        this.selectedTag = null;
        this.selectedUser = null
        // Error handeling
        $rootScope.currentError = null;


        this.searchFlickr = function(tag, user, items, page) {
            return $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.search',
                    api_key: '6a6bfe53444e7fa7db4028587ccf49c0',
                    format: "json",
                    nojsoncallback: 1,
                    tags: tag,
                    user_id: user,
                    sort: 'interestingness-desc',
                    per_page: items,
                    extras: 'date_upload, date_taken, owner_name, views, url_q',
                    page: page
                }
            }).success(function(data) {
                //console.log(JSON.stringify(data))
            }).error(function(error) {
                $rootScope.currentError = ("Error retrieving JSON data");
                console.warn($rootScope.currentError);
            });
        }
    }
]);