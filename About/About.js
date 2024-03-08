//----------------左侧 Menu打开---------//
const scrollmenu = document.querySelector('.scroll_menu')
const scrollbtn = document.querySelector('.scroll_button')

scrollbtn.addEventListener('click',function(){
    //   scrollmenu.style.left = '-2px'
    scrollmenu.classList.add('scroll_menu_display')
    scrollmenu.classList.remove('scroll_menu_none')
    
})
// 左侧Menu关闭----------------//
const close_btn = document.querySelector('.close_btn')
close_btn.addEventListener('click',function(){
    //   scrollmenu.style.left = '-450px'
    scrollmenu.classList.add('scroll_menu_none')
    scrollmenu.classList.remove('scroll_menu_display')
})
// ------------Menu按钮背景图---------------//
// ------------Menu中的字体颜色转变---------------//
const list_item =  document.querySelectorAll('.list-item')
const list_item2 = document.querySelectorAll('.list-item-second')
const text_white = document.querySelectorAll('.list-des')
const arrow_btn = document.querySelectorAll('.arrow_btn')
const text_white2 = document.querySelectorAll('.list-des2')
const arrow_btn2 = document.querySelectorAll('.arrow_btn2')

for (let i = 0; i < list_item.length; i++) {
    text_white[i].addEventListener('mouseenter',function(){
    text_white[i].style.color = '#fff'
    arrow_btn[i].style.opacity = '1'
    arrow_btn[i].style.transform = "translate(0.6vw)"
    })
   
}
for (let i = 0; i < list_item.length; i++) {
    text_white[i].addEventListener('mouseleave',function(){
    text_white[i].style.color = 'rgb(8, 28, 58)'
    arrow_btn[i].style.opacity = '0'
    arrow_btn[i].style.transform = "translate(0)" 
    })
}
for (let i = 0; i < list_item2.length; i++) {
    text_white2[i].addEventListener('mouseenter',function(){
    text_white2[i].style.color = '#fff'
    arrow_btn2[i].style.opacity = '1'
    arrow_btn2[i].style.transform = "translate(0.6vw)"
    })
}
for (let i = 0; i < list_item2.length; i++) {
    text_white2[i].addEventListener('mouseleave',function(){
    text_white2[i].style.color = 'rgb(8, 28, 58)'
    arrow_btn2[i].style.opacity = '0'
    arrow_btn2[i].style.transform = "translate(0)" 
    })
}

//------ 顶端导航条中的destination drop-own menu-----//
const rightmenu = document.querySelector('.right_menu')
const dropDown = document.querySelector('.dropDown')
rightmenu.addEventListener('click',function(){
    dropDown.classList.toggle('dropDown_opacity')
})

const list_item3 = document.querySelectorAll('.list-item-3')
const text_white3 = document.querySelectorAll('.list-des3')
const arrow_btn3 = document.querySelectorAll('.arrow_btn3')
for (let i = 0; i < list_item3.length; i++) {
    list_item3[i].addEventListener('mouseenter',function(){
    text_white3[i].style.color = '#fff'
    arrow_btn3[i].style.opacity = '1'
    arrow_btn3[i].style.transform = "translate(0.47vw)"
    })
}
for (let i = 0; i < list_item3.length; i++) {
    list_item3[i].addEventListener('mouseleave',function(){
    text_white3[i].style.color = 'rgb(8, 28, 58)'
    arrow_btn3[i].style.opacity = '0'
    arrow_btn3[i].style.transform = "translate(0)" 
    })
}

//  ----------------Onload--------------//
const box = document.querySelector('.trans_box')
  const topBox = document.querySelector('.top')
  const bottomBox = document.querySelector('.bottom')
  const windowHeight = window.innerHeight
  box.style.height = 100 + 'vh'
  topBox.style.height = 50 + 'vh'
  bottomBox.style.height = 50 + 'vh'

window.addEventListener('load', function () {
topBox.style.height = 0
bottomBox.style.height = 0
    setTimeout(() => {
        box.style.zIndex = 0
    }, 1000)
})

// ----------------顶部导航条-----------//

