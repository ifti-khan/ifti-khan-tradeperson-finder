//The code below has been studied, broken down and modified to the needs of my project, here is a list of websites that i used to help me create this google maps JS file for my project.

//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
//https://developers.google.com/places/supported_types
//https://developers.google.com/maps/documentation/javascript/places#place_details_requests
//https://developers.google.com/places/web-service/place-data-fields
//https://developers.google.com/maps/documentation/javascript/reference/map
//https://developers.google.com/maps/documentation/javascript/infowindows
//https://developers.google.com/maps/documentation/javascript/events
//https://www.youtube.com/watch?v=zVU_MQyKFGg&ab_channel=FrameworkTelevision
//https://www.youtube.com/watch?v=k1_sUMw8kwg&ab_channel=FrameworkTelevision

// Declaring global variables and setting default zoom.
let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
let countryRestrict = {
    country: "all"
};
let MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";

//Listing a number of countries and there cordinates on Google Maps and zoom setting for each country.
let countries = {
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
        content: document.getElementById("gmaps-popup-content"),
    });

    //This here takes the input from the city-town input field and creates autocomplete object, which is restricted to the country that has been selected from the country list.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("city-town"), {
            types: ["(cities)"],
            componentRestrictions: countryRestrict,
        }
    );

    places = new google.maps.places.PlacesService(map);
    autocomplete.addListener("place_changed", getTradeDetails);

    //This function call allows the user to move the map around in a city or town and it will find tradespeople in different areas instead of a fixed location.
    changeCenterSearch();

    //This is a event listener is for the radio buttons, so when the users selcets one of the radio buttons it will then take its ID which is the same as the google place API place type and look for that specific tradesperson and get the place details as well.
    document.getElementById('electrician').addEventListener('change', getTradeDetails);
    document.getElementById('plumber').addEventListener('change', getTradeDetails);
    document.getElementById('painter').addEventListener('change', getTradeDetails);
    document.getElementById('car_repair').addEventListener('change', getTradeDetails);
    document.getElementById('locksmith').addEventListener('change', getTradeDetails);
    document.getElementById('hardware_store').addEventListener('change', getTradeDetails);


    //Adds a DOM event listener to react when the user selects a country.
    document
        .getElementById("country-list")
        .addEventListener("change", setAutocompleteCountry);
}

//When a user types and selects a city or town, they then have to selct a tradesperson using the radio buttons, once all search steps are done. It will then get the details of the tradesperson in the city or town the user has chosen and zoom the map in on the city or town.
function getTradeDetails() {
    if ($("#electrician").is(':checked')) {
        let place = autocomplete.getPlace();

        //This switches to the bolt icon from the default set icon if the electrician radio button is selected.
        let defaultIcon = document.getElementById("defaultIcon");
        defaultIcon.className = "fas fa-bolt";

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchElectrician();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#plumber").is(':checked')) {
        let place = autocomplete.getPlace();

        //This switches to the wrench icon from the default set icon if the plumber radio button is selected.
        let defaultIcon = document.getElementById("defaultIcon");
        defaultIcon.className = "fas fa-wrench";

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchPlumber();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#painter").is(':checked')) {
        let place = autocomplete.getPlace();

        //This switches to the paint roller icon from the default set icon if the painter radio button is selected.
        let defaultIcon = document.getElementById("defaultIcon");
        defaultIcon.className = "fas fa-paint-roller";

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchPainter();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#car_repair").is(':checked')) {
        let place = autocomplete.getPlace();

        //This switches to the car battery icon from the default set icon if the mechanic radio button is selected.
        let defaultIcon = document.getElementById("defaultIcon");
        defaultIcon.className = "fas fa-car-battery";

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchMechanic();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#locksmith").is(':checked')) {
        let place = autocomplete.getPlace();

        //This switches to the key icon from the default set icon if the locksmith radio button is selected.
        let defaultIcon = document.getElementById("defaultIcon");
        defaultIcon.className = "fas fa-key";

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchLocksmith();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    } else if ($("#hardware_store").is(':checked')) {
        let place = autocomplete.getPlace();

        //This switches to the shopping cart icon from the default set icon if the hardware store radio button is selected.
        let defaultIcon = document.getElementById("defaultIcon");
        defaultIcon.className = "fas fa-shopping-cart";

        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchHardware();
        } else {
            $('#city-town').attr("placeholder", "Please type a city or town");
        }
    }
}

