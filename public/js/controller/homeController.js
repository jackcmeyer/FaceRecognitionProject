(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("homeController", homeController);

    homeController.$inject = ['AuthService', 'HomeService', '$q', '$location'];


    function homeController(AuthService, HomeService, $q, $location) {
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

        // Testing purposes. Remove later
        vm.detectFaces = detectFaces;
        vm.enroll = enroll;
        vm.recognize = recognize;
        vm.listAllGalleries = listAllGalleries;
        vm.listFacesInGallery = listFacesInGallery;
        vm.galleries = [];
        vm.faces = [];
        function detectFaces() {
            return HomeService.detectFaces()
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                return response;
            }

            function fail(error) {
                console.log(error.data);
                return error;
            }
        }

        function enroll() {
            return HomeService.enroll()
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                return response;
            }

            function fail(error) {
                console.log(error.data);
                return error;
            }
        }

        function recognize() {
            return HomeService.recognize()
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                return response;
            }

            function fail(error) {
                console.log(error.data);
                return error;
            }
        }

        function listAllGalleries() {
            return HomeService.listAllGalleries()
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                vm.galleries = response.data.gallery_ids;
                return response;
            }

            function fail(error) {
                console.log(error.data);
                return error;
            }
        }

        function listFacesInGallery() {
            return HomeService.listFacesInGallery()
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response.data);
                vm.faces = response.data.subject_ids;
                return response;
            }

            function fail(error) {
                console.log(error.data);
                return error;
            }
        }
    }
})();
