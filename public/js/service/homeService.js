(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .factory("HomeService", HomeService);

    HomeService.$inject = ['$http', '$q'];

    function HomeService($http, $q) {

        return {
            getAllClasses: getAllClasses
        };

        function getAllClasses(user) {
            return $http({
                method: 'GET',
                url: '/api/getclasses',
                params: {username: user}
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }
    }

})();
