flickr.service('$exceptionHandler', ['$injector',
    function($injector) {

        'use strict';
        return function(exception, cause) {
            var $rootScope = $injector.get("$rootScope");
            $rootScope.errors.push(exception.message);
            $rootScope.currentError = exception.message;
            console.warn($rootScope.errors);
        }

    }
]);