(function() {
    angular
        .module('app')
        .controller('InnerController', InnerController);

    InnerController.$inject = ["$scope"];
    function InnerController($scope) {

        $scope.innerValue = "World";

    }
} ());
