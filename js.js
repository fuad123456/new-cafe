const popup= document.getElementById('popup')
const popupBtn= document.getElementById('popupBtn')
// popupBtn.addEventListener('click',function(){
// 	popup.classList.add('open')
// })
// document.getElementById('popup-close-btn').addEventListener('click',function(){popup.classList.remove('open')})
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    slidesPerView: 6,
  	spaceBetween: 0,
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 3,
		  spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 4,
		  spaceBetween: 20
		},
		576: {
		  slidesPerView: 5,
		  spaceBetween: 20
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 4,
		  spaceBetween: 20
		},
		950: {
		  slidesPerView: 6,
		  spaceBetween: 20
		}
	  }
  
	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
  });
  const swiper1 = document.querySelector('.swiper').swiper;

  let btnsMenuPrim=document.querySelectorAll('.btn-menu-prim')
  console.log(btnsMenuPrim);
  function remove(){
	btnsMenuPrim.forEach(btn=>{
		btn.classList.remove('filter-active')

	})
  }
  btnsMenuPrim.forEach((btn)=>{
	btn.addEventListener('click',function(e){
		e.preventDefault();
		remove()
		this.classList.add('filter-active')
		console.log(this);
	})
  })