angular
    .module('proyecto')
    .controller('ChatDetailCtrl',ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
}
