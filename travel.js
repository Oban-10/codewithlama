function searchDestination() {
    let destination = document.getElementById("destination").value;

    if (destination === "") {
        alert("Please enter a destination.");
    } else {
        alert("Searching for: " + destination);
    }
}

function viewPlace(place) {
    alert("You selected: " + place);
}

function bookPackage(packageName) {
    alert("Booking started for: " + packageName);
}

function login() {
    alert("Login page coming soon!");
}

function contactUs() {
    alert("Thank you! We will contact you soon.");
}