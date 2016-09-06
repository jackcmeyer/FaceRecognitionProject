(function() {
    angular.module("faceRecognitionApp", [])
        .config = config;

    config.$inject = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();