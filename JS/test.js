let landingBage = document.querySelector(".landing");

let landingImgs = Array.from(document.querySelectorAll(".landing-imgs img"));

let settingBox = document.querySelector(".setting-box");

let settingButton = document.querySelector(".setting-icon");

let root = document.querySelector(":root");



settingButton.onclick =  () => {
    settingButton.classList.toggle("fa-spin");
    settingBox.classList.toggle("open")
};




let colorOption = Array.from(document.querySelectorAll(".box.color .options li"));
colorOption.forEach(e => {
    e.addEventListener("click", (e) => {
        root.style.cssText = `--main-color:${e.target.dataset.color}`;
        window.localStorage.setItem("color", `${e.target.dataset.color}`);
        removeAllActive(colorOption);
        e.target.classList.add("active")
    })
    if (e.dataset.color == window.localStorage.getItem("color")) {
        root.style.cssText = `--main-color:${window.localStorage.getItem("color")}`;
        removeAllActive(colorOption);
        e.classList.add("active");
    }
})





let randomImgsOption = Array.from(document.querySelectorAll(".box.rondom-imgs .options li")) ;
let randomCase = true;
let randomInterval;
function intervalRandom() {
    if (randomCase === true) {
        randomInterval = setInterval(randomImgs, 10000);
    } else {
        clearInterval(randomInterval);
        
    }
} 
intervalRandom();
randomImgsOption.forEach( e => {
    e.addEventListener("click", (e) => {
        window.localStorage.setItem("random-imgs", `${e.target.dataset.img}`);
        removeAllActive(randomImgsOption);
        e.target.classList.add("active");
        if (e.target.dataset.img === "yes") {
            randomCase = true;
            intervalRandom()
        } else {
            randomCase = false;
            intervalRandom();
            window.localStorage.setItem("found-imge", landingBage.style.backgroundImage)
        }
    });
    if (e.dataset.img == window.localStorage.getItem("random-imgs")) {
        removeAllActive(randomImgsOption);
        e.classList.add("active");
        if (window.localStorage.getItem("random-imgs") === "yes") {
            randomCase = true;
            intervalRandom()
        } else {
            randomCase = false;
            intervalRandom();
            landingBage.style.backgroundImage = window.localStorage.getItem("found-imge");
        }
    }
})


// FUNCTIN OF CHANGE LANDING IMGS BY RANDOM
    function randomImgs() {
        landingBage.style.backgroundImage = `url(${landingImgs[Math.floor(Math.random() * landingImgs.length)].getAttribute("src")})`;
        landingBage.style.transition = "1s";  
    }
    
//END FUNCTION




let ulOfBullets = document.querySelector(".bullets")
let hideBullets = Array.from(document.querySelectorAll(".box.bulls .options li"));
hideBullets.forEach(e => {
    e.addEventListener("click", (e) => {
        removeAllActive(hideBullets);
        e.target.classList.add("active")
        window.localStorage.setItem("hide-bullets", e.target.dataset.bullet);
        if (e.target.dataset.bullet === "yes") {
            ulOfBullets.style.display = "none"
        } else {
            ulOfBullets.style.display = "block"
        }
    });
    if (e.dataset.bullet === window.localStorage.getItem("hide-bullets")) {
        removeAllActive(hideBullets);
        e.classList.add("active");
        if (e.dataset.bullet === "yes") {
            ulOfBullets.style.display = "none"
        } else {
            ulOfBullets.style.display = "block"
        }
    }
})



let recetButton = document.querySelector(".recet-all");
recetButton.onclick = () => {
    window.localStorage.clear();
    window.location.reload();
};


//FUNCTION OF REMOVE ALL ACTIVE CLASS
function removeAllActive (array) {
    for (e of array) {
        e.classList.remove("active");
    }
}


function checkLocalStorage (array, localStorageItemName) {
    for (let i = 0; i < array.length; i++) {
        array[i].onclick = () => {
            removeAllActive (array);
            array[i].classList.add("active");
            window.localStorage.setItem(localStorageItemName, array[i].getAttribute("data-set"));
        }
        let Active = window.localStorage.getItem(localStorageItemName);
        if (array[i].getAttribute("data-set") === Active) {
            removeAllActive(array);
            array[i].classList.add("active");
        }
    }
};

//FUNCTION OF ABOUT READ MORE
let aboutParagraph = document.querySelector(".about-content p.des");
let aboutReadMoreLessBlock = document.querySelector(".about-content .read-more-less");


aboutReadMoreLessBlock.onclick = () => {
    aboutParagraph.classList.toggle("about-p");
    aboutReadMoreLessBlock.classList.toggle("rotated");
}


//FUNCTION OF CATALOGUE READ MORE
let catalogueReadMoreLessBlock = document.querySelector(".catalogue-content .read-more-less");
let combaniesLogo = document.querySelector(".companies-logo");



catalogueReadMoreLessBlock.onclick = () => {
    combaniesLogo.classList.toggle("appear-companieas-logo")
    catalogueReadMoreLessBlock.classList.toggle("rotated");
    catalogueReadMoreLessBlock.classList.toggle ("margin-zero");
}

