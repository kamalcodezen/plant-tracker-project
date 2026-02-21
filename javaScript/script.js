

// plant count all position
const total = document.getElementById("total");
const thrivingPlant = document.getElementById("thriving");
const strugglingPlant = document.getElementById("struggling");

const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilterBtn = document.getElementById("thriving-filter-btn");
const strugglingFilterBtn = document.getElementById("struggling-filter-btn");


const mainContainer = document.getElementById("main");


//all card section access and check length total position
const allCardSection = document.getElementById("all-card");
const thrivingFilterSection = document.getElementById("thriving-filter-section");
const struggleFilterSection = document.getElementById("struggling-filter-section");


// check length and store object details
let thrivingList = [];
let strugglingList = [];
// create a function and check all position length
function calCulateCount() {
    // total.innerText = allCardSection.children.length;
    total.innerText = thrivingList.length + strugglingList.length;
    thrivingPlant.innerText = thrivingList.length;
    strugglingPlant.innerText = strugglingList.length;

}
calCulateCount();


//  position button access and check toggle and add color

function allThrivingStrugglingShowId(id) {

    allFilterBtn.classList.add("bg-amber-100");
    thrivingFilterBtn.classList.add("bg-amber-100");
    strugglingFilterBtn.classList.add("bg-amber-100");

    allFilterBtn.classList.remove("bg-pink-400", "text-3xl");
    thrivingFilterBtn.classList.remove("bg-pink-400", "text-3xl");
    strugglingFilterBtn.classList.remove("bg-pink-400", "text-3xl");

    const selected = document.getElementById(id);
    selected.classList.add("bg-pink-400", "text-3xl");
    selected.classList.remove("bg-amber-100");


    //section click and showRender
    //section click and showRender
    if (id == "thriving-filter-btn") {
        allCardSection.classList.add("hidden");
        thrivingFilterSection.classList.remove("hidden");
        struggleFilterSection.classList.add("hidden");
    } else if (id == "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        thrivingFilterSection.classList.add("hidden");
        struggleFilterSection.classList.add("hidden");

    }
    else if (id == "struggling-filter-btn") {
        allCardSection.classList.add("hidden");
        struggleFilterSection.classList.remove("hidden");
        thrivingFilterSection.classList.add("hidden");
    }

};




// thriving button click and details access parent  and send to thriving position

mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("thriving-btn")) {

        let parentNode = event.target.parentNode.parentNode;
        let plantName = parentNode.querySelector(".plant-name").innerText;
        let latinName = parentNode.querySelector(".latin-name").innerText;
        let light = parentNode.querySelector(".light").innerText;
        let water = parentNode.querySelector(".water").innerText;
        let status = parentNode.querySelector(".status").innerText = "Thrive";
        let notes = parentNode.querySelector(".notes").innerText;


        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status,
            notes
        }

        const plantExists = thrivingList.find(item => item.plantName == cardInfo.plantName);

        if (!plantExists) {
            thrivingList.push(cardInfo);
        }
        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName);

        calCulateCount();
        renderAll();
       
    }

    if (event.target.classList.contains("struggling-btn")) {

        let parentNode = event.target.parentNode.parentNode;
        let plantName = parentNode.querySelector(".plant-name").innerText;
        let latinName = parentNode.querySelector(".latin-name").innerText;
        let light = parentNode.querySelector(".light").innerText;
        let water = parentNode.querySelector(".water").innerText;
        let status = parentNode.querySelector(".status").innerText = "struggling";
        let notes = parentNode.querySelector(".notes").innerText;


        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status,
            notes
        }

        const plantExists = strugglingList.find(item => item.plantName == cardInfo.plantName);

        if (!plantExists) {
            strugglingList.push(cardInfo);
        }

        thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName);

        calCulateCount();
        renderAll()
       
    }

});


// renderAll function thriving and struggle
function renderAll() {
    showRenderThrive();
    showRenderStruggle();
}

// new div create and append thriving section
function showRenderThrive() {

    thrivingFilterSection.innerHTML = "";

    for (let thrive of thrivingList) {

        let div = document.createElement("div");
        div.className = "card flex justify-between p-5 border rounded-xl";
        div.innerHTML = `
         <div class="space-y-4">

                    <div>
                        <p class="plant-name text-3xl text-cyan-300">${thrive.plantName}</p>
                        <p class="latin-name">${thrive.latinName}
                        </p>
                    </div>

                    <div class="flex gap-3 items-center">
                        <p class="light bg-amber-200 p-2 rounded">${thrive.light}</p>
                        <p class="water bg-amber-200 p-2 rounded">${thrive.water}</p>
                    </div>

                    <p class="status">${thrive.status}</p>
                    <p class="notes">${thrive.notes}</p>

                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-300 p-2 px-4 rounded font-semibold">Thriving</button>
                        <button class="struggling-btn bg-red-300 p-2 px-4 rounded font-semibold">Struggling</button>
                    </div>
                </div>
                <!-- main part 2 -->
                <div>
                    <button  class="delete-btn bg-red-800 px-4 py-1 rounded font-extrabold">Delete</button>
                </div>
    
        `;

        thrivingFilterSection.appendChild(div);

    }
}


function showRenderStruggle() {

    struggleFilterSection.innerHTML = "";

    for (let struggle of strugglingList) {

        let div = document.createElement("div");
        div.className = "flex justify-between p-5 border rounded-xl";
        div.innerHTML = `
         <div class="space-y-4">

                    <div>
                        <p class="plant-name text-3xl text-cyan-300">${struggle.plantName}</p>
                        <p class="latin-name">${struggle.latinName}
                        </p>
                    </div>

                    <div class="flex gap-3 items-center">
                        <p class="light bg-amber-200 p-2 rounded">${struggle.light}</p>
                        <p class="water bg-amber-200 p-2 rounded">${struggle.water}</p>
                    </div>

                    <p class="status">${struggle.status}</p>
                    <p class="notes">${struggle.notes}</p>

                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-300 p-2 px-4 rounded font-semibold">Thriving</button>
                        <button class="struggling-btn bg-red-300 p-2 px-4 rounded font-semibold">Struggling</button>
                    </div>
                </div>
                <!-- main part 2 -->
                <div>
                    <button class="delete-btn bg-red-800 px-4 py-1 rounded font-extrabold">Delete</button>
                </div>
    
        `;

        struggleFilterSection.appendChild(div);

    }

}





