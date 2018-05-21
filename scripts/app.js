
//      SEARCH BAR VARIABLES
const headerWrapper = document.getElementById("header-wrapper");
const profileButton = document.getElementById("profile-button");
const headerTitle = document.getElementById("header-title");

const searchBar = document.getElementById("search-bar");
const searchForm = document.getElementById("search-form");
const searchInputWrapper = document.getElementById("search-input-wrapper");
const searchInputField = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchClearButton = document.getElementById("search-clear");
const searchCloseButton = document.getElementById("search-close");

const mainSettingsButton = document.getElementById("main-settings");
const searchSettingsButton = document.getElementById("search-settings");

//      NAV BAR VARIABLES

const navbarSlider = document.querySelector("#navbar-slider");
const homeButton = document.querySelector("#home-button");
const messagesButton = document.querySelector("#messages-button");
const eventsButton = document.querySelector("#events-button");
const friendsButton = document.querySelector("#friends-button");
const mapButton = document.querySelector("#map-button");

//      SEARCH BAR EVENT LISTENERS

// searchForm.addEventListener("focusout", closeSearchInputField, true);
searchForm.addEventListener("onblur", closeSearchInputField, true);
searchButton.addEventListener("click", showHideSearchInputField);
searchInputField.addEventListener("input", showHideClearButton);
// searchInputField.addEventListener("focuschange", closeSearchInputField, true);
searchClearButton.addEventListener("click", clearSearchInput);
searchCloseButton.addEventListener("click", closeSearchInputField);

//      NAV BAR EVENT LISTENERS

homeButton.addEventListener("click", sliderSwitch);
messagesButton.addEventListener("click", sliderSwitch);
eventsButton.addEventListener("click", sliderSwitch);
friendsButton.addEventListener("click", sliderSwitch);
mapButton.addEventListener("click", sliderSwitch);

//      SEARCH BAR FUNCTIONS

// *todo: search results pop-up on input *change* event 
// showHideSearchInputField toggles wrapper width (0-100%), changes focus to input field if needed,
// and shows/hides search bar buttons by adding/removing "button-hide" class to them
function showHideSearchInputField(event) {

    event.preventDefault();
    const searchInputWrapperVisible = searchInputWrapper.classList.toggle("wrapper-hide");
    
    if(searchInputField.blur) searchInputField.focus();
    
    if(searchInputWrapperVisible) {
        searchInputField.classList.add("wrapper-hide");
        profileButton.classList.toggle("button-hide");
        headerWrapper.classList.toggle("wrapper-hide");
        headerTitle.classList.toggle("button-hide");
        searchButton.classList.toggle("button-hide");
        searchCloseButton.classList.toggle("button-hide");
        mainSettingsButton.classList.toggle("button-hide");
        searchSettingsButton.classList.toggle("button-hide");
        
    } else {
        searchInputField.classList.remove("wrapper-hide");
        searchCloseButton.classList.toggle("button-hide");
        headerTitle.classList.toggle("button-hide");
        headerWrapper.classList.toggle("wrapper-hide");
        profileButton.classList.toggle("button-hide");
        searchButton.classList.toggle("button-hide");
        searchSettingsButton.classList.toggle("button-hide");
        mainSettingsButton.classList.toggle("button-hide");
    }
}

// showHideClearButton fires on input, adds "button-show" class to the button,
// hides the button if the input field is empty
function showHideClearButton(event) {

    event.preventDefault();

    if (searchInputField.value.length > 0){
        searchClearButton.classList.add("button-show");
        searchInputField.classList.add("search-input-margin");
    } else {
        searchClearButton.classList.toggle("button-show");
        searchInputField.classList.toggle("search-input-margin");
    }
}

// clearSearchInput sets the value of input field to empty string,
// returns focus to input field, hides the "Clear" button
// and controls the input field margin
function clearSearchInput(event) {
    
    event.preventDefault();
    searchInputField.value = "";
    searchInputField.focus();
    searchClearButton.classList.remove("button-show");
    searchInputField.classList.remove("search-input-margin");
}


// ***todo: add hiding when *search bar* is out of focus
function closeSearchInputField(event) {
    
    event.preventDefault();
    clearSearchInput(event);
    showHideSearchInputField(event);

    if(searchForm.blur) {
        console.log("ok");
        console.log(event);
        
        // searchInputField.blur();
    }

    searchInputField.blur();
}


// switches the slider above the navbar to active button

function sliderSwitch() {
    navbarSlider.style.marginLeft = (20 * this.dataset.index) + "%";   
}

// TODO: swipe interaction