angular
    .module('proyecto')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $cordovaSQLite) {
    
    $scope.save = function (newMessage) {
    //function save(newMessage) {
        $cordovaSQLite.execute(db, 'INSERT INTO Messages (message) VALUES (?)', [newMessage])
            .then(function (result) {
                $scope.statusMessage = "Message saved successful, cheers!";
            }, function (error) {
                $scope.statusMessage = "Error on saving: " + error.message;
            })

    }

    $scope.load = function () {
    //function load(){
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM Messages ORDER BY id DESC')
            .then(
                function (result) {

                    if (result.rows.length > 0) {

                        $scope.newMessage = result.rows.item(0).message;
                        $scope.statusMessage = "Message loaded successful, cheers!";
                    }
                },
                function (error) {
                    $scope.statusMessage = "Error on loading: " + error.message;
                }
            );
    }
    /*
    $scope.insert = function (firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function (res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
    }

    $scope.select = function (lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function (res) {
            if (res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
    */
}