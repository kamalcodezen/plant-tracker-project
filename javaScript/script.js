
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



//  position button access and check toggle and add color

function allThrivingStrugglingShowId(id) {
    const allFilterBtn = document.getElementById("all-filter-btn");
    const thrivingFilterBtn = document.getElementById("thriving-filter-btn");
    const strugglingFilterBtn = document.getElementById("struggling-filter-btn");

    allFilterBtn.classList.add("bg-amber-100");
    thrivingFilterBtn.classList.add("bg-amber-100");
    strugglingFilterBtn.classList.add("bg-amber-100");

    allFilterBtn.classList.remove("bg-pink-400", "text-3xl");
    thrivingFilterBtn.classList.remove("bg-pink-400", "text-3xl");
    strugglingFilterBtn.classList.remove("bg-pink-400", "text-3xl");

    const selected = document.getElementById(id);
    selected.classList.add("bg-pink-400", "text-3xl");
    selected.classList.remove("bg-amber-100");
}
