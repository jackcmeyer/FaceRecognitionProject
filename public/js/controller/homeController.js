(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("homeController", homeController);

    homeController.$inject = ['AuthService', 'HomeService', '$q'];


    function homeController(AuthService, HomeService, $q) {
        var vm = this;
        vm.classes = {};

        var user = AuthService.currentUser();
        getAllClasses();

        function getAllClasses() {
            return HomeService.getAllClasses(user)
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                vm.classes = response.data;
                return response;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }
    }
})();
