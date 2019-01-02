$(document).ready(function() {

    // Bulls Current Roster
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
            name: "Zach LaVine",
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

    // Input from salary slider

    $("#slider").on("input", function() {
        updateSlider();
    });

    function updateSlider() {
        var val = $("#slider").val();
        $("#salary-cap-box").html(`$${addCommas(val)}`);
        // console.log(`$${addCommas(val)}`);
    }

    // Prettify salary by adding commas with reg ex
    function addCommas(val) {
        var val_parts = val.toString().split(".");
        val_parts[0] = val_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return val_parts.join(".");
    };

    function renderRoster() {
        for (var i = 0; i < bullsRoster.length; i++) {
            // Testing - Delete Later
            // console.log("-------------------------------------------");
            // console.log(`Number: ${bullsRoster[i].number}`); 
            // console.log(`Name: ${bullsRoster[i].name}`);
            // console.log(`Position: ${bullsRoster[i].position}`);
            // console.log("-------------------------------------------");
        
            var newDiv = $("<div>");
            newDiv.addClass("active-player");
            newDiv.append(`#${bullsRoster[i].number} ${bullsRoster[i].name}, ${bullsRoster[i].position}`);
            $("#roster-block").append(newDiv);
        }    
    };

    renderRoster();
    
});