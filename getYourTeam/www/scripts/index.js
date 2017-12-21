// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var Acounter = 0, Bcounter = 0, Ccounter = 0, Dcounter = 0, Ecounter = 0, tapCount = 0;
var teamMember, teamNumber, totalPlayers;
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var setbtn = document.getElementById('set');
        var button = document.getElementById('getMyTeam');
        setbtn.addEventListener('click', function () {
            teamNumber = document.getElementById('teamNumber').value;
            totalPlayers = document.getElementById('totalPlayers').value;
            teamMember = (totalPlayers / teamNumber);
            teamMember = Math.round(teamMember);
            tapCount = Acounter = Bcounter = Ccounter = Dcounter = Ecounter = 0;
            $("#teamLogo")[0].src = "";
            $("#Acount").html('0');
            $("#Bcount").html('0');
            $("#Ccount").html('0');
            $("#Dcount").html('0');
            $("#Ecount").html('0');
        });

        button.addEventListener('click', function () {
            if (tapCount < totalPlayers) {
                console.log(teamMember);
                var RandomNumber = Math.floor((Math.random() * teamNumber) + 1);
                console.log(RandomNumber);
                if (teamNumber == 0 || totalPlayers == 0) {
                    alert("Enter valid values.");
                }
                else if (teamNumber <= 5) {
                    try {
                        getTeam(RandomNumber, teamMember, teamNumber);
                    }
                    catch (err) {
                        console.log(err);
                        alert("No team available.");
                        reset();
                    }
                    console.log("max", teamMember);
                }
                else {
                    alert("You can add maximum five teams.");

                }
                tapCount++;
            }
            else {
                alert("No more players allowed.");
                $("#playersLabel").fadeOut('fast');
                $("#teamLabel").fadeOut('fast');
                $('#teamNumber').val('');
                $('#totalPlayers').val('');
                $("#teamLogo")[0].src = "";
                tapCount = Acounter = Bcounter = Ccounter = Dcounter = Ecounter = teamMember = totalPlayers = teamNumber = 0;
            }

        });
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
function reset() {
    $("#playersLabel").fadeOut('fast');
    $("#teamLabel").fadeOut('fast');
    $("#teamLogo")[0].src = "";
    $('#teamNumber').val('');
    $('#totalPlayers').val('');
    $("#Acount").html('0');
    $("#Bcount").html('0');
    $("#Ccount").html('0');
    $("#Dcount").html('0');
    $("#Ecount").html('0');
    tapCount = Acounter = Bcounter = Ccounter = Dcounter = Ecounter = teamMember = totalPlayers = teamNumber = 0;
}
function getTeam(RandomNumber, max, teamNum) {
    switch (RandomNumber) {
        case 1:
            if (Acounter < max) {
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-a.png";
                $("#teamLogo").fadeIn('fast');
                Acounter++;
                $("#Acount").html(Acounter);
            }
            else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                getTeam(RandomNumber, max, teamNum);
            }
            console.log("Acounter", Acounter);
            break;
        case 2:
            if (Bcounter < max) {
                //alert("Team B");
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-b.png";
                $("#teamLogo").fadeIn('fast');
                Bcounter++;
                $("#Bcount").html(Bcounter);
            }
            else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                getTeam(RandomNumber, max, teamNum);
            }
            console.log("Bcounter", Bcounter);
            break;
        case 3:
            if (Ccounter < max) {
                //alert("Team C");
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-c.png";
                $("#teamLogo").fadeIn('fast');
                Ccounter++;
                $("#Ccount").html(Ccounter);
            }
            else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                getTeam(RandomNumber, max, teamNum);
            }
            console.log("Ccounter", Ccounter);
            break;
        case 4:
            if (Dcounter < max) {
                //alert("Team D");
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-d.png";
                $("#teamLogo").fadeIn('fast');
                Dcounter++;
                $("#Dcount").html(Dcounter);
            }
            else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                getTeam(RandomNumber, max, teamNum);
            }
            console.log("Dcounter", Dcounter);
            break;
        case 5:
            if (Ecounter < max) {
                //alert("Team E");
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-e.png";
                $("#teamLogo").fadeIn('fast');
                Ecounter++;
                $("#Ecount").html(Ecounter);

            }
            else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                getTeam(RandomNumber, max, teamNum);
            }
            console.log("Ecounter", Ecounter);
            break;
        default:
            alert("Game Over.");
            break;
    }


}
$(document).on("pagecreate", "#home", function () {

});