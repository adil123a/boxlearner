let bar=document.getElementById('bar')
let menu=  document.getElementById('menu')
let content= document.getElementById('content')
let istrue= true
bar.addEventListener('click',function(){
    if(istrue){
        menu.style.transform='translateY(0px)'
        menu.style.position='fixed'
        menu.style.zIndex='3'
        istrue=false
    }else{
        
        menu.style.transform='translateY(-70px)'
        menu.style.position='relative'
        searchInp.style.visibility="hidden"
        istrue=true
        isTrueForMenu=true
    }
})


let searchIcon= document.getElementById('searchI')
let searchInp= document.getElementById('search')
let isTrueForMenu=true
searchIcon.addEventListener('click',function(){
 if (isTrueForMenu) {
     searchInp.style.visibility="visible"
     isTrueForMenu=false
 }else{
    searchInp.style.visibility="hidden"
    isTrueForMenu=true
 }
})
let leftArrow= document.getElementsByClassName('fa-chevron-left')
let rightArrow= document.getElementsByClassName('fa-chevron-right')

let carouselSlide=document.getElementsByClassName('carousel-slider')

let img=document.querySelectorAll('.carousel-slider img')

let preBtn= document.querySelector('#pre')
let next= document.querySelector('#next')

let counter=1

let size= (img[0].clientWidth)


// carouselSlide[0].style.transform='translateX('+(-size*counter)+'px)'


next.addEventListener('click',()=>{
    if (counter>=img.length-1) return;
    carouselSlide[0].style.transition= 'transform 0.4s '
    counter++
    ( carouselSlide[0].style.transform='translateX('+(-size*counter)+'px)')
    
})

pre.addEventListener('click',()=>{
    if(counter<=0)return;
 
    carouselSlide[0].style.transition= 'transform 0.4s '
    counter--
    carouselSlide[0].style.transform='translateX('+(-size*counter)+'px)'
    
    counter;
})

carouselSlide[0].addEventListener('transitionend', ()=> {
carouselSlide[0].style.transition='none'
if(img[counter].id==='lastClone'){
    counter=img.length-2
    carouselSlide[0].style.transform='translateX('+(-size*counter)+'px'
   
}
if(img[counter].id==='firstClone'){
    carouselSlide[0].style.transition='none'
    counter=img.length-counter
    carouselSlide[0].style.transform='translateX('+(-size*counter)+'px'
}
})

var navbar=document.getElementsByClassName('navbar')
// navbar[0].style.background
window.addEventListener('scroll',()=>{

    let s=window.scrollY
    if (s>60) {
        navbar[0].style.background='#d6c9dc'
     }
    else if(s<60){
        navbar[0].style.background='transparent'
    }

})