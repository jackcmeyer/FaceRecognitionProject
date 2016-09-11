(function() {
    'use strict';

    angular
        .module('faceRecognitionApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$window', '$resource', '$q'];

    function AuthService($window, $resource, $q) {
        return {
            saveToken: saveToken,
            getToken: getToken,
            isLoggedIn: isLoggedIn,
            currentUser: currentUser,
            register: register,
            login: login,
            logout: logout
        };

        function saveToken(token) {
            $window.localStorage["faceapp-token"] = token;
        }

        function getToken() {
            return $window.localStorage["faceapp-token"];
        }

        function isLoggedIn() {
            var token = getToken();

            if(token){
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        }

        function currentUser() {
            if(isLoggedIn()){
                var token = getToken();
                console.log('In current user auth service' + token);
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.username;
            }
        }

        function register(user) {
            return $resource('/api/register', {}, {
                execute: {
                    method: 'POST'
                }
            }).execute(user).$promise
                .then(success)
                .catch(fail);

            function success(data) {
                return saveToken(data.token);
            }

            function fail (error) {
                return $q.reject(error);
            }
        }

        function login(user) {
            return $resource('/api/login', {}, {
                execute: {
                    method: 'POST'
                }
            }).execute(user).$promise
                .then(success)
                .catch(fail);


            function success(data) {
                console.log('In auth service login' + data);
                return saveToken(data.token);
            }

            function fail (error) {
                return $q.reject(error);
            }
        }

        function logout() {
            $window.localStorage.removeItem("faceapp-token");
        }
    }
}());
