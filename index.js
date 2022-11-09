const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

let homeScoreCalc = 0

function homePlusOne(){
    homeScoreCalc += 1
    homeScore.innerText = homeScoreCalc;
    winner()
}

function homePlusTwo(){
    homeScoreCalc += 2
    homeScore.innerText = homeScoreCalc;
    winner()
}

function homePlusThree(){
    homeScoreCalc += 3
    homeScore.innerText = homeScoreCalc;
    winner()
}


let guestScoreCalc = 0

function guestPlusOne(){
    guestScoreCalc += 1
    guestScore.innerText = guestScoreCalc;
    winner()
}

function guestPlusTwo(){
    guestScoreCalc += 2
    guestScore.innerText = guestScoreCalc;
    winner()
}

function guestPlusThree(){
    guestScoreCalc += 3
    guestScore.innerText = guestScoreCalc;
    winner()
}


function resetHome(){
    homeScore.innerText = 0 ;
    homeScore.classList.remove("winner")
    
}

function resetGuest(){
    guestScore.innerText = 0 ;
    guestScore.classList.remove("winner")
    
}


function winner(){
    if ( parseInt(homeScore.innerText) === parseInt(guestScore.innerText) ){
        homeScore.classList.remove("winner")
        guestScore.classList.remove("winner")
    }else if(parseInt(homeScore.innerText) > parseInt(guestScore.innerText)){
        homeScore.classList.add("winner")
        guestScore.classList.remove("winner")
    }else{
        guestScore.classList.add("winner")
        homeScore.classList.remove("winner")
    }
}