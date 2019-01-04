$(document).ready(function() {

    // Bulls Current Roster - will be replaced by API data
    var bullsRoster = [
        zachLavine = {
            number: 8,
            name: "Zach LaVine",
            position: "Point Guard",
            ppg: 0
        }, 
        lauriMarkkanen = {
            number: 24,
            name: "Lauri Markkanen",
            position: "Power Forward",
            ppg: 0
        }, 
        jabariParker = {
            number: 2,
            name: "Jabari Parker",
            position: "Small Forward",
            ppg: 0
        },
        wendellCarterJR = {
            number: 34,
            name: "Wendell Carter Jr.",
            position: "Center",
            ppg: 0
        },
        krisDunn = {
            number: 32,
            name: "Kris Dunn",
            position: "Point Guard",
            ppg: 0
        },
        ryanArcidiacono = {
            number: 51,
            name: "Ryan Arcidiacono",
            position: "Point Guard",
            ppg: 0
        },
        justinHoliday = {
            number: 7,
            name: "Justin Holiday",
            position: "Small Forward",
            ppg: 0
        }, 
        bobbyPortis = {
            number: 5,
            name: "Bobby Portis",
            position: "Power Forward",
            ppg: 0
        }, 
        shaquilleHarrison = {
            number: 3,
            name: "Shaquille Harrison",
            position: "Point Guard",
            ppg: 0
        }, 
        robinLopez = {
            number: 42,
            name: "Robin Lopez",
            position: "Center",
            ppg: 0
        },
        antonioBlakeney = {
            number: 9,
            name: "Antonio Blakeney",
            position: "Point Guard",
            ppg: 0
        },
        denzelValentine = {
            number: 45,
            name: "Denzel Valentine",
            position: "Small Forward",
            ppg: 0
        },
        cameronPayne = {
            number: 22,
            name: "Cameron Payne",
            position: "Point Guard",
            ppg: 0
        },
        cristianoFelicio = {
            number: 6,
            name: "Cristiano Felicio",
            position: "Center",
            ppg: 0
        },
        rawleAlkins = {
            number: 20,
            name: "Rawle Alkins",
            position: "Shooting Guard",
            ppg: 0
        },
        chandlerHutchison = {
            number: 15,
            name: "Chandler Hutchison",
            position: "Small Forward",
            ppg: 0
        },
        brandonSampson = {
            number: 44,
            name: "Brandon Sampson",
            position: "Point Guard",
            ppg: 0
        }
    ];

    // Teams in NBA - replace with API data when we have it
    var nbaTeams = [
        "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets",
        "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets",
        "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers",
        "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", 
        "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks",
        "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns",
        "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors",
        "Utah Jazz", "Washington Wizards"
    ];

    // Positions - replace with API data when we have it
    var positions = ["Center", "Point Guard", "Shooting Guard", "Power Forward", "Small Forward"];

    var userTeam = [];

    // Dynamically load page
    function renderPage() {
        renderRoster();
        renderTeams();
        renderPositions();
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
    };

    // Prettify salary by adding commas with reg ex
    function addCommas(val) {
        var val_parts = val.toString().split(".");
        val_parts[0] = val_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return val_parts.join(".");
    };

    // Pull from array, placeholder code for until we link up API data
    function renderRoster() {
        for (var i = 0; i < bullsRoster.length; i++) {
            
            var newDiv = $("<div>");
            newDiv.addClass("active-player");

            newDiv.attr({
                draggable: "true",
                ondragstart: "drag(event)",
                ondragend: "dragend(event)",
                id: "player-" + [i]
            });

            newDiv.append(`#${bullsRoster[i].number} ${bullsRoster[i].name}, ${bullsRoster[i].position}`);
            $("#available-block").append(newDiv);
        }

        // for (var i = 0; i < bullsRoster.length; i++) {

        // }
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

    renderPage();
});