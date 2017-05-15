var controllers = angular.module('AirplaneApp');

controllers.controller('UpdateCtrl', ['$scope', '$state', '$stateParams', 'PlanesAPI', function($scope, $state, $stateParams, PlanesAPI) {
    planeDetail();
    $scope.planeInfo;
    $scope.updateDetails = updateDetails;

    var planeInfo;

    function planeDetail() {
        PlanesAPI.getPlane($stateParams.id).then(function(res) {
            planeInfo = res.data;
            $scope.planeInfo = planeInfo;
        }).catch(function(error) {
            console.log('error', error);
        });
    }

    function updateDetails() {
        var id = planeInfo._id;
        PlanesAPI.updatePlane(id, $scope.planeInfo).then(function(res) {
            $state.go('plane', { id: id });
        }).catch(function(error) {
            console.log('error', error);
        });
    }
}]);
