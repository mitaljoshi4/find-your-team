$(document).on("pagecreate", "#name-page", function () {
    var optionArray = localStorage.myOptions;
    if (optionArray) {
        optionArray = optionArray.split(',');
        $("#name-text").empty();
        var selectList = $("#name-text");
        $.each(optionArray,
            function (k, item) {
                selectList.append("<option selected>" + item + "</option>");
            });
    }
   
    $("#add-new-player").click(function () {
        gyt.askTeam(function (result) {
            if (result.buttonIndex == 1) {
                var newPlayers = result.input1;
                if (newPlayers != "") {
                    var playerArray = newPlayers.split(',');
                    var selectList = $("#name-text");
                    $.each(playerArray,
                        function (k, item) {
                            selectList.append(" <option selected>" + item + "</option>");
                        });
                    var optionArray = [];
                    $.each($("#name-text").find('option'), function (k, option) {
                        optionArray.push(option.value);
                    })
                    localStorage.myOptions = optionArray.toString();
                } else {
                    alert("Not found any new player.");
                }
            } else {
                history.back();
            }
        });
    });
    $("#name-add").click(function () {
        var name = $("#name-text").val();
        var noOfTeam = $("#team-text").val();
        gyt.reset();
        if (name != "" && noOfTeam != "" && name != null) {
            var nameArray = [
                'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk', 'lll', 'mmm', 'nnn', 'ooo',
                'ppp', 'qqq', 'rrr', 'sss', 'ttt', 'uuu', 'vvv', 'www', 'xxx', 'yyy', 'zzz'
            ];
            //var teamNumber = gyt.numOfTeams;
            //teamMember = (nameArray.length / teamNumber);
            //teamMember = Math.round(teamMember);
            //$.each(nameArray,
            //    function(k, item) {
            //        var RandomNumber = Math.floor((Math.random() * teamNumber) + 1);
            //        try {
            //            gyt.getTeam(RandomNumber, teamMember, teamNumber, item);
            //        } catch (e) {
            //            gyt.getTeam(RandomNumber, teamMember++, teamNumber, item);
            //        }
            //    });
            nameArray = name;

            var tempArray = gyt.shuffle(nameArray);
            if (tempArray.length != 0) {
                gyt.getTeamByName(tempArray, noOfTeam);
            }
            $.mobile.changePage("#result-page");
        } else {
            if (noOfTeam == "") {
                alert("Please enter number of team.");
            } else {
                alert("Please select members.");
            }
        }
        //if (name) {

        //} else {
        //    alert("Please enter name.");
        //}
    });

});
$(document).on("pagebeforeshow", "#name-page", function () {
    //gyt.askTeam(function (result) {
    //    if (result.buttonIndex == 1) {
    //        gyt.numOfTeams = result.input1;
    //    } else {
    //        history.back();
    //    }
    //});
    //selectList.selectmenu('refresh', true);
});
$(document).on("pageshow", "#name-page", function () {

});