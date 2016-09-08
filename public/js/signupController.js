(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("signupController", signupController);

    function signupController() {
        var vm = this;
        vm.username = "";
        vm.usernameError = "";
        vm.password = "";
        vm.passwordError = "";
        vm.confirmPassword = "";
        vm.confirmPasswordError = "";
        vm.submitForm = submitForm;

        function submitForm() {
            vm.usernameError = vm.passwordError = vm.confirmPasswordError = "";

            if(vm.username == "") vm.usernameError = "Username cannot be empty";
            if(vm.password == "") vm.passwordError = "Password cannot be empty";
            if(vm.confirmPassword == "") vm.confirmPasswordError = "Confirm password cannot be empty";
            if(vm.password != vm.confirmPassword) vm.confirmPasswordError = "Passwords do not match";

            if(vm.username == "" || vm.password == "" || vm.confirmPassword == "" || vm.password != vm.confirmPassword)
                return;
        }

    }

})();
