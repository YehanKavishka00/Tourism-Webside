document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(e){
            e.preventDefault();

            let name = document.getElementById("name").value;
            let tour = document.getElementById("tour").value;
            let date = document.getElementById("date").value;

            let message = `Hello Pearl Holiday Tours,

I want to book a tour.

Name: ${name}
Tour: ${tour}
Date: ${date}`;

            window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");
        });
    }

    const dateInput = document.getElementById("date");
    if(dateInput){
        dateInput.min = new Date().toISOString().split("T")[0];
    }
});

var selectedPackage = "";

function openBookingForm(packageName){
    selectedPackage = packageName;
    document.getElementById("bookingModal").classList.add("show");
}

function closeBookingForm(){
    document.getElementById("bookingModal").classList.remove("show");
}

function sendBookingWhatsApp(){
    let name = document.getElementById("fullName").value;
    let phone = document.getElementById("phone").value;
    let arrival = document.getElementById("arrivalDate").value;
    let departure = document.getElementById("departureDate").value;
    let people = document.getElementById("people").value;

    let message = `Hello Pearl Holiday Tours,

I want to book a tour.

Package: ${selectedPackage}
Name: ${name}
Phone: ${phone}
Arrival Date: ${arrival}
Departure Date: ${departure}
People: ${people}`;

    window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");

    closeBookingForm();
}

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(function(){
            loader.classList.add("hide");
        },1000);
    }

});
var selectedPackage = "";

const packageData = {
    custom1: {
        title: "Custom Trip 1",
        duration: "3 Day Tour",
        description: "Airport, Habarana, Anuradhapura, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala National Park and Down South.",
        places: ["Airport", "Habarana", "Anuradhapura", "Polonnaruwa", "Kandy", "Nuwara Eliya", "Ella", "Yala National Park", "Down South"]
    },

    custom2: {
        title: "Custom Trip 2",
        duration: "3 Day Tour",
        description: "Airport, Down South, Yala National Park, Ella, Nuwara Eliya, Kandy, Polonnaruwa, Anuradhapura and Habarana.",
        places: ["Airport", "Down South", "Yala National Park", "Ella", "Nuwara Eliya", "Kandy", "Polonnaruwa", "Anuradhapura", "Habarana"]
    },

    custom3: {
    title: "Custom Trip 3 - Trincomalee Beach Escape",
    duration: "3 Day Tour",
    description: "🌴 Best Season: April – August\n\nExperience the stunning east coast of Sri Lanka with crystal-clear beaches, snorkeling, whale watching and unforgettable beach sunsets.",
    places: [
        "Trincomalee Town",
        "Nilaveli Beach",
        "Uppuveli Beach",
        "Pigeon Island National Park",
        "Koneswaram Temple",
        "Fort Frederick",
        "Marble Beach",
        "Whale & Dolphin Watching",
        "Hot Water Wells (Kanniya)"
    ]
},

    colombo: {
        title: "Colombo City Tour",
        duration: "1 Day Tour",
        description: "Explore Colombo city highlights, temples, colonial landmarks, shopping malls and cultural attractions.",
        places: ["Wolfendhal Dutch Church", "Gangaramaya Temple", "Beira Lake", "Dutch Hospital", "Shopping Malls", "Hindu Temple"]
    },

    anuradhapura: {
        title: "Ancient City of Anuradhapura",
        duration: "1 Day Tour",
        description: "Discover Sri Lanka's first ancient capital with sacred stupas, ancient temples and Buddhist heritage.",
        places: ["Sri Maha Bodhiya", "Ruwanwelisaya", "Jetavanaramaya", "Thuparamaya", "Abhayagiriya", "Isurumuniya Temple"]
    },

    polonnaruwa: {
        title: "Ancient City of Polonnaruwa",
        duration: "1 Day Tour",
        description: "Explore royal palaces, sacred temples and UNESCO World Heritage ruins.",
        places: ["Gal Viharaya", "Royal Palace", "Vatadage", "Rankoth Vehera", "Parakrama Samudraya", "Sacred Quadrangle"]
    },

    ella: {
        title: "Ella Adventure Package",
        duration: "2 Days / 1 Night",
        description: "Experience Ella's mountains, waterfalls, tea plantations and famous scenic train route.",
        places: ["Nine Arches Bridge", "Little Adam's Peak", "Ravana Falls", "Tea Plantations", "Scenic Train Ride"]
    },

    sigiriya: {
        title: "Sigiriya Heritage Package",
        duration: "1 Day Tour",
        description: "Discover the breathtaking Sigiriya Rock Fortress and nearby cultural attractions.",
        places: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Cultural Village", "Ancient Heritage Sites"]
    },

    galle: {
        title: "Galle Beach Package",
        duration: "1 Day Tour",
        description: "Step into Galle, a timeless blend of history, culture and coastal charm.",
        places: ["Galle Fort", "Unawatuna Beach", "Jungle Beach", "Lighthouse", "Dutch Hospital"]
    },

    jaffna: {
    title: "Jaffna Cultural Package",
    duration: "2 Day Tour",
    description: "Discover the beauty of Northern Sri Lanka with Jaffna's rich Tamil culture, historic landmarks, beautiful beaches and unique local food experiences.",
    places: [
        "Jaffna Fort",
        "Nallur Kandaswamy Temple",
        "Casuarina Beach",
        "Jaffna Public Library",
        "Nagadeepa Temple",
        "Delft Island"
    ]
},

    udawalawa: {
        title: "Udawalawa Wild Life Safari Package",
        duration: "1 Day Tour",
        description: "Enjoy elephant sightings, peaceful landscapes and an exciting safari experience.",
        places: ["Udawalawa National Park", "Elephant Sightings", "Safari Jeep Ride", "Water Buffalo", "Bird Watching"]
    },

    yala: {
        title: "Yala National Park Safari",
        duration: "1 Day Tour",
        description: "Explore Yala National Park with leopards, elephants and spectacular wildlife.",
        places: ["Yala National Park", "Leopard Safari", "Elephant Sightings", "Bird Watching", "Safari Jeep Ride"]
    },

    kandy: {
        title: "Hill Country Escape",
        duration: "2 Day Tour",
        description: "Discover Kandy with sacred temples, scenic lakes and breathtaking tea-covered hills.",
        places: ["Temple of the Tooth", "Kandy Lake", "Tea Plantations", "Royal Botanical Garden", "Bahirawakanda Temple"]
    },

adventure: {
    title: "Adventure Package",
    duration: "1 Day Adventure",
    description: "Enjoy exciting outdoor adventures across Sri Lanka including hiking, waterfalls, zipline, camping, river activities and nature exploration.",
    places: ["Hiking Trails", "Waterfalls", "Zipline Adventure", "Camping", "River Activities", "Nature Exploration"]
}

};

