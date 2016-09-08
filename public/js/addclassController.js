(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("addclassController", addclassController);

    function addclassController() {
        var vm = this;

        vm.classname = "";
        vm.classnameError = "";
        vm.submitForm = submitForm;

        function submitForm() {

            vm.classnameError = "";


            if(vm.classname === "") {
                vm.classnameError = "Class Name cannot be empty";

                return;
            }


            console.log(vm)

        }
    }



})();
