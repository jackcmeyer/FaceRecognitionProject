(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("addstudentController", addstudentController);

    function addstudentController() {
        var vm = this;
        vm.studentName = "";
        vm.studentHomeTown = "";
        vm.studentMajor = "";
        vm.studentGraduatingClass = "";
        vm.studentPiture = "";

        vm.studentNameError = "";
        vm.studentHomeTownError = "";
        vm.studentMajorError = "";
        vm.studentGraduatingClassError = "";

        vm.submitForm = submitForm;


        function submitForm() {
            vm.studentNameError = vm.studentHomeTownError = vm.studentMajorError = vm.studentGraduatingClassError = "";

            if(vm.studentName === "") {
                vm.studentNameError = "Student Name canot be empty";
            }

            if(vm.studentHomeTown === "") {
                vm.studentHomeTownError = "Student Hometown cannot be empty";
            }

            if(vm.studentMajor === "") {
                vm.studentMajorError = "Student Major cannot be empty";
            }

            if(vm.studentGraduatingClass === "") {
                vm.studentGraduatingClassError = "Student Graduating Class cannot be empty";
            }

            if(vm.studentPicture === "") {
                vm.studentPictureError = "Student Picture cannot be empty.";
            }
        }
    }
})();
