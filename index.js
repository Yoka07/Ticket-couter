
//initIAL THE COUNT AS 0
//LISTEN  FOR CLICKS ON THE INCREMENT BUTTON
//
/*

function increment() {
    console.log("The button was clicked")
}

*/ 
let counter =" Movie Ticket Counter"
let movieTicket = document.getElementById("welcome-el")
movieTicket.innerHTML = counter
let userName = document.getElementById("ticketUser")
let userClick = document.getElementById("submit")
let userBooked = document.getElementById("userBooked")


function userfun() {
   userBooked.innerHTML = userName.value
   console.log("userBooked")
}

let bookedDate = new Date()
document.getElementById("bookedDate").innerHTML = bookedDate


//camelCase
let count = 0;
let countEl = document.getElementById("count-el")
console.log("countEl")

let saveEl = document.getElementById("save-el")
saveEl.innerHTML = "Previous Entries:\n"
console.log(saveEl)


 
 function increment() {
   
    count += 1
    countEl.innerHTML = count
    console.log(count)
 }

 function save() {

    let countStr = count + "-"
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0

 }