//This function here changes the search area from the default center set. It has two event listeners from googl, one looks out for the center map being changed and the other is for when the user stops dragging the map it will execute the search function if the if statement is true.
function changeCenterSearch() {
    map.addListener("center_changed", function () {
        map.addListener("dragend", function () {
            if ($("#electrician").is(':checked')) {
                searchElectrician();
            } else if ($("#plumber").is(':checked')) {
                searchPlumber();
            } else if ($("#painter").is(':checked')) {
                searchPainter();
            } else if ($("#car_repair").is(':checked')) {
                searchMechanic();
            } else if ($("#locksmith").is(':checked')) {
                searchLocksmith();
            } else if ($("#hardware_store").is(':checked')) {
                searchHardware();
            } else {
                clearResults();
                clearMarkers();
            }
        });
    });
}

//Searches for electricians using Google place types in the selected city or town, within the viewport of the map.
function searchElectrician() {
    let search = {
        bounds: map.getBounds(),
        types: ["electrician"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            //Create a marker for each electrician found, and assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                //If the user clicks a electrician marker, show the details of that electrician or business in the info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);

                //This is a map event listner, so when a user starts to drage the map it will close the popup info window.
                google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
            }
        }
    });
}

//Searches for plumber using Google place types in the selected city or town, within the viewport of the map.
function searchPlumber() {
    let search = {
        bounds: map.getBounds(),
        types: ["plumber"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            //Create a marker for each plumber found, and assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                //If the user clicks a plumber marker, show the details of that plumber or business in the info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);

                //This is a map event listner, so when a user starts to drage the map it will close the popup info window.
                google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
            }
        }
    });
}

//Searches for painter using Google place types in the selected city or town, within the viewport of the map.
function searchPainter() {
    let search = {
        bounds: map.getBounds(),
        types: ["painter"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            //Create a marker for each painter found, and assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                //If the user clicks a painter marker, show the details of that painter or business in the info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);

                //This is a map event listner, so when a user starts to drage the map it will close the popup info window.
                google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
            }
        }
    });
}

///Searches for mechanic using Google place types in the selected city or town, within the viewport of the map.
function searchMechanic() {
    let search = {
        bounds: map.getBounds(),
        types: ["car_repair"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            //Create a marker for each mechanic found, and assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                //If the user clicks a mechanic marker, show the details of that mechanic or business in the info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);

                //This is a map event listner, so when a user starts to drage the map it will close the popup info window.
                google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
            }
        }
    });
}

//Searches for locksmith using Google place types in the selected city or town, within the viewport of the map.
function searchLocksmith() {
    let search = {
        bounds: map.getBounds(),
        types: ["locksmith"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            //Create a marker for each locksmith found, and assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                //If the user clicks a locksmith marker, show the details of that locksmith or business in the info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);

                //This is a map event listner, so when a user starts to drage the map it will close the popup info window.
                google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
            }
        }
    });
}

//Searches for hardware stores using Google place types in the selected city or town, within the viewport of the map.
function searchHardware() {
    let search = {
        bounds: map.getBounds(),
        types: ["hardware_store"],
    };
    places.nearbySearch(search, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();

            //Create a marker for each hardware stores found, and assign a letter of the alphabetic to each marker icon.
            for (let i = 0; i < results.length; i++) {
                let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
                let markerIcon = MARKER_PATH + markerLetter + ".png";
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon,
                });
                //If the user clicks a hardware store marker, show the details of that hardware store or business in the info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], "click", showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);

                //This is a map event listner, so when a user starts to drage the map it will close the popup info window.
                google.maps.event.addListener(map, 'dragstart', closeInfoWindow);
            }
        }
    });
}

