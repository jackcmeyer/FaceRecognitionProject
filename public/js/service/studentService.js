(function() {
    'use strict';

    angular.module("faceRecognitionApp")
        .factory("studentService", studentService);

    studentService.$inject = ['$http'];

    function studentService($http) {

        return {
            addStudent: addStudent,
            getStudent: getStudent,
            getAllStudents: getAllStudents,
            updateStudent: updateStudent,
            removeStudent: removeStudent
        };

        function addStudent(student, id) {
            return $http.post("/api/addstudent/" + id, student)
                .then(success)
                .catch(fail);
            
            function success(response) {
                return response.data;
            }
            
            function fail(error) {
                console.log(error);
            }
        }

        function getStudent(student) {

        }

        function getAllStudents() {

        }

        function updateStudent(student) {

        }

        function removeStudent(student) {

        }
    }

})();