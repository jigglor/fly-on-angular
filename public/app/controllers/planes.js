var controllers = angular.module('AirplaneApp');

controllers.controller('PlanesCtrl', ['$scope', 'PlanesAPI', function($scope, PlanesAPI) {
    getPlanes();
    $scope.planes = [];
    $scope.deletePlane = deletePlane;

    function getPlanes() {
        PlanesAPI.getPlanes().then(function(res) {
            $scope.planes = res.data;
        }).catch(function(error) {
            console.log('error', error);
        });
    }

    function deletePlane(id) {
        PlanesAPI.deletePlane(id).then(function() {
            window.location.replace('');
        }).catch(function(error) {
            console.log('error', error);
        });
    }
}]);
