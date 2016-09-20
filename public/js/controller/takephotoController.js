(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("takephotoController", takephotoController);

    takephotoController.$inject = ['faceService', 'ClassService', '$stateParams'];

    function takephotoController(faceService, ClassService, $stateParams) {
        var vm = this;
        vm.classId = '';
        vm.students = [];
        vm.dataUri = '';
        vm.newPicture = '';
        vm.activate = activate;
        vm.takeSnapshot = takeSnapshot;
        vm.uploadImage = uploadImage;
        vm.cancelUpload = cancelUpload;

        activate();

        function activate() {
            ClassService.getClass($stateParams.class)
                .then(success)
                .catch(fail);

            function success(response) {
                vm.students = response.students;
                vm.classId = response.classname;
            }

            function fail(error) {
                console.log(error);
            }
        }

        function takeSnapshot() {
            Webcam.snap( function(data_uri) {
                vm.dataUri = data_uri;
            });
        }

        function uploadImage() {
            faceService.recognizeStudent(vm.newPicture, vm.classId)
                .then(success)
                .catch(fail);

            function success(data) {
                var names = [];

                var foundStudentIds = faceService.pullFacesFromResponse(data);

                for(var i = 0; i < foundStudentIds.length; i++) {
                    var currentId = foundStudentIds[i];

                    for(var j = 0; j < vm.students.length; j++) {
                        if (currentId == vm.students[j]._id) {
                            names.push(vm.students[j].studentName);
                        }
                    }
                }

                faceService.detectAndCircleFaces(names);
            }

            function fail(data) {
                console.log(data);
            }
        }

        function cancelUpload() {
            vm.dataUri = "";
        }
    }

})();
