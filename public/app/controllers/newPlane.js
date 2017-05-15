var controllers = angular.module('AirplaneApp');

controllers.controller('NewPlaneCtrl', ['$scope', '$state', '$stateParams', 'PlanesAPI', function($scope, $state, $stateParams, PlanesAPI) {
    $scope.plane = {};
    $scope.newPlane = newPlane;

    function newPlane() {
        PlanesAPI.newPlane($scope.plane).then(function(res) {
            $state.go('plane', { id: res.data._id });
        }).catch(function(error) {
            console.log('error', error);
        });
    }
}]);
