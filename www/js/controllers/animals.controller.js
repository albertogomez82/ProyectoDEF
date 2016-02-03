angular
    .module('proyecto')
    .controller('AnimalsCtrl', AnimalsCtrl);

function AnimalsCtrl($scope) {
    $scope.settings = {
        enableFriends: true
    };
}