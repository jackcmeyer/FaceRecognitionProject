(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .factory("studentService", studentService);

    studentService.$inject = ['$http'];

    function studentService($http) {

        return {
            addStudent: addStudent,
            getStudent: getStudent,
            updateStudent: updateStudent,
            removeStudent: removeStudent
        };

        function addStudent(student) {
            return $http.post("/api/addstudent", student)
                .then(success)
                .catch(fail);
            
            function success(response) {
                console.log("Service data: " + response.data);
                alert(response.data);
            }
            
            function fail(error) {
                console.log("Service error " + error);
            }
        }

        function getStudent(student) {

        }

        function updateStudent(student) {

        }

        function removeStudent(student) {

        }
    }

})();