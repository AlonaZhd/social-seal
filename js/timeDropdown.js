// Populate the dropdown with time options
var dropdown = document.getElementById("timeDropdown");

for (var hour = 0; hour <= 23; hour++) {
    for (var minute = 0; minute < 60; minute += 30) {
        var amPm = hour < 12 ? "AM" : "PM";
        var formattedHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

        // Create an option element
        var option = document.createElement("option");
        option.value = pad(formattedHour, 2) + ":" + pad(minute, 2);
        option.text = formattedHour + ":" + pad(minute, 2) + " " + amPm;

        // Append the option to the dropdown
        dropdown.add(option);
    }
}

// Function to pad single-digit numbers with leading zeros
function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
