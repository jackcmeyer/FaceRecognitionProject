(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("takephotoController", takephotoController);

    takephotoController.$inject = ['faceService', '$stateParams'];

    function takephotoController(faceService, $stateParams) {
        var vm = this;
        vm.dataUri = "";
        vm.takeSnapshot = takeSnapshot;
        vm.uploadImage = uploadImage;
        vm.cancelUpload = cancelUpload;

        function takeSnapshot() {
            Webcam.snap( function(data_uri) {
                vm.dataUri = data_uri;
            } );
        }

        function uploadImage() {
            faceService.recognizeStudent(vm.dataUri, "TestGallery")
                .then(success)
                .catch(fail);

            function success(data) {
                console.log(data);
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
