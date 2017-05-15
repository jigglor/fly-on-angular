var controllers = angular.module('AirplaneApp');

controllers.controller('DetailsCtrl', ['$scope', '$stateParams', 'PlanesAPI', function($scope, $stateParams, PlanesAPI) {
    planeDetail();
    $scope.plane = {};

    function planeDetail() {
        PlanesAPI.getPlane($stateParams.id).then(function(res) {
            $scope.plane = res.data;
            console.log(res.data);
        }).catch(function(error) {
            console.log('error', error);
        });
    }
}]);
