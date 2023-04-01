//your code here
//h3 element creation
let heading3 = document.createElement("h3")
heading3.setAttribute("id", "h") //here we set attribut creating id and giveing value
heading3.innerHTML = "Please click on the identical tiles to verify that you are not a robot."
document.body.prepend(heading3) //append in webpage


//btn element creation
// let btn = document.createElement("button") //creating button
// btn.setAttribute("id", "btn") //here we set attribut creating id and giveing value
// btn.innerHTML = "Reset" //button value
// document.body.append(btn) //append in webpage


//creating btn by loop and arr

let arr = ["reset", "verify"]
for (let i of arr) {
let btn = document.createElement("button") //creating button
btn.setAttribute("id", i) //here we set attribut creating id and giveing value
btn.innerHTML = i.toUpperCase() //button value
//btn.style.backgroundColor = "yellow"
//btn.style.color = "blue"
//btn.style.cssText = "background-color:blue; color: white;"
btn.style.display = "none" 
document.body.append(btn) //append in webpage
}




//creting 6th random image from 5 values
let imgClass = ["img1", "img2", "img3","img4","img5"]
let randomIndex = Math.floor(Math.random()*imgClass.length)
let randomImg = imgClass[randomIndex]
imgClass.push(randomImg)

//shuffling the array - so that ing will generate randomly at each position after reload
let arr1 = []
//while loop 
let m = 0
while(m < imgClass.length){
    //while loop will stop when k will be equal to 1st array length    
    // if(k == imgClass.length){
    // break
    // }


    let randomIndex2 = Math.floor(Math.random()*imgClass.length)

  
    if(arr1[randomIndex2]==undefined){ //if index of arr1 is blank
        arr1[randomIndex2] = imgClass[m] //accegin the image to that array
        m = m+1  //k increment
    }
//if arr1 allready have value then skip that index and continue the loop
    else if(arr1[randomIndex2] != undefined){ 
        continue
    }

}



//selecting all images
let images = document.querySelectorAll("img")

//assigning class name to all images 
// let k = 0;
// for (let t of arr1) {
//     images[k].setAttribute("class", t)
//     images[k].setAttribute("id", t)
//     k = k+1
// }

for(let i = 0; i<= arr1.length-1; i++){
    images[i].setAttribute("class", arr1[i])
    images[i].setAttribute("id", i)
}


for(let t of images){
    t.addEventListener("click", userOrRobot)
}

let resetBtn = document.getElementById("reset")
let verifBtn = document.getElementById("verify")

let prevImgId = ""
let count = 0
 
function userOrRobot(e){
    
    resetBtn.style.display = "inline" //when you will click on any image reset image will visible
    let currentImgId = e.target.id
    
    
    if(currentImgId != prevImgId){
    //change border of image after click
    images[currentImgId].classList.add("selected")
        count++ 
        prevImgId = currentImgId
    }

    if(count == 2){
     
     verifBtn.style.display = "inline"   
    }
}

let p = document.createElement("p")

resetBtn.addEventListener("click", ()=>{
    verifBtn.style.display = "none"
    resetBtn.style.display = "none"
    p.style.display = "none"
    count = 0

    //to remove selected images
    selectedImages = document.querySelectorAll(".selected")

    for (let t of selectedImages) {
        t.classList.remove("selected")        
    }
    
    
})

verifBtn.addEventListener("click", ()=>{
    //let p = document.createElement("p")
    selectedImages = document.querySelectorAll(".selected")
    let class1 = selectedImages[0].className
    let class2 = selectedImages[1].className

    if(class1 == class2){
        
        p.innerHTML = "You are a human. Congratulations!"
    
    }

    else{

        p.innerHTML = "We can't verify you as a human.You selected the non-identical tiles."

    }
    verifBtn.style.display = "none"
    document.body.append(p)

})

