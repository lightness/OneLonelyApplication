(function() {
    angular
        .module('app')
        .controller('MenuController', MenuController);

    MenuController.$inject = ["$scope", "$location"];
    function MenuController($scope, $location) {
        $scope.goto = function (path) {
            $location.path(path);
        };
    }
} ());