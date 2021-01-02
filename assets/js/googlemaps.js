// Declaring global variables and setting default zoom.
let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = {
    country: "all"
};
const MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");

//Listing a number of countries and there coordinates on Google Maps and zoom setting for each country.
const countries = {
    all: {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 2,
    },
    au: {
        center: {
            lat: -25.3,
            lng: 133.8
        },
        zoom: 4,
    },
    ca: {
        center: {
            lat: 62,
            lng: -110.0
        },
        zoom: 3,
    },
    us: {
        center: {
            lat: 37.1,
            lng: -95.7
        },
        zoom: 3,
    },
    uk: {
        center: {
            lat: 54.8,
            lng: -4.6
        },
        zoom: 5,
    },
};

//This function resets all the search input fields from all the steps divs and resets the map zoom back to default.
function resetSearch() {
    clearResults();
    clearMarkers();
    $('#country-list')[0].selectedIndex = 0;
    $('#city-town').val("");
    $('input[type=radio]').prop('checked', false);
    map.setZoom(2);
    map.setCenter(countries["all"].center);
    map.componentRestrictions = {
        'country': []
    };
}

//Initiating Google map, its overall zoom and map control settings.
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: countries["all"].zoom,
        center: countries["all"].center,
        mapTypeControl: false,
        panControl: false,
        zoomControl: true,
        streetViewControl: false,
    });

    //This creates the pop up info window when a marker is clicked.
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById("info-content"),
    });

    //This here takes the input from the city-town input field and creates autocomplete object, which is restricted to the country that has been selected from the country list.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("city-town"), {
            types: ["(cities)"],
            componentRestrictions: countryRestrict,
        }
    );

    places = new google.maps.places.PlacesService(map);
    autocomplete.addListener("place_changed", onPlaceChanged);

    //This is a event listener for the radio buttons fo when the users selcets one
    document.getElementById('electrician').addEventListener('change', onPlaceChanged);
    document.getElementById('plumber').addEventListener('change', onPlaceChanged);
    document.getElementById('painter').addEventListener('change', onPlaceChanged);
    document.getElementById('car_repair').addEventListener('change', onPlaceChanged);
    document.getElementById('locksmith').addEventListener('change', onPlaceChanged);
    document.getElementById('hardware_store').addEventListener('change', onPlaceChanged);


    //Add a DOM event listener to react when the user selects a country.
    document
        .getElementById("country-list")
        .addEventListener("change", setAutocompleteCountry);
}

//When a user types and selects a city or town, they then have to selct a tradesperson using the radio button and it will then get the place details for the city and zoom the map in on the city or town.
function onPlaceChanged() {
    if ($("#electrician").is(':checked')) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchElectrician();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#plumber").is(':checked')) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchPlumber();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#painter").is(':checked')) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchPainter();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#car_repair").is(':checked')) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchMechanic();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#locksmith").is(':checked')) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchLocksmith();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#hardware_store").is(':checked')) {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchHardware();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    }
}

