    //----------------左侧 Menu打开---------//
  const scrollmenu = document.querySelector('.scroll_menu')
  const scrollbtn = document.querySelector('.scroll_button')

  scrollbtn.addEventListener('click',function(){
      scrollmenu.classList.add('scroll_menu_display')
      scrollmenu.classList.remove('scroll_menu_none')
      
  })
  // 左侧Menu关闭----------------//
  const close_btn = document.querySelector('.close_btn')
  close_btn.addEventListener('click',function(){
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
        // arrow_btn[i].classList.add('arrow_display')
      })
     
  }

  for (let i = 0; i < list_item.length; i++) {
      text_white[i].addEventListener('mouseleave',function(){
      text_white[i].style.color = 'rgb(8, 28, 58)'
      arrow_btn[i].style.opacity = '0'
      arrow_btn[i].style.transform = "translate(0)" 
    //   arrow_btn[i].classList.add('arrow_none')
    
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
  const dropdown = document.querySelector('.dropDown')
  rightmenu.addEventListener('click',function(){
      dropdown.classList.toggle('dropDown_opacity')
  })
  
  const listitem3 = document.querySelectorAll('.list-item-3')
  const textwhite3 = document.querySelectorAll('.list-des3')
  const arrowbtn3 = document.querySelectorAll('.arrow_btn3')
  for (let i = 0; i < listitem3.length; i++) {
      listitem3[i].addEventListener('mouseenter',function(){
      textwhite3[i].style.color = '#fff'
      arrowbtn3[i].style.opacity = '1'
      arrowbtn3[i].style.transform = "translate(0.47vw)"
      })
  }
  for (let i = 0; i < listitem3.length; i++) {
      listitem3[i].addEventListener('mouseleave',function(){
      textwhite3[i].style.color = 'rgb(8, 28, 58)'
      arrowbtn3[i].style.opacity = '0'
      arrowbtn3[i].style.transform = "translate(0)" 
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
  // console.log(masks)
  // console.log(lists)
  for (let i = 0; i < lists.length; i++) {
      // lists[i].addEventListener('mouseenter', function () {
      //     masks[i].style.opacity = '1'
      //     masks[i].style.transform = "scale(1,1)"
      // })
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
          linkbtn.style.transform = "translate(0.6vw)"
          
          infobox.style.marginLeft = "0.6vw"
         
  })
  infolink.addEventListener('mouseleave', function () {
          linkbtn.style.opacity = '0'
          linkbtn.style.transform = "translate(0)"
          
          infobox.style.marginLeft = "0"
         
  })


  // -------------左侧滑动条-----------------//
  let indicator = document.querySelector('.indicator')
  let wraper = document.querySelector('.indicator-wrapper')
  window.addEventListener('scroll', function () {
      let scrollY = window.scrollY;
      let top = Math.ceil(scrollY * 1.0 /18 )
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

  // --------swiper-------//
  var swiper = new Swiper(".mySwiper", {
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      // 设置一页展示几张图片
      slidesPreview: 3,
      // 设置图片之间的距离
    //   spaceBetween: -15,
      // 让主slide在中间展示
      centeredSlides:true,
      loop:true,
    //   autoWidth: true
  });

  const scroll_menu = document.querySelector('.scroll_menu')
  const scroll_btn = document.querySelector('.scroll_button')
  scroll_btn.addEventListener('click',function(){
      this.classList.toggle('scroll_menu_display')
  })


  // --------Video--------//
  const inner = document.querySelector('.right_top')
  const innerPlay = document.querySelector('.video_icon')
  const video = document.querySelector('video')
  
  const lighter_outer = document.querySelector('.lighter_outer')
  const dark_outer = document.querySelector('.dark_outer')
  inner.addEventListener('mouseenter', function () {
      setTimeout(() => {
          inner.classList.add('active')
          innerPlay.classList.add('active')
          video.classList.add('active')
          lighter_outer.classList.add('active')
          dark_outer.classList.add('active')
      }, 200)
  })

  inner.addEventListener('mouseleave', function () {
      setTimeout(() => {
          inner.classList.remove('active')
          innerPlay.classList.remove('active')
          video.classList.remove('active')
          lighter_outer.classList.remove('active')
          dark_outer.classList.remove('active')
          // 鼠标leave回到原点
          inner.style.transform = 'translate(0,0)'
      }, 200)
  })

  inner.addEventListener('mousemove', function (e) {
      // 找到 inner 中心点
      // console.log(inner.offsetLeft);
    //   let x = e.clientX 
    //   let y = e.clientY 
    //   console.log(x)
    //   console.log(y)
      let x = e.clientX - 1311
      let y = e.clientY - 217
      // 移动范围 -20 - 20
      x = x > 20 ? 20 : x
      x = x < -20 ? -20 : x
      y = y > 20 ? 20 : y
      y = y < -20 ? -20 : y
    //   inner.style.transform = `translate(${x}px,${y}px)`
      inner.style.transform = `translate(${x / 19.2}vw,${y / 10.8}vh)`
    //   console.log(`translate(${x / 19.2}vw,${y / 10.8}vh)`);
    
  })
  
  //------- 第一部分 background image 切换-------//
  const backgroundList = [
      {
          image: "url(./img/607dcd3355581e17e093caed_011.jpeg)",
          cityCountries: "Thessaloniki, Greece",
          value: "STARTING AT $6700",
      },
      {
          image: "url(./img/607dcd2961c3e396968aac28_031.jpeg)",
          cityCountries: "Denpasar, Indonesia",
          value: "STARTING AT $1900",
      },
      {
          image: "url(./img/607dcd3ca4b006d82a3c6859_026.jpeg)",
          cityCountries: "Bahariya Oasis, Egypt",
          value: "STARTING AT $6400",
      },
  ]

  const backgroundbtn = document.querySelector('.right_bottom .left_arrow')
  const backgroundbtnr = document.querySelector('.right_bottom .right_arrow')
  const first_bg = document.querySelector('.first_bg')
  const locationname = document.querySelector('.location_rate h3')
  const locationrate = document.querySelector('.location_rate p')
  
  let i = 0
  backgroundbtn.addEventListener('click', function () {
      
      i < backgroundList.length - 1 ? i++ : i = 0
      // i >= backgroundList.length - 1 ? i = 0 : i++
      first_bg.style.backgroundImage = backgroundList[i].image
      locationname.innerText = backgroundList[i].cityCountries
      locationrate.innerText = backgroundList[i].value
    //   locationname.style.transform = 'scale(1.1, 1.1)'
  })

  backgroundbtnr.addEventListener('click', function () {
    //  要用i才能关联上两个按钮
      i > backgroundList.length - 3 ? i-- : i = 2
      first_bg.style.backgroundImage = backgroundList[i].image
      first_bg.style.backgroundPosition = "50% 50%"
      locationname.innerText = backgroundList[i].cityCountries
      locationrate.innerText = backgroundList[i].value
  
  })

  // ---------第三部分的drop down menu-------------//
  const destinationbtn = document.querySelector('.destinationbtn')
  const dropDown = document.querySelector('.third_part .dropDown')
  destinationbtn.addEventListener('click',function(){
      dropDown.classList.toggle('dropDown_opacity')
  })
  
  const list_item3 = document.querySelectorAll('.list-item-3')
  const text_white3 = document.querySelectorAll('.list-des3')
  const arrow_btn3 = document.querySelectorAll('.arrow_btn3')
  for (let i = 0; i < list_item3.length; i++) {
      list_item3[i].addEventListener('mouseenter',function(){
      text_white3[i].style.color = '#fff'
      arrow_btn3[i].style.opacity = '1'
      arrow_btn3[i].style.transform = "translate(0.42vw)"
      })
  }
  for (let i = 0; i < list_item3.length; i++) {
      list_item3[i].addEventListener('mouseleave',function(){
      text_white3[i].style.color = 'rgb(8, 28, 58)'
      arrow_btn3[i].style.opacity = '0'
      arrow_btn3[i].style.transform = "translate(0)" 
      })
  }

  destinationbtn.addEventListener('mouseenter',function(){
      this.classList.add('destinationbtn_active')
  })
  destinationbtn.addEventListener('mouseleave',function(){
      this.classList.remove('destinationbtn_active')
  })
 
  // ------第三部分的bottom------//
  
  const bottom_box = document.querySelectorAll('.boxes .bottom_box')

  for (let i = 0; i < bottom_box.length; i++){
      bottom_box[i].addEventListener('mouseenter',function(){
          this.classList.add('bottom_box_active')
      })
  }
  for (let i = 0; i < bottom_box.length; i++){
      bottom_box[i].addEventListener('mouseleave',function(){
          this.classList.remove('bottom_box_active')
      })
      
  }

   // ------第四部分------//
   let prev = document.querySelector('.arrow .left')
   let next = document.querySelector('.arrow .right')
   let quote = document.querySelectorAll('.quote')
   let leftLists = document.querySelectorAll('.num li')
   next.addEventListener('click', function () {
       let arr = [...quote];
       let index;
       for (let i = 0; i < arr.length; i++) {
           if ([...quote[i].classList].includes('active')) {
               index = i
           }
       }
       let j = index + 1
       j = j == arr.length ? 0 : j
       // j == arr.length ? j=0 : j=j
       quote[index].classList.remove('active') //原来所在的list
       quote[j].classList.add('active')//当前所在的list

       leftLists[index].classList.remove('active')
       leftLists[j].classList.add('active')
   })

   prev.addEventListener('click', function () {
       let arr = [...quote],
           index;
       for (let i = 0; i < arr.length; i++) {
           if ([...quote[i].classList].includes('active')) {
               index = i
           }
       }
       let j = index - 1
       j = j == -1 ? arr.length - 1 : j
       quote[index].classList.remove('active')
       quote[j].classList.add('active')

       leftLists[index].classList.remove('active')
       leftLists[j].classList.add('active')
   })

  // ----------第五部分---------//
  let changeLocation = document.querySelector('.changeLocation')
  let targets = document.querySelectorAll('.changeLocation a')
  let line = document.querySelector('.changeLocation .line')
  let dot = document.querySelector('.dot')
  let boxs = document.querySelectorAll('.box')
  const locationBox = document.querySelectorAll('.boxes .locationRate')
  
  // 事件委托
  changeLocation.addEventListener('click', function (e) {
    //   console.log(e.target);
      for (let i = 0; i < targets.length; i++) {
          targets[i].classList.remove("selected")
          boxs[i].classList.remove('active')
      }
      const id = e.target.dataset.id
      targets[id].classList.add('selected')
      targets[id].classList.add('active')
      line.style.width = (+id + 1) * 250 / 19.2 + 'vw'
   
      boxs[id].classList.add('active')
      for (let i = 0; i < targets.length; i++){
        if(i<=id){
            // console.log(i)
            targets[i].classList.add('active')
           
        }else{
            targets[i].classList.remove('active')
        }
      }
      

  })
  
  const border = document.querySelectorAll('.boxes .border')
  const borderimg = document.querySelectorAll('.boxes .borderBox img')

  for (let i = 0; i < border.length; i++){
      border[i].addEventListener('mouseenter',function(){
          this.classList.add('border_active')
      })
  }
  for (let i = 0; i < border.length; i++){
      border[i].addEventListener('mouseleave',function(){
          this.classList.remove('border_active')
      }) 
  }

  for (let i = 0; i < borderimg; i++){
      borderimg[i].addEventListener('mouseenter',function(){
          borderimg[i].classList.add('img_active')
      })
  }
  for (let i = 0; i < borderimg.length; i++){
      borderimg[i].addEventListener('mouseleave',function(){
          borderimg[i].classList.remove('img_active')
      }) 
  }

//----------- 第六部分--------------//
let contact_us = document.querySelector('.sixth_part .left')
let how_work = document.querySelector('.sixth_part .right')
contact_us.addEventListener('mouseenter',function(){
    this.classList.add('left_active')
})
contact_us.addEventListener('mouseleave',function(){
    this.classList.remove('left_active')
})
how_work.addEventListener('mouseenter',function(){
    this.classList.add('right_active')
})
how_work.addEventListener('mouseleave',function(){
    this.classList.remove('right_active')
})

//----------- 第九部分--------------//
const ninth_part = document.querySelector('.ninth_part')
const imageBox = document.querySelector('.imageBox')
imageBox.addEventListener('mousemove', function (e) {
    // 鼠标在浏览器可是窗口的x坐标
    // console.log(e.clientX);
    
    if (e.clientX <= window.innerWidth / 2) {
        imageBox.classList.add('imageBox_display')
        imageBox.classList.remove('imageBox_none')
    } else {
        imageBox.classList.add('imageBox_none')
        imageBox.classList.remove('imageBox_display')
    }
})
// 点击打开swiper
const ninth_part_img = document.querySelectorAll('.ninth_part .img')
const swiperbox = document.querySelector('.swiperbox')
for (let i = 0; i < ninth_part_img.length; i++){
    ninth_part_img[i].addEventListener('click',function(){
        swiperbox.classList.add('swiperbox_display')
    })
}

const view = document.querySelectorAll('.ninth_part .img .view')
console.log(view);
for (let i = 0; i < ninth_part_img.length; i++){
    ninth_part_img[i].addEventListener('moseenter',function(){
        // view[i].classList.add('view_display')
        view[i].style.opacity = '1'
    })
}

// 关闭swiper
const close = document.querySelector('.swiperbox .close_btn')
console.log(close);
close.addEventListener('click',function(){
        swiperbox.classList.remove('swiperbox_display')
})

// -------第九部分的swiper----//
const swiper2 = new Swiper('.swiperbox .swiper', {
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    }
  });

// 滑动栏选中图片后swiper显示对应图片
for (let i = 0; i < ninth_part_img.length; i++){
    ninth_part_img[i].addEventListener('click',function(){
        swiper2.slideTo(i, 0);
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

// -------------第11部分-----------//
const postbox = document.querySelectorAll('.eleventh_part .right .box')
const postimg = document.querySelectorAll('.eleventh_part .right .bg') 
console.log(postimg);

for (let i = 0; i < postbox.length; i++){
    postbox[i].addEventListener('mouseenter',function(){
        this.classList.add('box_active')
        postimg[i].classList.add('img_active')
    })
}
for (let i = 0; i < postbox.length; i++){
    postbox[i].addEventListener('mouseleave',function(){
        this.classList.remove('box_active')
        postimg[i].classList.remove('img_active')
    }) 
}





