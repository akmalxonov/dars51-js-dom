// 1
let btnElement3 = document.querySelector(".btn3")
let cardElement = document.querySelector(".card")
btnElement3.addEventListener('click',()=>{
    let newBtnElement = document.createElement("button")
    newBtnElement.classList.add("btn3")
    newBtnElement.textContent = "button"
    cardElement.appendChild(newBtnElement)
})

// 2

// 3
let btnElement = document.querySelector(".btn")
let numberElement = document.querySelector("#number")
btnElement.addEventListener('click', (e) => {
    numberElement.textContent = parseInt(Math.random() * 100);
    document.body.style.backgroundColor = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
    btnElement.style.backgroundColor = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
});

// 4
let btnElement2 = document.querySelector(".btn2")
let a = true
let b 
btnElement2.addEventListener("click", () => {
    if(a){
        a = false
        b = setInterval(() => {
            document.body.style.backgroundColor = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
        }, 2000)
    }else{
        a = true;
        clearInterval(b);
        document.body.backgroundColor = "white"
    }
})

// 5
let imagesElement = document.querySelector(".images")
let imgElement = document.querySelector(".img") 

const images = ["<img class\='img' src=\'/images/img (4).jpg\'>",
    "<img class\='img' src=\'/images/img (5).jpg\'>",
    "<img class\='img' src=\'/images/img (6).jpg\'>",
    "<img class\='img' src=\'/images/img (7).jpg\'>",
    "<img class\='img' src=\'/images/img (8).jpg\'>",
    "<img class\='img' src=\'/images/img (9).jpg\'>"
]
let i = 0
setInterval(()=>{   
    i = (i + 1)% images.length
    imagesElement.innerHTML = images[i]
},2000)


// 6
let randomElement = parseInt(Math.random() * 10)
console.log(randomElement);
let titleElement = document.querySelector(".title")
let formElement = document.querySelector("#form")
formElement.addEventListener("submit",(e)=>{
    e.preventDefault()
    let number = e.target[0].value
    console.log(number);
    e.target[0].value = ""
    if(randomElement == number){
        titleElement.textContent = "Ura Siz toptiz,Yutiz"
        titleElement.classList.add("winner")

        function createConfetti(container) {
            for (let i = 0; i < 50; i++) {
              const confetti = document.createElement("div");
              confetti.classList.add("confetti-piece");
      
              // Tasodifiy rang
              confetti.style.backgroundColor = `hsl(${Math.random() * 100}, 100%, 50%)`;
      
              // Tasodifiy pozitsiya
              confetti.style.left = Math.random() * container.clientWidth + "px";
              confetti.style.top = Math.random() * 800 + "px";
      
              // Tasodifiy o'lcham
              const size = Math.random() * 5 + 2 + "px";
              confetti.style.width = size;
              confetti.style.height = size;
      
              container.appendChild(confetti);
      
              // Confetti avtomatik o'chirilishi
              setTimeout(() => {
                confetti.remove();
              }, 3000); // 3 soniya
            }
          }
      
          // Confetti boshlash
          const container = document.getElementById("confetti-container");
          setInterval(() => createConfetti(container), 500);


    }else if(randomElement > number){
        titleElement.textContent = "Topmadiz man oylagan son siz etgan sondan kotta"
    }else if(randomElement < number){
        titleElement.textContent = "Topmadiz man oylagan son siz etgan sondan kichik"
    }
})