//This sets the country restriction from the dropdown country list based on the user selection. It also centers and zoom the map on the given country.
function setAutocompleteCountry() {
    let country = document.getElementById("country-list").value;

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

//This function drops the marker.
function dropMarker(i) {
    return function () {
        markers[i].setMap(map);
    };
}

//This function creates a new bootstrap card-body element and adds the found results into the bootstrap card-body below the google maps in the results container and if a user click on the card body it will open up the pop up info window for that tradesperson or business and be active highlighted for 2 seconds and then go back to normal as well as scrolling up to the map.
function addResult(result, i) {
    let results = document.getElementById("results");
    let markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    let markerIcon = MARKER_PATH + markerLetter + ".png";
    let scrollToMap = document.getElementById('resultClickAnchor');

    let cbody = document.createElement("div");
    cbody.className = "card-body";

    function removeActiveResult() {
        cbody.classList.remove("active-result");
    }

    cbody.onclick = function () {
        google.maps.event.trigger(markers[i], "click", "active-result");
        cbody.classList.add("active-result");
        setTimeout(removeActiveResult, 2000);
        scrollToMap.scrollIntoView();
    };

    let iconSpan = document.createElement("span");
    let nameSpan = document.createElement("span");
    let addressDiv = document.createElement("div");

    let icon = document.createElement("img");
    icon.src = markerIcon;
    icon.className = "gmapMarkers";

    let name = document.createTextNode(result.name);
    let address = document.createTextNode(result.vicinity);

    iconSpan.appendChild(icon);
    nameSpan.appendChild(name);
    addressDiv.appendChild(address);
    cbody.appendChild(iconSpan);
    cbody.appendChild(nameSpan);
    cbody.appendChild(addressDiv);
    results.appendChild(cbody);

}

//This function removes the markers from the map, i have used this for the reset button as well by calling the function.
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

//This functions clears the results found, i have used this for the reset button as well by calling the function.
function clearResults() {
    let results = document.getElementById("results");
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

//This function will show the pop up info window in the google maps if the status is ok  and all the info is provided my the gmapPopUp fuction below.
function showInfoWindow() {
    let marker = this;
    places.getDetails({
            placeId: marker.placeResult.place_id
        },
        (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            gmapPopUp(place);
        }
    );
}

//This function here closes the popup info window that appears on the top of map markers when clicked
function closeInfoWindow() {
    infoWindow.close();
}

//Loads the place information into the HTML elements used by the pop up info window.
function gmapPopUp(place) {

    //Adds the place name results to the inner of html popup name.
    document.getElementById("popUp-name").innerHTML = place.name;

    //Adds the place formatted phone number results to the inner of html popup address.
    document.getElementById("popUp-address").textContent = place.formatted_address;

    //Check to see if there is a place result formatted phone number and if there is it will be put into the inner html element, if not then display nothing.
    if (place.formatted_phone_number) {
        document.getElementById("popUp-phone-row").style.display = "";
        document.getElementById("popUp-phone").textContent =
            place.formatted_phone_number;
    } else {
        document.getElementById("popUp-phone-row").style.display = "none";
    }

    //Using a for loop to see if a tradesperson or business has a rating using the place rating result and assing them a five-star rating using a html black star code ('&#9733;'), and a html white star code ('&#9734;') for the rating points not achieved. if they have a star rating it will show in the inner of the html assigned, if not it will display nothing.
    if (place.rating) {
        let ratingHtml = "";

        for (let i = 0; i < 5; i++) {
            if (place.rating < i + 0.5) {
                ratingHtml += "&#9734;";
            } else {
                ratingHtml += "&#9733;";
            }
            document.getElementById("popUp-rating-row").style.display = "";
            document.getElementById("popUp-rating").innerHTML = ratingHtml;
        }
    } else {
        document.getElementById("popUp-rating-row").style.display = "none";
    }

    //Check to see if there is a place result website and if there is it will set it as a href attibute of the a element, making a clickable link and if not then display nothing.
    if (place.website) {
        let resultUrl = place.website;

        document.getElementById("popUp-website-row").style.display = "";
        document.getElementById("popUpUrl").setAttribute("href", resultUrl);
    } else {
        document.getElementById("popUp-website-row").style.display = "none";
    }
}

//This function resets all the search input fields from all the steps divs and resets the map zoom back to default and a page refresh delay of one second, the reason for page refresh sometimes the api does not fully reset.
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
    setTimeout(location.reload.bind(location), 1000);
}
