let rain = document.getElementById("start");
rain.addEventListener("click", raining);

function raining(){
    let body = document.querySelector(".header");
    let amount = 80;
    let i = 0;
    while(i<amount){
        let drop = document.createElement("aside");

        drop.setAttribute("id","raining")
        let size = Math.random() * 5;
        let pos = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 0.2 + size + "px";
        drop.style.left = pos + "px";
        drop.style.animationDelay = delay + "s";
        body.appendChild(drop);
        i++
    }
    alert("The rain will stop when you refreshes the page, thanks for visiting!");
}


// slide in effect 
const boxes = document.querySelectorAll(".contain");
window.addEventListener("scroll", checkout);
checkout()

function checkout(){
    const trigger = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top
        if(top < trigger){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
}

let react = document.querySelector("#btnreact");
react.addEventListener("click",()=>{
    alert("Opps! Not Available");
})

// drop down menu
let displayHeader = document.querySelector('i');
let headerUlShow = document.querySelector("ul");
displayHeader.addEventListener("click",()=>{
	displayHeader.classList.toggle("fa-times");
	if(displayHeader.classList.contains("fa-times")){
		headerUlShow.style.display = "block"
	}else{
		headerUlShow.style.display = "none"
	}
})