//FUNCTION OF ALL SECTION
let combanies = document.querySelectorAll(".combany-img")
let allMercedes = document.querySelector(".all-mercedes");
let allBmw = document.querySelector(".all-bmw");
let allAudi = document.querySelector(".all-audi");
let allNissan = document.querySelector(".all-nissan");


combanies.forEach((e) => {
    e.onclick = function () {
        if (this.classList.contains("m")) {
            allMercedes.style.top = "50%";
        } else if (this.classList.contains("b")) {
            allBmw.style.top = "50%";
        } else if (this.classList.contains("a")) {
            allAudi.style.top = "50%";
        } else if (this.classList.contains("n")) {
            allNissan.style.top = "50%";
        }
    }
});

//mercedesModels
let mercedesModels = document.querySelectorAll(".all-mercedes .ul-model li");
let mercedesModelsDetails = document.querySelectorAll(".all-mercedes .body .details-model .detailt");
let mercedesAllLiProperties = document.querySelectorAll(".all-mercedes .body .details-model .detailt .properties li")
appearCarModel (mercedesModels, mercedesModelsDetails, mercedesAllLiProperties, "all-mercedes");

// bmwModels
let bmwModels = document.querySelectorAll(".all-bmw .ul-model li");
let bmwModelsDetails = document.querySelectorAll(".all-bmw .body .details-model .detailt");
let bmwAllLiProperties = document.querySelectorAll(".all-bmw .body .details-model .detailt .properties li")
appearCarModel (bmwModels, bmwModelsDetails, bmwAllLiProperties , "all-bmw");


// audiModels
let audiModels = document.querySelectorAll(".all-audi .ul-model li");
let audiModelsDetails = document.querySelectorAll(".all-audi .body .details-model .detailt");
let audiAllLiProperties = document.querySelectorAll(".all-audi .body .details-model .detailt .properties li")
appearCarModel (audiModels, audiModelsDetails, audiAllLiProperties , "all-audi");




// nissanModels
let nissanModels = document.querySelectorAll(".all-nissan .ul-model li");
let nissanModelsDetails = document.querySelectorAll(".all-nissan .body .details-model .detailt");
let nissanAllLiProperties = document.querySelectorAll(".all-nissan .body .details-model .detailt .properties li")
appearCarModel (nissanModels, nissanModelsDetails, nissanAllLiProperties , "all-nissan");


//FUNCTION OF APPEAR CAR IMG AND DETAILS
function appearCarModel (companyModels, companyModelsDetails, companyAllLiProperties, allCompanyName) {
    for (let i = 0; i < companyModels.length; i++) {
        companyModels[i].onclick = ()=>{
            companyModels.forEach((e)=>{
                e.classList.remove("active-model")
            })
            companyModels[i].classList.add("active-model");
            companyModelsDetails.forEach((e)=>{
                e.style.zIndex = "-1";
                if (e.classList.contains(companyModels[i].textContent)) {
                    e.style.zIndex = "200"
                    companyAllLiProperties.forEach((e)=>{
                        e.style.left = "2000px"
                    })
                    let carProperties = document.querySelectorAll(`.${allCompanyName} .${companyModels[i].textContent} .properties li`);
                    carProperties[0].style.left = "0"
                    carProperties[1].style.left = "15px"
                    carProperties[2].style.left = "75px"
                    carProperties[3].style.left = "135px"
                    carProperties[4].style.left = "195px"
                    carProperties[5].style.left = "255px"
                    carProperties[6].style.left = "315px"
                    carProperties[7].style.left = "0"
    
                }
            })
        }
    }
}
//END



let closeIcon = document.querySelectorAll(".all .adress .icon");
let everyAllClass = document.querySelectorAll(".all")

closeIcon.forEach((e) => {
    e.onclick = () => {
        everyAllClass.forEach((e) => {
            e.style.top = "-1000%"
        })
    }
})





















// for (let i = 0; i < mercedesModels.length; i++) {
//     mercedesModels[i].onclick = ()=>{
//         mercedesModels.forEach((e)=>{
//             e.classList.remove("active-model")
//         })
//         mercedesModels[i].classList.add("active-model");
//         mercedesModelsDetails.forEach((e)=>{
//             e.style.zIndex = "-1";
//             if (e.classList.contains(mercedesModels[i].textContent)) {
//                 e.style.zIndex = "200"
//                 mercedesAllLiProperties.forEach((e)=>{
//                     e.style.left = "2000px"
//                 })
//                 let mercedesModelsProperties = document.querySelectorAll(`.all-mercedes .${mercedesModels[i].textContent} .properties li`);
//                 mercedesModelsProperties[0].style.left = "0"
//                 mercedesModelsProperties[1].style.left = "15px"
//                 mercedesModelsProperties[2].style.left = "75px"
//                 mercedesModelsProperties[3].style.left = "135px"
//                 mercedesModelsProperties[4].style.left = "195px"
//                 mercedesModelsProperties[5].style.left = "255px"
//                 mercedesModelsProperties[6].style.left = "315px"
//                 mercedesModelsProperties[7].style.left = "0"

//             }
//         })
//     }
// }