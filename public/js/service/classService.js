(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .factory("ClassService", ClassService);

    ClassService.$inject = ['$http'];

    function ClassService($http) {

        return {
            getClass: getClass
        };

        function getClass(id) {
            return $http.get('/api/getClass/' + id)
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response);
                console.log(response.data);
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }
    }
})();