function openPackageDetails(packageKey){
    selectedPackage = packageData[packageKey].title;

    document.getElementById("packageTitle").innerText = packageData[packageKey].title;
    document.getElementById("packageDuration").innerText = packageData[packageKey].duration;

    const placesList = document.getElementById("packagePlaces");
    placesList.innerHTML = "";

    packageData[packageKey].places.forEach(place => {
        const li = document.createElement("li");
        li.innerText = place;
        placesList.appendChild(li);
    });

    document.getElementById("detailsModal").classList.add("show");
}

function closePackageDetails(){
    document.getElementById("detailsModal").classList.remove("show");
}

function openBookingFromDetails(){
    closePackageDetails();

    if(selectedPackage === "Adventure Package"){
        document.getElementById("adventureBookingModal").classList.add("show");
    } else {
        document.getElementById("bookingModal").classList.add("show");
    }
}

function closeBookingForm(){
    document.getElementById("bookingModal").classList.remove("show");
}

function sendBookingWhatsApp(){
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let arrival = document.getElementById("arrivalDate").value;
    let departure = document.getElementById("departureDate").value;
    let people = document.getElementById("people").value;
    let vehicle = document.getElementById("vehiclePreference").value;
    let details = document.getElementById("details").value;

    if(name === "" || phone === ""){
        alert("Please fill Full Name and Phone Number");
        return;
    }

    let message = `Hello Pearl Holiday Tours,

I want to book a tour.

Package: ${selectedPackage}
Name: ${name}
Email: ${email}
Phone: ${phone}
Arrival Date: ${arrival}
Departure Date: ${departure}
People: ${people}
Preferred Vehicle: ${vehicle}
Details: ${details}`;

    window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");

    closeBookingForm();
}

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");
        }, 1000);
    }
});

function sendAirportBooking(){

    let name = document.getElementById("airportName").value;
    let email = document.getElementById("airportEmail").value;
    let phone = document.getElementById("airportPhone").value;
    let flight = document.getElementById("flightNo").value;
    let date = document.getElementById("airportArrivalDate").value;
    let time = document.getElementById("airportArrivalTime").value;
    let pickup = document.getElementById("pickupLocation").value;
    let destination = document.getElementById("destination").value;
    let passengers = document.getElementById("airportPassengers").value;
    let vehicle = document.getElementById("airportVehicle").value;
    let notes = document.getElementById("airportNotes").value;

    if(name === "" || phone === ""){
        alert("Please fill your name and phone number");
        return;
    }

    let message = `Hello Pearl Holiday Tours,

I would like to book an Airport Hire Service.

Name: ${name}
Email: ${email}
Phone: ${phone}
Flight Number: ${flight}
Arrival Date: ${date}
Arrival Time: ${time}
Pickup Location: ${pickup}
Destination: ${destination}
Passengers: ${passengers}
Preferred Vehicle: ${vehicle}
Additional Notes: ${notes}`;

    window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");
}

