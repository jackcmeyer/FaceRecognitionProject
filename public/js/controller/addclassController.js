(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("addclassController", addclassController);

    addclassController.$inject = ['AuthService', '$location', '$http'];

    function addclassController(AuthService, $location, $http) {
        var vm = this;

        vm.class = {};
        vm.classname = "";
        vm.username = "";
        vm.classnameError = "";

        vm.submitForm = submitForm;

        function submitForm() {
            vm.classnameError = "";

            vm.username = AuthService.currentUser();

            if(vm.classname === "") {
                vm.classnameError = "Class Name cannot be empty";
                return;
            }

            else {
                vm.class.username = vm.username;
                vm.class.classname = vm.classname;

                addClass(vm.class);
                console.log(vm)
}

        function addClass(addclass) {
            return $http({
                method: 'POST',
                url: '/api/addclass',
                data: addclass
            })
                .then(success)
                .catch(fail);

            function success(data) {
                $location.path('/home');
                return data;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }
    }
}


})();
