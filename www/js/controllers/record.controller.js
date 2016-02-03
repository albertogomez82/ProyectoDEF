angular
    .module('proyecto')
    .controller('RecordCtrl', RecordCtrl);

function RecordCtrl($scope) {
    $scope.settings = {
        enableFriends: true
    };
}