// Searches for electricians using Google place types in the selected city or town, within the viewport of the map.
function searchElectrician() {
    const search = {
        bounds: map.getBounds(),
        types: ["electrician"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each electrician found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a electrician marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

// Searches for plumber using Google place types in the selected city or town, within the viewport of the map.
function searchPlumber() {
    const search = {
        bounds: map.getBounds(),
        types: ["plumber"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each plumber found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a plumber marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

// Searches for painter using Google place types in the selected city or town, within the viewport of the map.
function searchPainter() {
    const search = {
        bounds: map.getBounds(),
        types: ["painter"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each painter found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a painter marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

/// Searches for mechanic using Google place types in the selected city or town, within the viewport of the map.
function searchMechanic() {
    const search = {
        bounds: map.getBounds(),
        types: ["car_repair"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each mechanic found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a mechanic marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

// Searches for locksmith using Google place types in the selected city or town, within the viewport of the map.
function searchLocksmith() {
    const search = {
        bounds: map.getBounds(),
        types: ["locksmith"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each locksmith found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a locksmith marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

// Searches for hardware stores using Google place types in the selected city or town, within the viewport of the map.
function searchHardware() {
    const search = {
        bounds: map.getBounds(),
        types: ["hardware_store"],
    };
    places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            // Create a marker for each hardware stores found, and
            // assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                const markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                // If the user clicks a hardware stores marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

//This sets the country restriction from the dropdown country list based on the user selection. It also centers and zoom the map on the given country.
function setAutocompleteCountry() {
    const country = document.getElementById("country-list").value;

    if (country == "all") {
        autocomplete.setComponentRestrictions({
            country: []
        });
        map.setCenter({
            lat: 15,
            lng: 0
        });
        map.setZoom(2);
    } else {
        autocomplete.setComponentRestrictions({
            country: country
        });
        map.setCenter(countries[country].center);
        map.setZoom(countries[country].zoom);
    }
    clearResults();
    clearMarkers();
}

//This function drops the marker
function dropMarker(i) {
    return function () {
        markers[i].setMap(map);
    };
}

//This function adds the found results to table below map with a bit of css styling
function addResult(result, i) {
    const results = document.getElementById("results");
    const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    const markerIcon = MARKER_PATH + markerLetter + ".png";

    const card = document.createElement("div");
    card.setAttribute("class", "card-body");
    card.setAttribute("className", "card-body");

    const cbody = document.createElement("div");
    cbody.setAttribute("class", "card-body");
    cbody.setAttribute("className", "card-body");

    cbody.onclick = function () {
        google.maps.event.trigger(markers[i], "click");
    };
    const iconTd = document.createElement("span");
    const nameTd = document.createElement("span");
    const addressTd = document.createElement("div");

    const icon = document.createElement("img");
    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");

    const name = document.createTextNode(result.name);
    const address = document.createTextNode(result.vicinity);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    addressTd.appendChild(address);
    cbody.appendChild(iconTd);
    cbody.appendChild(nameTd);
    cbody.appendChild(addressTd);
    results.appendChild(cbody);
}

//This function removes the markers from the map, i have used this for the reset button
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

//This functions clears the results found, i have used this for the reset button
function clearResults() {
    const results = document.getElementById("results");
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

//This gets the place details for all the tradespeople using the Google place types and show the information in an info window anchored on the marker for the tradepersons that the user has selected.
function showInfoWindow() {
    const marker = this;
    places.getDetails({
            placeId: marker.placeResult.place_id
        },
        (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
        }
    );
}

//Loads the place information into the HTML elements used by the info window.
function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML =
        '<img class="tradeIcon" ' + 'src="' + place.icon + '"/>';
    document.getElementById("iw-url").innerHTML =
        '<b><a href="' + place.url + '">' + place.name + "</a></b>";
    document.getElementById("iw-address").textContent = place.formatted_address;

    if (place.formatted_phone_number) {
        document.getElementById("iw-phone-row").style.display = "";
        document.getElementById("iw-phone").textContent =
            place.formatted_phone_number;
    } else {
        document.getElementById("iw-phone-row").style.display = "none";
    }

    // Assign a five-star rating to the tradespeople, using a black star ('&#10029;')
    // to indicate the rating the hotel has earned, and a white star ('&#10025;')
    // for the rating points not achieved.
    if (place.rating) {
        let ratingHtml = "";

        for (let i = 0; i < 5; i++) {
            if (place.rating < i + 0.5) {
                ratingHtml += "&#10025;";
            } else {
                ratingHtml += "&#10029;";
            }
            document.getElementById("iw-rating-row").style.display = "";
            document.getElementById("iw-rating").innerHTML = ratingHtml;
        }
    } else {
        document.getElementById("iw-rating-row").style.display = "none";
    }

    // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.
    if (place.website) {
        let fullUrl = place.website;
        let website = String(hostnameRegexp.exec(place.website));

        if (!website) {
            website = "http://" + place.website + "/";
            fullUrl = website;
        }
        document.getElementById("iw-website-row").style.display = "";
        document.getElementById("iw-website").textContent = website;
    } else {
        document.getElementById("iw-website-row").style.display = "none";
    }
}
