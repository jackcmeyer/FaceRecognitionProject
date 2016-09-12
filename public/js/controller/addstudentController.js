(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .controller("addstudentController", addstudentController);

    addstudentController.$inject = ['studentService'];

    function addstudentController(studentService) {
        var vm = this;
        vm.studentName = "";
        vm.studentHomeTown = "";
        vm.studentMajor = "";
        vm.studentGraduatingClass = "";
        vm.studentPicture = "";

        vm.studentNameError = "";
        vm.studentHomeTownError = "";
        vm.studentMajorError = "";
        vm.studentGraduatingClassError = "";
        vm.studentPictureError = "";

        vm.submitForm = submitForm;


        function submitForm() {
            vm.studentNameError = vm.studentHomeTownError = vm.studentMajorError = vm.studentGraduatingClassError = "";

            if(vm.studentName === "")
                vm.studentNameError = "Student Name canot be empty";

            if(vm.studentHomeTown === "")
                vm.studentHomeTownError = "Student Hometown cannot be empty";

            if(vm.studentMajor === "")
                vm.studentMajorError = "Student Major cannot be empty";

            if(vm.studentGraduatingClass === "")
                vm.studentGraduatingClassError = "Student Graduating Class cannot be empty";

            if(vm.studentPicture === "")
                vm.studentPictureError = "Student Picture cannot be empty.";

            if(vm.studentNameError || vm.studentHomeTownError || vm.studentMajorError || vm.studentGraduatingClassError || vm.studentPictureError)
                return;

            var student = {
                studentName: vm.studentName,
                studentHomeTown: vm.studentHomeTown,
                studentMajor: vm.studentMajor,
                studentGraduatingClass: vm.studentGraduatingClass,
                studentPicture: vm.studentPicture
            };

            return studentService.addStudent(student)
                .then(function(data) {
                    console.log("Controller data: " + data);
                    alert(data);
                });
        }
    }
})();
