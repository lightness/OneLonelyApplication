(function () {
    angular
        .module('app')
        .service('simpleStorageService', SimpleStorageService);

    SimpleStorageService.$inject = [];
    function SimpleStorageService() {

        /* interface */
        this.setValue = setValue;
        this.getValue = getValue;

        /* implementation */
        var value = 'default value';

        function setValue(newValue) {
            value = newValue;
        }

        function getValue() {
            return value;
        }
    }
}());
