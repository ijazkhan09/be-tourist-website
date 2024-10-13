let links = document.querySelectorAll(".navbar ul li a");
links.forEach(link=>{
    link.addEventListener("click", function(){
        links.forEach(links=>{links.classList.remove("active")})
        link.classList.add("active");
    })
})
let link_items = document.querySelectorAll(".list-items");
let contentChnage = document.querySelectorAll(".wrap-col")
link_items.forEach(items=>{
    items.addEventListener("click", function(e){
        link_items.forEach(items =>{items.classList.remove("active")})
        contentChnage.forEach(cols=>{cols.classList.remove("active")})
        contentChnage.forEach(col =>{
            if(e.target.classList.contains(col.id)){
                col.classList.add("active")
            }
            items.classList.add("active");
        })
    })
})


let images = [...document.querySelectorAll(".images")];
let Popup = document.querySelector("#popup");
let ClosebTn = document.querySelector(".close-btn");
let Imgindex = document.querySelector(".index")
let ImgName = document.querySelector(".img-name")
let popupImg = document.querySelector(".popup-img")
let leftArrow = document.querySelector(".left-arrow")
let rightArrow = document.querySelector(".right-arrow")
let index = 0
images.forEach((item, i)=>{
    item.addEventListener("click", function(){
        UpdateImg(i)
        Popup.classList.add("active")
    })
})

        
function UpdateImg(i) {
    let Path = `images/home_tourist_gallery ${i+1}.jpg`;
    popupImg.src = Path;
    ImgName.innerHTML = Path;
    Imgindex.innerHTML = `0${i+1}`;
    index = i;
} 


ClosebTn.addEventListener("click", function(){
    Popup.classList.remove("active")

})

leftArrow.addEventListener("click", () =>{
    if(index > 0){
        UpdateImg(index - 1) 
    }
})
rightArrow.addEventListener("click", () =>{
    if(index < images.length - 1){
        UpdateImg(index + 1) 
    }
})

let scrollIcon = document.querySelector(".icon")

// When the user scrolls down 20px from the top of the document, show the button
scrollIcon.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
