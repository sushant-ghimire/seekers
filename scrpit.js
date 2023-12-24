const rectangle=document.querySelector(".rectangle")

let i=0
function male(){
// Get the current URLSearchParams object from the URL
var urlParams = new URLSearchParams(window.location.search);

// Set or update a parameter in the URL
urlParams.set('paramName', 'male');

// Create a new URL with the updated parameters
var newUrl = window.location.pathname + '?' + urlParams.toString();

// Update the URL
window.history.replaceState({}, document.title, newUrl);

// Log the updated URL to the console
}


function female(){
// Get the current URLSearchParams object from the URL
var urlParams = new URLSearchParams(window.location.search);

// Set or update a parameter in the URL
urlParams.set('paramName', 'female');

// Create a new URL with the updated parameters
var newUrl = window.location.pathname + '?' + urlParams.toString();

// Update the URL
window.history.replaceState({}, document.title, newUrl);

// Log the updated URL to the console
console.log("Updated URL:", newUrl);
}


function spinFunction(){
    const currentUrl = window.location.href;
    // Create a URLSearchParams object using the URL
    let gender=currentUrl.split("paramName=")[1];
    console.log(gender);
if(gender=='male')
rectangle.src = `attachments_male/image male${++i}.jpg`;
else if(gender=='female')
rectangle.src = `attachments_female/image ${++(i+99)}.jpg`;


}