(function() {
    angular
        .module('app')
        .controller('Feature1Page1Controller', Feature1Page1Controller);

    Feature1Page1Controller.$inject = ["$scope", 'countryRestService'];
    function Feature1Page1Controller($scope, countryRestService) {
        countryRestService.get().$promise
            .then(function (response) {
                $scope.message = angular.toJson(response.countries);
            });
        $scope.message = 'Loading....';
    }
} ());
