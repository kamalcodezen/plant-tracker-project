
// plant count all position
const total = document.getElementById("total");
const thrivingPlant = document.getElementById("thriving");
const strugglingPlant = document.getElementById("struggling");

//main tag access and check length 
const allCardSection = document.getElementById("all-card");


// check length and store object details
let thrivingList = [];
let strugglingList = [];
// create a function and check all position length
function calCulateCount() {
    total.innerText = allCardSection.children.length;
    thrivingPlant.innerText = thrivingList.length;
    strugglingPlant.innerText = strugglingList.length;

}
calCulateCount();

