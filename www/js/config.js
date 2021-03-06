﻿angular
    .module("proyecto")
    .run(run);

function run($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }


        //window.sqlitePlugin.openDatabase({ name: "bbdd.db", createFromLocation: 1 });
        window.plugins.sqlDB.copy("bbdd.db", 0, function () {
            db =                 $cordovaSQLite.openDB("bbdd.db");
        }, function (error) {
            console.error("Se ha producido un error copiando la base de datos: " + error);
            db = $cordovaSQLite.openDB("bbdd.db");
        });

        //db = $cordovaSQLite.openDB("nextflow.db");
        //$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)');

        //agregado
        //db = $cordovaSQLite.openDB({ name: "my.db" });
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
    });
}