(function() {
    'use strict';

    angular
        .module('faceRecognitionApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['AuthService', '$location'];

    function NavbarController(AuthService, $location) {
        var vm = this;
        vm.isLoggedIn = AuthService.isLoggedIn;
        vm.logout = logout;
        vm.user = AuthService.currentUser;
        activate();

        function activate() {
            console.log(vm.isLoggedIn());
        }

        function logout() {
            AuthService.logout();
            $location.path('/login');
        }
    }
}());