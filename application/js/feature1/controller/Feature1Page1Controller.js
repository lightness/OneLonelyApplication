(function() {
    angular
        .module('app')
        .controller('Feature1Page1Controller', Feature1Page1Controller);

    Feature1Page1Controller.$inject = ["$scope", 'countryRestService', 'simpleStorageService'];
    function Feature1Page1Controller($scope, countryRestService, simpleStorageService) {

        $scope.saveValue = saveValue;
        $scope.message = 'Loading....';

        $scope.message = countryRestService.get();
        debugger;

            // .$promise
            // .then(function (response) {
            //     angular.toJson(response.countries);
            // });

        function saveValue() {
            simpleStorageService.setValue($scope.value);
        }
    }
} ());
