(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .factory("faceService", faceService);

    faceService.$inject = ['$http'];

    function faceService($http) {

        return {
            enrollStudent: enrollStudent,
            removeStudent: removeStudent,
            recognizeStudent: recognizeStudent,
            listAllGalleries: listAllGalleries,
            listStudentsInGallery: listStudentsInGallery,
            removeGallery: removeGallery
        };

        function enrollStudent(imageUrl, studentId, galleryName) {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/enroll',
                data: {
                    "image": imageUrl,
                    "subject_id": studentId,
                    "gallery_name": galleryName,
                    "selector": "SETPOSE",
                    "symmetricFill": "true"
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                console.log(response);
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }

        function removeStudent(studentId, galleryName) {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/gallery/remove_subject',
                data: {
                    "gallery_name": galleryName,
                    "subject_id": studentId
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }

        function recognizeStudent(imageUrl, galleryName) {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/recognize',
                data: {
                    "image": imageUrl,
                    "gallery_name": galleryName,
                    "threshold": ".5"
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }

        function listAllGalleries() {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/gallery/list_all'
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }

        function listStudentsInGallery(galleryName) {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/gallery/view',
                data: {
                    "gallery_name": galleryName
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }

        function removeGallery(galleryName) {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/gallery/remove',
                data: {
                    "gallery_name": galleryName
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                console.log(error);
            }
        }
    }

})();