const hide = document.querySelector('.nav .hide')
const top_menu = document.querySelector('.top_menu')
const logo = document.querySelector('.hide .logo span')
const logo_bold = document.querySelector('.logo_bold')
const right_menu = document.querySelector('.right_menu')
// console.log(right_menu)
window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    if (scrollY > 100) {
        hide.classList.add('hide_display')
        hide.classList.remove('hide_none')
        top_menu.style.opacity = '1'
        logo.style.color = 'black'
        logo_bold.style.color = 'black'
        right_menu.style.color = 'black'
    } else {
        hide.classList.remove('hide_display')
        hide.classList.add('hide_none')
        top_menu.style.opacity = '0'
        logo.style.color = '#fff'
        logo_bold.style.color = '#fff'
        right_menu.style.color = '#fff'
    }
    // if (window.scrollY < 800) {
    //     hide.style.top = Math.ceil(window.scrollY / 10 - 75) + 'px'
    // }
})


// -------------top menu中的间按钮的阴影变化--------------//

let masks = document.querySelectorAll('.top_menu .overlay')
let lists = document.querySelectorAll('.top_menu a')

for (let i = 0; i < lists.length; i++) {

    lists[i].addEventListener('mouseover', function () {
        masks[i].style.opacity = '1'
        masks[i].style.transform = "scale(1,1)"
    })
    lists[i].addEventListener('mouseout', function () {
        masks[i].style.opacity = '0'
        masks[i].style.transform = "scale(0.5,0.5)"
    })
}

const infolink = document.querySelector('.info-box .link')
const linkbtn = document.querySelector('.link-btn')
const infobox = document.querySelector('.link-box')

infolink.addEventListener('mouseenter', function () {
        linkbtn.style.opacity = '1'
        linkbtn.style.transform = "translate(13px)"
        
        infobox.style.marginLeft = "0.6vw"
       
})
infolink.addEventListener('mouseleave', function () {
        linkbtn.style.opacity = '0'
        linkbtn.style.transform = "translate(0px)"
        
        infobox.style.marginLeft = "0"
       
})


// -------------左侧滑动条-----------------//
let indicator = document.querySelector('.indicator')
let wraper = document.querySelector('.indicator-wrapper')
window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let top = Math.ceil(scrollY * 1.0 / 4.5 )
    indicator.style.top = top / 10.8 + 'vh'
})

// -----------左侧滑动条里的社媒按钮-————————//
let social = document.querySelectorAll('.social-list .social')
for (let i = 0; i < social.length; i++) {
    social[i].addEventListener('mouseenter',function(){
    this.style.borderColor = '#3572ff'
    this.style.backgroundColor = '#3572ff'
    this.style.transform = 'scale3d(1.03, 1.03, 1)'
    this.style.transformStyle = 'preserve-3d'
    })
}
for (let i = 0; i < social.length; i++) {
    social[i].addEventListener('mouseleave',function(){
    this.style.borderColor = 'rgba(192, 192, 211, 0.2)'
    this.style.backgroundColor = 'rgba(192, 192, 211, 0.05)'
    this.style.transform = 'scale3d(1, 1, 1)'
    this.style.transformStyle = 'preserve-3d'
    })
}

// ----------第三部分-------//
const contactbtn = document.querySelector('.third_part span')
contactbtn.addEventListener('mouseenter',function(){
    this.classList.add('contactbtn_active')
})
contactbtn.addEventListener('mouseleave',function(){
    this.classList.remove('contactbtn_active')
})

// --------Mission---------//
const mission = document.querySelector('.mission')
const missionimg = document.querySelectorAll('.mission .gallery .img')

for (let i = 0; i < missionimg.length; i++) {
    mission.addEventListener('mouseenter',function(){
    missionimg[i].style.backgroundPosition = '55% 55%'
    })
}

for (let i = 0; i < missionimg.length; i++) {
    mission.addEventListener('mouseleave',function(){
    missionimg[i].style.backgroundPosition = '50% 50%'
    })
}

// ----------第10部分----------//
const agentbox = document.querySelectorAll('.tenth_part .box')
const agentimg = document.querySelectorAll('.tenth_part .agent_img .img')

for (let i = 0; i < agentbox.length; i++){
    agentbox[i].addEventListener('mouseenter',function(){
        this.classList.add('box_active')
        agentimg[i].classList.add('img_active')
    })
}
for (let i = 0; i < agentbox.length; i++){
    agentbox[i].addEventListener('mouseleave',function(){
        this.classList.remove('box_active')
        agentimg[i].classList.remove('img_active')
    }) 
}
