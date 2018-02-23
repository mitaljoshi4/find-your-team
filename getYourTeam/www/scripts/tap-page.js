$(document).on("pagecreate", "#tap-page", function () {
    $("#set").click(function () {
        teamNumber = document.getElementById('teamNumber').value;
        totalPlayers = document.getElementById('totalPlayers').value;
        teamMember = (totalPlayers / teamNumber);
        teamMember = Math.round(teamMember);
        tapCount = Acounter = Bcounter = Ccounter = Dcounter = Ecounter = 0;
        $("#teamLogo")[0].src = "";
        $("#Acount").empty();
        $("#Bcount").empty();
        $("#Ccount").empty();
        $("#Dcount").empty();
        $("#Ecount").empty();
    });

    $("#getMyTeam").click(function () {
        if (tapCount < totalPlayers) {
            console.log(teamMember);
            var RandomNumber = Math.floor((Math.random() * teamNumber) + 1);
            console.log(RandomNumber);
            if (teamNumber == 0 || totalPlayers == 0) {
                alert("Enter valid values.");
            }
            else if (teamNumber <= 5) {
                try {
                    gyt.getTeam(RandomNumber, teamMember, teamNumber,tapCount+1);
                }
                catch (err) {
                    console.log(err);
                    alert("No team available.");
                    //gyt.reset();
                }
                console.log("max", teamMember);
            }
            else {
                alert("You can add maximum five teams.");

            }
            tapCount++;
        } else if (totalPlayers == tapCount) {
            $.mobile.changePage("#result-page");
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

});

$(document).on("pagebeforeshow", "#tap-page", function () {
    //gyt.askTeam(function (result) {
    //    if (result.buttonIndex == 1) {
    //        gyt.numOfTeams = result.input1;
    //    } else {
    //        history.back();
    //    }
    //});
});

$(document).on("pageshow", "#tap-page", function () {

});