(function() {
    'use strict';

    angular.module("faceRecognitionApp", ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'loginController',
                controllerAs: 'vm'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'partials/signup.html',
                controller: 'signupController',
                controllerAs: 'vm'
            })
            .state('manageclass', {
                url:'/manageclass',
                templateUrl: 'partials/manageclass.html',
                controller: 'manageclassController',
                controllerAs: 'vm'
            })
            .state('addstudent', {
                url: '/addstudent',
                templateUrl: 'partials/addstudent.html',
                controller: 'addstudentController',
                controllerAs: 'vm'
            })
            .state('addclass', {
                url: '/addclass',
                templateUrl: 'partials/addclass.html',
                controller: 'addclassController',
                controllerAs: 'vm'
            })
            .state('takephoto', {
                url: '/takephoto',
                templateUrl: 'partials/takephoto.html',
                controller: 'takephotoController',
                controllerAs: 'vm'
            });
    }
})();
