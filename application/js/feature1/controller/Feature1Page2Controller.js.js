(function() {
    angular
        .module('app')
        .controller('Feature1Page2Controller', Feature1Page2Controller);

    Feature1Page2Controller.$inject = ["$scope"];
    function Feature1Page2Controller($scope) {
        $scope.message = 'World';
    }
} ());
