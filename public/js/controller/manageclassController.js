(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("manageclassController", manageclassController);

    manageclassController.$inject = ['ClassService', '$stateParams', '$q'];

    function manageclassController(ClassService, $stateParams, $q) {
        var vm = this;
        vm.classId = $stateParams.class;
        vm.class = {};
        activate();

        function activate() {
            return ClassService.getClass(vm.classId)
                .then(success)
                .catch(fail);

            function success(data) {
                vm.class = data;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }
    }
})();
