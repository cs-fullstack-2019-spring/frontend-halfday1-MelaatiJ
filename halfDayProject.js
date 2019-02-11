



function changeBackroundB() {
    console.log("body");
    body.style.background = "darkslateblue";

}
function changeBackroundP() {

    body.style.background = "mediumpurple";
}
function changeBackroundR() {

    body.style.background = "indianred";
}




var buttonRed= document.querySelector(".red");
var buttonBlue = document.querySelector(".blue");
var buttonPurple = document.querySelector(".purple");
var body = document.querySelector("body");

buttonBlue.addEventListener("click",changeBackroundB);
buttonPurple.addEventListener("click",changeBackroundP);
buttonRed.addEventListener("click",changeBackroundR);


var pOneCounter=0;
var pTwoCounter=0;

//on click
$(".btnOne").on("click",addPointPone);
function addPointPone() {
    pOneCounter++;
    $(".score1").text(pOneCounter)}
$(".btnTwo").on("click",addPointPtwo);
function addPointPtwo() {
    pTwoCounter++;
    $(".score2").text(pTwoCounter)}


var keyboardButton = document.querySelector("keyboard");
var mouseButton =document.querySelector("mouse");



keyboardButton.addEventListener("click",keyboardrun);
mouseButton.addEventListener("click",mouseOn);









