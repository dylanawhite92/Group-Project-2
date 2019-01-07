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

    var userTeam = [];

    // On click event for dropping players
    // $(document).on("click", ".drop", dropPlayer);

    $(document).on("click", ".black-text", function(){
        var teamNamePosition = this.textContent;
        console.log(teamNamePosition);
        renderTeamPlayers(teamNamePosition);
    });

    // Dynamically load page
    function renderPage() {
        renderRoster();
        renderTeams();
        renderPositions();
    };

    // Update stat card with clicked player
    $(".active-player").on("click", function() {
        console.log("player clicked");
    });

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
    };

    // Prettify salary by adding commas with reg ex
    function addCommas(val) {
        var val_parts = val.toString().split(".");
        val_parts[0] = val_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return val_parts.join(".");
    };

    // Pull from array, placeholder code for until we link up API data
    function renderRoster() {
        $.get("/api/bulls_data", function(data){
            for (var i = 0; i < data.length; i++) {
            
                var newDiv = $("<div>");
                newDiv.addClass("active-player");
    
                newDiv.attr({
                    draggable: "true",
                    ondragstart: "drag(event)",
                    ondragend: "dragend(event)",
                    id: "player-" + [i]
                });

                var currency = (`${data[i].player_salary}`);
                // addCommas(currency);
                console.log(currency);

                newDiv.append(`${data[i].player_name} $${addCommas(currency)}`);

                newDiv.append('<i class="fas fa-times drop"></i>');

                $("#available-block").append(newDiv);

            };
        });
    };

    // Drop player from roster when user clicks on the x
    // function dropPlayer(){
    //     var rosterSpotData = $(this)
    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/bulls/" + id
    //       })
    //         .then(renderRoster);
    //     }

    function renderTeamPlayers(num){
        $.get("/api/league_data", function(data){
            console.log('working');
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
                addCommas(currency);
                console.log(data[i].team_name);

                newDiv.append(`${data[i].player_name} $${currency}`);

                newDiv.append('<i class="fas fa-times drop"></i>');

                $("#available-block").append(newDiv);
      }
    }
}
)};

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

    renderPage();
});