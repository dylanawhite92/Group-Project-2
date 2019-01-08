$(document).ready(function() {
    // Teams in NBA
    var nbaTeams = [
        "ATLANTA HAWKS", "BOSTON CELTICS", "BROOKLYN NETS", "CHARLOTTE HORNETS",
        "CHICAGO BULLS", "CLEVELAND CAVALIERS", "DALLAS MAVERICKS", "DENVER NUGGETS",
        "DETROIT PISTONS", "GOLDEN STATE WARRIORS", "HOUSTON ROCKETS", "INDIANA PACERS",
        "LOS ANGELES CLIPPERS", "LOS ANGELES LAKERS", "MEMPHIS GRIZZLIES", "MIAMI HEAT", 
        "MILWAUKEE BUCKS", "MINNESOTA TIMBERWOLVES", "NEW ORLEANS PELICANS", "NEW YORK KNICKS",
        "OKLAHOMA CITY THUNDER", "ORLANDO MAGIC", "PHILADELPHIA 76ERS", "PHOENIX SUNS",
        "PORTLAND TRAIL BLAZERS", "SACRAMENTO KINGS", "SAN ANTONIO SPURS", "TORONTO RAPTORS",
        "UTAH JAZZ", "WASHINGTON WIZARDS"
    ];

    // Positions
    var positions = ["C", "F", "G"];

    var activeTeam = [];
    var fullTeam = [];
    
    // On click event for dropping players
    $(document).on("click", ".drop", function(){
        var dropped = $(this).parent();
        console.log(dropped);
        dropPlayer(dropped);

    });

    $(document).on("click", ".black-text", function(){
        var teamNamePosition = this.textContent;
        $('#available-block').empty();
        renderTeamPlayers(teamNamePosition);
    });

    // On click for populating stat card
    $(document).on("click", ".active-player", function(){
        var playerName = this.textContent;

        $(".card").css("display", "block")

        $('.player-card').empty();
        renderStatCard(playerName);
        teamSalary();
    });


    // Dynamically load page
    function renderPage() {
        renderRoster();
        renderTeams();
        renderPositions();
        luxuryTax();
    };

    // Dropdown button functionality
    $('.dropdown-trigger').dropdown();

    // Update slider value as it moves
    $("#slider").on("input", function() {
        updateSlider();
    });

    // Drag and Drop functions

    window.drag = function(ev) {
        ev.dataTransfer.setData("text", ev.target.id);

        $("#dropzone").addClass("drop-pulse");
        $(".active-player").addClass("animated infinite rubberBand");
    };

    window.drop = function(ev, el) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("text");
        el.appendChild(document.getElementById(data));
        stopAnimation();
    };

    window.dragend = function(ev) {
        stopAnimation();
    };

    window.allowDrop = function(ev) {
        ev.preventDefault();
    };

    function stopAnimation() {
        $(".active-player").removeClass("animated infinite rubberBand");
        $("#dropzone").removeClass("drop-pulse");
    };
    
    // Input from salary slider
    function updateSlider() {
        var val = $("#slider").val();

        $("#salary-cap-box").html(`$${addCommas(val)}`);  
        luxuryTax();
    };

    // Prettify salary by adding commas with reg ex
    function addCommas(val) {
        var val_parts = val.toString().split(".");
        val_parts[0] = val_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return val_parts.join(".");
    };

    function renderRoster() {
        $.ajax({
            url: 'api/bulls_data',
            type: 'GET'
        }).then(function(data){
            $.get("/api/bulls_data", function(data){
                for (var i = 0; i < data.length; i++) {
                    var newDiv = $("<div>");
                    newDiv.addClass("active-player");
                    newDiv.attr({
                        draggable: "true",
                        ondragstart: "drag(event)",
                        ondragend: "dragend(event)",
                        id: "bullsPlayer-" + [i]
                    });   

                    var currency = (`${data[i].player_salary}`);

                    newDiv.append(`${data[i].player_name} $${addCommas(currency)}`);

                    newDiv.append('<i class="fas fa-times drop"></i>');
                    if (i <= 11) {
                        $("#dropzone").append(newDiv); 
                        activeTeam.push(data[i]); 
                        fullTeam.push(data[i]);                        
                    }
                    else {
                        $("#dropzone1").append(newDiv);
                        fullTeam.push(data[i]);    
                    }
                };
                addingPpg();
                teamSalary();   
            });
            
        });
    };

    // Drop player from roster when user clicks on the x
    function dropPlayer(dropped){
        $("#available-block").append(dropped);        
    };

    function renderTeamPlayers(num){
        $.get("/api/league_data", function(data){
            for (var i = 0; i < data.length; i++) {
                if (data[i].team_name == num || data[i].player_position == num || data[i].player_position == `${num}/C` || data[i].player_position == `${num}/F` || data[i].player_position == `${num}/G`){
                    var newDiv = $("<div>");
                    newDiv.addClass("active-player");
        
                    newDiv.attr({
                        draggable: "true",
                        ondragstart: "drag(event)",
                        ondragend: "dragend(event)",
                        id: "player-" + [i]
                    });

                    var currency = (`${data[i].player_salary}`);

                    newDiv.append(`${data[i].player_name} $${addCommas(currency)}`);
                    newDiv.append('<i class="fas fa-times drop"></i>');
                    $("#available-block").append(newDiv);
                };
            };
        });
    };

function renderStatCard(num){
    $.get("/api/league_data", function(data){
        // console.log('working');
        for (var i = 0; i < data.length; i++) {
            if (num.includes(data[i].player_name)){            
                var currency = (`${data[i].player_salary}`);

                $('.player-card').append(
                    `Name: ${data[i].player_name} 2018/2019 Salary: $${addCommas(currency)} 
                    Position: ${data[i].player_position} Team Name: ${data[i].team_name} 
                    Points Per Game: ${data[i].ppg}`);
            };
        };
    });

    $.get("/api/bulls_data", function(data){
        for (var i = 0; i < data.length; i++) {
            if (num.includes(data[i].player_name)){
                var currency = (`${data[i].player_salary}`);

                $('.player-card').append(`Name: ${data[i].player_name} 2018/2019 Salary: $${addCommas(currency)} Position: ${data[i].player_position} Team Name: ${data[i].team_name} Points Per Game: ${data[i].ppg}`);

                $('.player-card').append('<i class="fas fa-times drop"></i>');
            };
        };
    });
};
    // Pull from array, placeholder code for until we link up API data
    function renderTeams() {
        for (var i = 0; i < nbaTeams.length; i++) {
            var newTeam = $("<li>");
            var newLink = $("<a href='#!'>");

            newLink.addClass("black-text");

            newLink.append(`${nbaTeams[i]}`)
            newTeam.append(newLink);
            
            $("#dropdown1").append(newTeam);
        };
    };

    // Pull from array, placeholder code for until we link up API data
    function renderPositions() {
        for (var i = 0; i < positions.length; i++) {
            var newPosition = $("<li>");
            var newLink = $("<a href='#!'>");

            newLink.addClass("black-text");

            newLink.append(`${positions[i]}`)
            newPosition.append(newLink);
            $("#dropdown2").append(newPosition);
        };
    };

    function addingPpg(){
            var teamScore = 0;
            console.log(activeTeam);

            for (var i = 0; i < activeTeam.length; i++) {
                // console.log(parseInt(activeTeam[i].ppg));
                teamScore += parseInt(activeTeam[i].ppg);
            };
            $("#user-score").text(teamScore);
        };
    

    function teamSalary(){
        var salary = 0;
        console.log(fullTeam)

        for (var i = 0; i < fullTeam.length; i++) {
            // console.log(parseInt(fullTeam[i].ppg));
            salary += parseInt(fullTeam[i].player_salary);
            // console.log(salary);
        };

        $("#team-salary").text(`$${addCommas(salary)}`);
        luxuryTax();
    };

    // Update luxury tax based on both salary cap and user team's salary total
    // #team-salary is .text() because it's the content of a div, and not a value on an input
    // reg ex removes the comma separators from the display, because otherwise the number would stop at the first comma
    function luxuryTax() {
        var salaryCap = parseInt($("#slider").val());
        var userSalary = parseInt($("#team-salary").text().replace(/\$|,/g, ""));
        var luxuryTax = userSalary - salaryCap;

        if (luxuryTax > 0) {
            $("#luxury-tax").text("$0");
        }
        else {
            $("#luxury-tax").text(`$${addCommas(Math.abs(luxuryTax))}`);
        };
    };

    renderPage();
});