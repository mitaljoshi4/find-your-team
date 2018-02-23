var gyt = {};
gyt.askTeam = function (callback) {
    navigator.notification.prompt(
          'Please enter Player name/names :',  // message
          callback,                  // callback to invoke
          'Add Name',            // title
          ['Add', 'Exit'],             // buttonLabels
          'New Player1'                 // defaultText
      );
};

gyt.reset = function () {
    $("#playersLabel").fadeOut('fast');
    $("#teamLabel").fadeOut('fast');
    $("#teamLogo")[0].src = "";
    $('#teamNumber').val('');
    $('#totalPlayers').val('');
    $("#Acount").empty();
    $("#Bcount").empty();
    $("#Ccount").empty();
    $("#Dcount").empty();
    $("#Ecount").empty();
    $("#tap-counter").html("0");
    tapCount = Acounter = Bcounter = Ccounter = Dcounter = Ecounter = teamMember = totalPlayers = teamNumber = 0;
};

gyt.getTeam = function (RandomNumber, max, teamNum, memberName) {
    $("#tap-counter").html(memberName);
    switch (RandomNumber) {
        case 1:
            if (Acounter < max) {
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-a.png";
                $("#teamLogo").fadeIn('fast');
                Acounter++;
                $("#Acount").append(memberName + "<br/>");
                $("#Aheader").html("A (" + Acounter + ")");
            } else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                gyt.getTeam(RandomNumber, max, teamNum, memberName);
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
                $("#Bcount").append(memberName + "<br/>");
                $("#Bheader").html("B (" + Bcounter + ")");
            } else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                gyt.getTeam(RandomNumber, max, teamNum, memberName);
            }
            console.log("Bcounter", Bcounter);
            break;
        case 3:
            if (Ccounter <= max) {
                //alert("Team C");
                $("#teamLogo").fadeOut('fast');
                $("#teamLogo")[0].src = "images/letter-c.png";
                $("#teamLogo").fadeIn('fast');
                Ccounter++;
                $("#Ccount").append(memberName + "<br/>");
                $("#Cheader").html("C (" + Ccounter + ")");
            } else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                gyt.getTeam(RandomNumber, max, teamNum, memberName);
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
                $("#Dcount").append(memberName + "<br/>");
                $("#Dheader").html("D (" + Dcounter + ")");
            } else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                gyt.getTeam(RandomNumber, max, teamNum, memberName);
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
                $("#Ecount").append(memberName + "<br/>");
                $("#Eheader").html("E (" + Ecounter + ")");

            } else {
                RandomNumber = Math.floor((Math.random() * teamNum) + 1);
                gyt.getTeam(RandomNumber, max, teamNum, memberName);
            }
            console.log("Ecounter", Ecounter);
            break;
        default:
            alert("Game Over.");
            break;
    }
};

gyt.getTeamByName = function (memberArray, teamNumber) {
    $(".table").empty();
    var table = $(".table");
    table.append("<thead></thead>");
    var tblHeader = $('thead');
    for (var i = 1; i <= teamNumber; i++) {
        tblHeader.append("<th>Team " + i + "</th>");
    }
    //table.append(tblHeader);
    table.append("<tbody></tbody>");
    var tblbody = $('tbody');
    tblbody.append("<tr class='border'>");
    var clmCounter = 0
    $.each(memberArray,
        function (k, item) {
           if (clmCounter == teamNumber) {
               tblbody.append("</tr><tr class='border'>");
               clmCounter = 0;
           }
            clmCounter++;
            var rowData = "<td>" + item + "</td>";
            tblbody.append(rowData);
        });
    //table.append(tblbody);
};
gyt.shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}