
const navlink = document.querySelector('.nav-link')
const menu = document.querySelector('#moblie-menu')
const close = document.querySelector(".close1")
const close2 = document.querySelector(".close2")
const close3 = document.querySelector(".close3")
const close4 = document.querySelector(".close4")


menu.addEventListener("click",function(){
   
   navlink.classList.toggle("active");
   
   menu.classList.toggle('is-active');
   
  
})

close.addEventListener("click",function(){
     navlink.classList.toggle("close-link")
     menu.classList.toggle('is-active');
})

close2.addEventListener("click",function(){
    navlink.classList.toggle("close-link")
    menu.classList.toggle('is-active');
})

close3.addEventListener("click",function(){
    navlink.classList.toggle("close-link")
    menu.classList.toggle('is-active');
})

close4.addEventListener("click",function(){
    navlink.classList.toggle("close-link")
    menu.classList.toggle('is-active');
})



/*

--------------create a div and p------------
const body = document.querySelector("body")
const num = document.createElement("div")
const num2 = document.createElement("p")

-----------input heyy in div-------------
num.append(num2.textContent = "heyy")
body.append(num)
num.className = "one"

------ css here--------
num.style.display ="none"
num.style.color ="red"
*/

/*
button.addEventListener("click",function(){
    arr.push(input.value) 
    yes()
    input.value=''
})

function yes(){
    let item = ""
    for( let i = 0; i < arr.length;i++){
    
        item +=`
        <li> 
        <a href="${arr[i]}">${arr[i]} 
        </li>`;
    }
    result.innerHTML = item
    console.log(item)
}*/



/*let num_one = document.getElementById("num-one").textContent = 3

let num_two = document.getElementById("num-two").textContent = 4

let total = document.getElementById("result")

function add(){
    result = num_one + num_two
    total.textContent = "Sum :" + result


}

function sub(){
    result = num_one - num_two
    total.textContent = "Sum :" + result

    
}

function div(){
    result = num_one / num_two
    total.textContent = "Sum :" + result

}

function mul(){
    result = num_one * num_two
    total.textContent = "Sum :" + result

}
*/


/*let count = document.getElementById("count")
let save_text = document.getElementById("text")


let num = 0;

function button(){
    num++;
        count.innerText = num;
    if ( num >= 10){
        num = 0;

    }
    
}

function save(){
    let countstr = num +' - '

    save_text.textContent += countstr
    
    num = 0;
    count.innerText =num
}
*/


