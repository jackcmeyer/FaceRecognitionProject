(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .factory("HomeService", HomeService);

    HomeService.$inject = ['$http', '$q'];

    function HomeService($http, $q) {

        return {
            getAllClasses: getAllClasses,
            detectFaces: detectFaces,
            enroll: enroll,
            recognize: recognize,
            listAllGalleries: listAllGalleries,
            listFacesInGallery: listFacesInGallery
        };

        function detectFaces() {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/detect',
                data: {"image": "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/13775591_1326231040739242_5433109909074169063_n.jpg?oh=84ff7430ad4ef2e436477c13d87b379f&oe=583D9E69"}
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response;
            }

            function fail(error) {
                return error;
            }
        }

        function enroll() {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/enroll',
                data: {
                    // "image": "https://scontent-dft4-2.xx.fbcdn.net/v/t34.0-12/14383446_1381959711833041_1125760697_n.jpg?oh=b949489b032c25d203ab1d0ac19ee474&oe=57E15E3E",
                    // "image": "https://scontent-dft4-2.xx.fbcdn.net/v/t34.0-12/14389838_1381959761833036_919222079_n.jpg?oh=94d5515511dad34367576d587c4d821c&oe=57E1AF80",
                    // "image": "https://scontent-dft4-2.xx.fbcdn.net/v/t34.0-12/14408964_1381959781833034_115641236_n.jpg?oh=117465111b4eab6c7b080db5a6629749&oe=57E09EBE",
                    "image": "https://scontent-dft4-2.xx.fbcdn.net/v/t34.0-12/14389883_1381959801833032_1745762244_n.jpg?oh=7d80c5fdb360408dcce8b9e71984282d&oe=57E190FB",
                    "subject_id": "459620181",
                    "gallery_name": "TestGallery",
                    "selector": "SETPOSE",
                    "symmetricFill": "true"
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response;
            }

            function fail(error) {
                return error;
            }
        }

        function recognize() {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/recognize',
                data: {
                    "image": "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/13680862_1334117219950624_7898690056188374288_n.jpg?oh=ad2df242ffed3be593c1a3cf938a07ae&oe=583B2FF9",
                    "gallery_name": "TestGallery",
                    "threshold": ".5"
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response;
            }

            function fail(error) {
                return error;
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
                return response;
            }

            function fail(error) {
                return error;
            }
        }

        function listFacesInGallery() {
            return $http({
                method: 'POST',
                headers: {app_id: "e3c6b136", app_key: "6b288970940333122917b47297b449a7"},
                url: 'http://api.kairos.com/gallery/view',
                data: {
                    "gallery_name": "TestGallery"
                }
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response;
            }

            function fail(error) {
                return error;
            }
        }

        function getAllClasses(user) {
            return $http({
                method: 'GET',
                url: '/api/getclasses',
                params: {username: user}
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }
    }

})();
