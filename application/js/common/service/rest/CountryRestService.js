(function () {
    angular
        .module('app')
        .service('countryRestService', CountryRestService);

    CountryRestService.$inject = ['$resource'];
    function CountryRestService($resource) {
        return $resource('http://lombard.dev.orangesoft.co/api/v1/countries', {}, {
            get: {
                method: 'GET',
                headers: {"X-Api-Token": "21kj5r12k54k214"} // Now this header not used. It is only for example.
            }
        });
    }
}());