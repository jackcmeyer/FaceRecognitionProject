(function() {
    'use strict';

    angular
        .module('faceRecognitionApp')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['AuthService', '$location'];

    function AuthController(AuthService, $location) {
        var vm = this;
        vm.user = {};
        vm.error = {};
        vm.usernameError = '';
        vm.passwordError = '';
        vm.confirmPasswordError = '';
        vm.confirmPassword = '';
        vm.register = register;
        vm.login = login;
        activate();

        function activate() {
            if(AuthService.isLoggedIn()) {
                $location.path('/home');
            }
        }

        function register() {
            if(vm.user.username == '') vm.usernameError = 'Username cannot be empty';
            if(vm.user.password == '') vm.passwordError = 'Password cannot be empty';
            if(vm.confirmPassword == '') vm.confirmPasswordError = 'Confirm password cannot be empty';
            if(vm.user.password != vm.confirmPassword) vm.confirmPasswordError = 'Passwords do not match';
            if(vm.usernameError || vm.passwordError || vm.confirmPasswordError) return;

            return AuthService.register(vm.user)
                .then(function() {
                    $location.path('/home');
                })
                .catch(function (error) {
                    console.log(error);
                    vm.error = error;
                });
        }

        function login() {
            if(vm.user.username == '') vm.usernameError = 'Username cannot be empty';
            if(vm.user.password == '') vm.passwordError = 'Password cannot be empty';
            if(vm.usernameError || vm.passwordError) return;

            return AuthService.login(vm.user)
                .then(function() {
                    $location.path('/home');
                })
                .catch(function (error) {
                    console.log(error);
                    vm.error = error;
                });
        }
    }
}());
