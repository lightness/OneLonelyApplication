(function() {
    angular
        .module('app')
        .controller('Feature1Page2Controller', Feature1Page2Controller);

    Feature1Page2Controller.$inject = ["$scope", "simpleStorageService"];
    function Feature1Page2Controller($scope, simpleStorageService) {
        $scope.message = 'World';
        $scope.loadValue = loadValue;

        function loadValue() {
            $scope.value = simpleStorageService.getValue();
        }
    }
} ());
