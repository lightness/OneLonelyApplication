(function() {
    angular
        .module('app')
        .controller('Feature1Page1Controller', Feature1Page1Controller);

    Feature1Page1Controller.$inject = ["$scope"];
    function Feature1Page1Controller($scope) {
        $scope.message = 'Hello';
    }
} ());
