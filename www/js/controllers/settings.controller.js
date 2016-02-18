angular
    .module('proyecto')
    .controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl($scope, $ionicPopup, $cordovaSQLite) {
    /*$scope.settings = {
        enableFriends: true
    };*/

    $scope.eliminarBBDD = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Atencion',
            template: 'La base de datos va a ser eliminada'
        });
        confirmPopup.then(function (res) {
            if (res) {
                $cordovaSQLite.deleteDB("nextflow.db");
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };




    $scope.selectAll = function () {
        var query = "SELECT CODIGO FROM INVESTIGADOR";
        $cordovaSQLite.execute(db, query, []).then(function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    console.log("SELECTED -> " + res.rows.item(i));
                }
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
/*
    $scope.eliminarBBDD = function () {
        navigator.notification.confirm("La base de datos va a ser eliminada", function (buttonIndex) {
            switch (buttonIndex) {
                case 1:
                    console.log("Presionado cancelar");
                    break;
                case 2:
                    console.log("Presionado aceptar");
                   // $cordovaSQLite.deleteDB("nextflow.db");
                    break;
            }
        }, "Atencion", ["Cancelar",  "Aceptar"]);
    }*/
}