function sendAirportBooking(){
    let name = document.getElementById("airportName").value;
    let phone = document.getElementById("airportPhone").value;

    if(name === "" || phone === ""){
        alert("Please fill your name and phone number");
        return;
    }

    let message = `Hello Pearl Holiday Tours,

I would like to book an Airport Hire Service.

Name: ${document.getElementById("airportName").value}
Email: ${document.getElementById("airportEmail").value}
Phone: ${document.getElementById("airportPhone").value}
Flight Number: ${document.getElementById("flightNo").value}
Arrival Date: ${document.getElementById("airportArrivalDate").value}
Arrival Time: ${document.getElementById("airportArrivalTime").value}
Pickup Location: ${document.getElementById("pickupLocation").value}
Destination: ${document.getElementById("destination").value}
Passengers: ${document.getElementById("airportPassengers").value}
Preferred Vehicle: ${document.getElementById("airportVehicle").value}
Additional Notes: ${document.getElementById("airportNotes").value}`;

    window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");
}

function sendDreamTour() {

    let name =
        document.getElementById("dreamName").value;

    let phone =
        document.getElementById("dreamPhone").value;

    let places =
        document.getElementById("dreamPlaces").value;

    let days =
        document.getElementById("dreamDays").value;

    let details =
        document.getElementById("dreamDetails").value;

    let date =
    document.getElementById("dreamDate").value;

    if (name === "" || phone === "") {
        alert("Please enter your name and phone number.");
        return;
    }

    let message =
`🌍 PLAN MY DREAM TOUR

Name: ${name}
Phone: ${phone}
Preferred Travel Date: ${date}
Places: ${places}
Duration: ${days}
Additional Details: ${details}

Please create a customized Sri Lanka tour package for me.`;

    window.open(
        `https://wa.me/94716897676?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

function filterVehicles(){
    const passenger = document.getElementById("passengerFilter").value;
    const type = document.getElementById("typeFilter").value;
    const gear = document.getElementById("gearFilter").value;
    const fuel = document.getElementById("fuelFilter").value;

    const vehicles = document.querySelectorAll(".vehicle-card");

    vehicles.forEach(vehicle => {
        const matchPassenger = passenger === "" || vehicle.dataset.passengers === passenger;
        const matchType = type === "" || vehicle.dataset.type === type;
        const matchGear = gear === "" || vehicle.dataset.gear === gear;
        const matchFuel = fuel === "" || vehicle.dataset.fuel === fuel;

        vehicle.style.display =
            matchPassenger && matchType && matchGear && matchFuel
            ? "block"
            : "none";
    });
}

function openVehicleBooking(vehicleName, button){
    document.getElementById("selectedVehicleName").innerText = vehicleName;
    document.getElementById("vehicleName").value = vehicleName;

    const card = button.closest(".vehicle-card");
    const images = card.dataset.images
        ? card.dataset.images.split(",")
        : [card.querySelector("img").src];

    const mainImage = document.getElementById("mainVehicleImage");
    const thumbs = document.getElementById("vehicleThumbs");

    mainImage.src = images[0].trim();
    thumbs.innerHTML = "";

    images.forEach(function(imagePath){
        const thumb = document.createElement("img");
        thumb.src = imagePath.trim();

        thumb.onclick = function(){
            mainImage.src = imagePath.trim();
        };

        thumbs.appendChild(thumb);
    });

    document.getElementById("vehicleBookingModal").classList.add("show");
}

function closeVehicleBooking(){
    document.getElementById("vehicleBookingModal").classList.remove("show");
}

function sendVehicleBooking(){
    const vehicle = document.getElementById("vehicleName").value;
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const email = document.getElementById("customerEmail").value;
    const date = document.getElementById("pickupDate").value;
    const time = document.getElementById("pickupTime").value;
    const pickup = document.getElementById("pickupPlace").value;
    const drop = document.getElementById("dropPlace").value;
    const passengers = document.getElementById("vehiclePassengers").value;
    const notes = document.getElementById("vehicleNotes").value;

    if(name === "" || phone === ""){
        alert("Please enter your name and phone number");
        return;
    }

    const message = `Hello Pearl Holiday Tours,

I would like to book a vehicle.

Vehicle: ${vehicle}
Name: ${name}
Phone: ${phone}
Email: ${email}
Pickup Date: ${date}
Pickup Time: ${time}
Pickup Location: ${pickup}
Drop Location / Destination: ${drop}
Passengers: ${passengers}
Additional Notes: ${notes}`;

    window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");
}

function closeAdventureBooking(){
    document.getElementById("adventureBookingModal").classList.remove("show");
}

function sendAdventureBooking(){
    const name = document.getElementById("advName").value;
    const phone = document.getElementById("advPhone").value;

    if(name === "" || phone === ""){
        alert("Please fill name and phone number");
        return;
    }

    const message = `Hello Pearl Holiday Tours,

I want to book an Adventure Package.

Name: ${name}
Phone: ${phone}
Activity: ${document.getElementById("advActivity").value}
Preferred Date: ${document.getElementById("advDate").value}
People: ${document.getElementById("advPeople").value}
Details: ${document.getElementById("advDetails").value}`;

    window.open(`https://wa.me/94716897676?text=${encodeURIComponent(message)}`, "_blank");
}