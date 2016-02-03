angular
    .module('proyecto')
    .controller('ReportsCtrl', ReportsCtrl);

function ReportsCtrl($scope) {
    $scope.settings = {
        enableFriends: true
    };
}