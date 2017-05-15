var factories = angular.module('AirplaneApp');

factories.factory('PlanesAPI', ['$http', function($http) {
    return {
        getPlanes: getPlanes,
        getPlane: getPlane,
        newPlane: newPlane,
        deletePlane: deletePlane,
        updatePlane: updatePlane
    };

    function getPlanes() {
        return $http.get('/api/airplanes');
    }

    function getPlane(id) {
        return $http.get('/api/airplanes/' + id);
    }

    function newPlane(plane) {
        return $http.post('/api/airplanes', plane);
    }

    function deletePlane(id) {
        return $http.delete('/api/airplanes/' + id);
    }

    function updatePlane(id, plane) {
        return $http.put('/api/airplanes/' + id, plane);
    }
}]);
