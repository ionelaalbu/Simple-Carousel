
let pic=document.querySelector(".pictures")
let btnL=document.querySelector(".btnL")
let btnR=document.querySelector(".btnR")
let container=document.querySelector(".btn")

// arr with images
let arr=[
    {
        img:'img/im1.jpeg'
    },
    {
        img:'img/im2.webp'
    },
    {
        img: 'img/im3.jpeg'
    }
]

// index= we need it to count everytime when the button is clicked
let index=0
//creating an img and put it in the container parent
let img=document.createElement("img")
//arr[0].img= is the first img of array
img.setAttribute("src", arr[0].img) 
img.classList.add("imgG")
//pic= container parent
pic.appendChild(img) 

//function show is for parent element for buttons
function show(event){
    let button=event.target.name
    if(button === "right"){
        //everytime when the right button is clicked, count increases
        // and check every element in array
        index++
        // if the index is at the end of array, (index>=arr.length),
        // index must come back to first position of array(index=0)
        if(index>=arr.length){
            index=0
        }
        //and because of condition the img src is changed (arr[index].img)
        img.setAttribute("src", arr[index].img) 
        img.classList.add("imgG")
        pic.appendChild(img) 
    }else{
        //everytime when the left button is clicked, count decreases
        index--
        //if the index is on first position of element  from array (index<0)
        //index must come back to last element of array,(index=arr.length-1)
        if(index<0){
            index=arr.length-1
        }
        img.setAttribute("src", arr[index].img) 
        img.classList.add("imgG")
         pic.appendChild(img) 
    }
}
//addEvnet to parent of buttons
container.addEventListener("click", show)