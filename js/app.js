window.onload = function() {
	//========================================================================================================================================================
	BildSlider()
	menu()
	//========================================================================================================================================================
	function pageTransitionLeave(){
		let animWrapper = document.querySelectorAll('ul.transition li')
		animWrapper.forEach((element,idx) => {
			element.style.cssText = `
				transition: all 0.5s ease ${idx * 0.1}s;
				transform: scaleY(1);
			`
		});
	}
	function pageTransitionEnter(){
		let animWrapper = document.querySelectorAll('ul.transition li')
		animWrapper.forEach((el) => {
			el.style.cssText = `
				transform: scaleY(1);
			`
		});
		animWrapper.forEach((element,idx) => {
			element.style.cssText = `
				transition: all 0.5s ease ${idx * 0.1}s;
				transform: scaleY(0);
			`
		});
	}
	function delayBarba(n){
		n = n || 2000;
		return new Promise(done =>{
			setTimeout(() =>{
				done();
			},n)
		})
	}

	barba.hooks.afterEnter(({next}) => {
		cursor()
		pageTransitionEnter(next.container)
		mainfunctions()
		BildSlider()
		headerbg(next.container)
		line(next.container)
		anim()
	});
	barba.hooks.leave(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	})
	barba.init({
		transitions: [
			{
				name: 'main-animation',
				to:{
					namespace: ['video','team','index','galery','muzic']
				},
				once(){
				},
				async leave(){
					const done = this.async();
					pageTransitionLeave();
					await delayBarba(1000);
					done();
				},
				enter(){
				}
			},{
				name: 'index',
				to:{
					namespace: ['index']
				},
				once({next}){
					sqr(next.container)
					letterAnim()
				},
				async leave(){
					const done = this.async();
					pageTransitionLeave();
					await delayBarba(1000);
					done();
				},
				enter({next}){
					sqr(next.container)
					letterAnim()
				}
			}
		]
	});
	//========================================================================================================================================================
	function mainfunctions(){
		//плавная прокрутка
		const anchors = document.querySelectorAll('a[href*="#"]')
	
		for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()
				
				const blockID = anchor.getAttribute('href').substr(1)
				
				document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
				})
			})
		}
		//плавная прокрутка
		//========================================================================================================================================================
		
		//========================================================================================================================================================
		let windowWifth = parseInt(window.innerWidth)
		if (windowWifth >= 767) {const parallax = document.querySelector('.parallax__body');
	
			if (parallax) {
				const content = document.querySelector('.parallax__container');
				const clouds = document.querySelector('.parallax__imageLine');
				const mountains = document.querySelector('.parallax__text');
				const human = document.querySelector('.parallax__image');
				const text = document.querySelector('.parallax__contur');
				const exetText = document.querySelector('.parallax__exit');
				const literaZ = document.querySelector('.parallax__z');
				const literaD = document.querySelector('.parallax__d');
				const literaE = document.querySelector('.parallax__e');
				const literaS = document.querySelector('.parallax__s');
				const literaI = document.querySelector('.parallax__i');
	
				// Коэффициенты 
				const forClouds = 10;
				const forMountains = 5;
				const forHuman = 40;
				const forText = 40;
				const forexetText = 10;
				const forexetliteraZ = 20;
				const forexetliteraD = 20;
				const forexetliteraE = 20;
				const forexetliteraS = 20;
				const forexetliteraI = 20;
	
				// Скорость анимации
				const speed = 0.05;
	
				// Объявление переменных
				let positionX = 0, positionY = 0;
				let coordXprocent = 0, coordYprocent = 0;
	
				function setMouseParallaxStyle() {
					const distX = coordXprocent - positionX;
					const distY = coordYprocent - positionY;
	
					positionX = positionX + (distX * speed);
					positionY = positionY + (distY * speed);
	
					// Передаем стили
					clouds.style.cssText = `transform: translate(${-50 - positionX / forClouds}%,${-50 - positionY / forClouds * 7}%);`;
					mountains.style.cssText = `transform: translate(${-50 - positionX / forMountains/2}%,${-50 - positionY / forMountains * 8}%);`;
					human.style.cssText = `transform: translate(${-50 - positionX / forHuman}%,${-50 - positionY / forHuman * 7}%);`;
					text.style.cssText = `transform: translate(${-50 - positionX / forText}%,${-50 - positionY / forText * 7}%);`;
					exetText.style.cssText = `transform: rotate(35deg) translate(${- positionX / forexetText}%,${- positionY / forexetText * 7}%);`;
					literaZ.style.cssText = `transform: rotate(-30deg) translate(${- positionX / forexetliteraZ * 2}%,${- positionY / forexetliteraZ * 7}%);`;
					literaD.style.cssText = `transform: rotate(-30deg) translate(${- positionX / forexetliteraD * 2}%,${- positionY / forexetliteraD * 7}%);`;
					literaE.style.cssText = `transform: rotate(-30deg) translate(${- positionX / forexetliteraE * 2}%,${- positionY / forexetliteraE * 7}%);`;
					literaS.style.cssText = `transform: rotate(-30deg) translate(${- positionX / forexetliteraS * 2}%,${- positionY / forexetliteraS * 7}%);`;
					literaI.style.cssText = `transform: rotate(-30deg) translate(${- positionX / forexetliteraI * 2}%,${- positionY / forexetliteraI * 7}%);`;
	
					requestAnimationFrame(setMouseParallaxStyle);
				}
				setMouseParallaxStyle();
	
				parallax.addEventListener("mousemove", function (e) {
					// Получение ширины и высоты блока
					const parallaxWidth = parallax.offsetWidth;
					const parallaxHeight = parallax.offsetHeight;
	
					// Ноль по середине
					const coordX = e.pageX - parallaxWidth / 2;
					const coordY = e.pageY - parallaxHeight / 2;
	
					// Получаем проценты
					coordXprocent = coordX / parallaxWidth * 100;
					coordYprocent = coordY / parallaxHeight * 100;
				});
	
			}
		}
	}
}
//========================================================================================================================================================
function cursorNone(){
	document.querySelectorAll('body *:not(script)').forEach(element => element.style.cssText = `cursor: none;`);
  }
  
  function cursorLink() {
	return document.querySelectorAll('a, button, .cursorLink')
  }
  
function cursor(){
	cursorNone()
	let cursor = document.querySelector('._cursor');
	let follower = document.querySelector('._follower');
	let posX = parseInt(localStorage.getItem("x")),
		posY = parseInt(localStorage.getItem("y")),
		mouseX = parseInt(localStorage.getItem("x")),
		mouseY = parseInt(localStorage.getItem("y"))
		
	let followerValue = follower.getAttribute('cursor-animation-property')
	if(followerValue){
	  followerValue = followerValue.split(',')
	  followerSpead = parseInt(followerValue[0])
	  cursorMargin = parseInt(followerValue[1])
	  clickDuration = parseInt(followerValue[2])
	}
	//-------------------
	setInterval(() => {
	  posX += (mouseX - posX) / followerSpead
	  posY += (mouseY - posY) / followerSpead
	  cursor.style.cssText = `top: ${mouseY}px; left: ${mouseX}px`
	  follower.style.cssText = `top: ${posY - cursorMargin}px; left: ${posX - cursorMargin}px`
	}, 0.01);
	//-------------------
	document.addEventListener('click', () => {
	  if(!follower.classList.contains('_press')){
		follower.classList.add('_press')
		cursor.classList.add('_press')
		setTimeout(() => {
		  follower.classList.remove('_press')
		  cursor.classList.remove('_press')
		}, clickDuration);
	  }
	})
	window.addEventListener('mousemove', e =>{
		mouseX = e.clientX
		mouseY = e.clientY
		localStorage.setItem("x", mouseX);
		localStorage.setItem("y", mouseY);
	})
  
	let allLink = cursorLink()
	allLink.forEach(element => {
	  element.addEventListener('mouseenter', () => {
		cursor.classList.add('_active')
		follower.classList.add('_active')
	  })
	  element.addEventListener('mouseleave', () => {
		cursor.classList.remove('_active')
		follower.classList.remove('_active')
	  })
	});
}
//========================================================================================================================================================
function anim(){
	const animItems = document.querySelectorAll('._anim-items');
	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 2;
	
				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
	
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} 
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
	
		setTimeout(() => {
			animOnScroll();
		}, 300);
	}
}
anim()
//========================================================================================================================================================
function headerbg(container){
	//цвет хедера
	const header =  container.querySelector('header');
	
	const callback = function(entries, observer) {
		if(entries[0].isIntersecting){
			header.classList.remove('_scroll');
		}else{
			header.classList.add('_scroll');
		}
	}
	const headerObs = new IntersectionObserver(callback);
	headerObs.observe(header)
	//цвет хедера
}
//========================================================================================================================================================
function line(container){
	setTimeout(() => {
		//полоса прокрутки 
		let line = container.querySelector('.line');
		let windowHeight = parseInt(window.innerHeight) //высота окна браузера
		let Height  = parseInt(document.documentElement.scrollHeight)-windowHeight //высота всей страницы
		setInterval(() => {
			let HeightTop  = parseInt(document.documentElement.scrollTop) //высота, на которую проскролили
	
			let widthLine = HeightTop / Height * 100 //ширина полосы прокрутки
	
			line.style.cssText = `
				Width:${widthLine}%;
			`
		}, 1);
	}, 1.5);
	//полоса прокртуки 
}
//========================================================================================================================================================
function letterAnim() {
	let title = document.querySelectorAll('._letter-animation');

	function AnimationLetterMove(e, item) {
	let animationDuration = 50
	let valueX = 0
	let valueY = -10
	let MeaningValue = 'px'
	let stopanim = false
	//--------------------------
	let atrValue = e.path[0].getAttribute('letter-animation-property')
	//--------------------------
	let animationItem = e.path[0]
	let animationItems = animationItem.querySelectorAll('span')
	//--------------------------
	if(atrValue){
		atrValue = atrValue.split(',')
		valueX = parseInt(atrValue[0])
		valueY = parseInt(atrValue[1])
		animationDuration = parseInt(atrValue[2])
		MeaningValue = atrValue[3]
		if(atrValue[4]){
		stopanim = true
		}
	}

	let timeHold = animationDuration * animationItems.length
	if(!stopanim){
		setTimeout(() => {
		item.classList.remove('_hold')
		},timeHold)
	}

	animationItems.forEach((item, idx) => {
		let element = item
		let duration = animationDuration

		setTimeout(() => {
		element.style.cssText = `
			transition: all ${duration}ms ease 0s;
			display: inline-block;
			transform: translate(${valueX}${MeaningValue}, ${valueY}${MeaningValue});
		`
		},duration * idx)
		setTimeout(() => {
		element.style.cssText = `
			transition: all ${duration}ms ease 0s;
			display: inline-block;
			transform: translate(0, 0);
		`
		},duration * idx + duration)
	});
	}
	function styleAnimationLetter(title) {
	title.forEach(element => {
		let elementChild = element.querySelectorAll('div')
		elementChild.forEach(elementCh => {
		elementCh.style.cssText = `display: inline-block;`
		});
		element.style.cssText = `display: inline-block; position: relative;`
		element.addEventListener('mouseenter', (e) => {
		if(!element.classList.contains('_hold')){
			AnimationLetterMove(e, element)
			element.classList.add('_hold')
		}
		})
	});
	}
	if (title) {
	title.forEach(item => {
			let txt = item.innerHTML;
			let txt_words = txt.replace('  ', ' ').split(' ');
			let new_title = '';
		txt_words.forEach((itemWord,index) => {
				let txt_word = txt_words[index];
				let len = txt_word.length;
				new_title = new_title + `<div class='_letter-animation__word'>`;
				for (let indexWord = 0; indexWord < len; indexWord++) {
					let it = txt_word.substr(indexWord, 1);
					it == ' ' ? it = '&nbsp;':
					new_title = new_title + `<span class='_letter-animation__letter'>` + it + '</span>';
				}
				item.innerHTML = new_title;
				new_title = new_title + '&nbsp;</div>';
		});
	});
	styleAnimationLetter(title)
	}
}
//========================================================================================================================================================
function sqr(container) {
	if(window.screen.width > 1023){
		const consert = container.querySelectorAll('.date-concerts__item')
		consert.forEach(element => {
			element.addEventListener('mouseenter', squareAll)
			element.addEventListener('mouseleave', squareAllRemove)
		});
		//----------------------------------------------------------------
		const concerts = container.querySelector('#concerts')
		const containerW = concerts.offsetWidth
		const containerH = concerts.offsetHeight
	
		const board = container.querySelector('#square-container');
		const colors = ['#142850', '#27496D', '#0C7B93', '#00A8CC'];
	
		const SQUARES_NUMBER = ~~(containerH / 20) * ~~(containerW / 20);
		
		let squareArr = []

		for (let i = 0; i < SQUARES_NUMBER; i++) {
			const square = document.createElement('div');
			square.classList.add('square');
			square.addEventListener('mouseenter', setColor);
			square.addEventListener('mouseleave', removeColor);
			board.append(square);
			squareArr.unshift(square);
		};
	
		function setColor({ target }) {
		const el = target;
		const color = colors[getRandom(colors.length)];
		el.style.cssText = `
		transition: all 0s ease 0s;
		`
		el.style.backgroundColor = color;
		el.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`;
		}
	
		function removeColor({ target }) {
		const el = target;
		el.style.cssText = `
		transition: all 2s ease 0s;
		`
		setTimeout(() => {
			el.style.cssText = `
			transition: all 0s ease 0s;
			`
		},1000)
		}
	
		function getRandom(num) {
		return Math.floor(Math.random() * num);
		}

		function squareAll({target}) {
			const itemW = target.offsetWidth
			const itemH = target.offsetHeight;
			const itemScrollTop = target.offsetTop;
			const itemScrollLeft = target.offsetLeft;
			squareArr.forEach((squareEl,idx) => {
				if(idx % 11 == 0 && squareEl.offsetTop > itemScrollTop - 20 && squareEl.offsetTop < itemScrollTop + itemH && squareEl.offsetLeft > itemScrollLeft - 20 && squareEl.offsetLeft < itemScrollLeft + itemW - 20){
					setColorNew(squareEl)
				}
			});
		}
		function setColorNew(el) {
			const color = colors[getRandom(colors.length)];
			el.style.cssText = `
			transition: all 2s ease 0s;
			`
			el.style.backgroundColor = color;
			el.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`;
		}
		function removeColorNew(el) {
			el.style.cssText = `
			transition: all 2s ease 0s;
			`
		}
		function squareAllRemove({target}) {
			const itemW = target.offsetWidth
			const itemH = target.offsetHeight;
			const itemScrollTop = target.offsetTop;
			const itemScrollLeft = target.offsetLeft;
			squareArr.forEach((squareEl,idx) => {
				if(idx % 11 == 0 && squareEl.offsetTop > itemScrollTop - 20 && squareEl.offsetTop < itemScrollTop + itemH && squareEl.offsetLeft > itemScrollLeft - 20 && squareEl.offsetLeft < itemScrollLeft + itemW - 20){
					removeColorNew(squareEl)
				}
			});
		}
	}
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//========================================================================================================================================================
//========================================================================================================================================================
//Menu
function menu() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBodyarray = document.querySelectorAll(".menu__body ul li");
	if (iconMenu != null) {
		let delay = 500;
		let logo = document.querySelector('.header__logo');
		let menuBody = document.querySelector(".menu__body");
		iconMenu.addEventListener("click", function (e) {
			if (unlock) {
				body_lock(delay);
				iconMenu.classList.toggle("_active");
				menuBody.classList.toggle("_active");
			}
		});
		menuBodyarray.forEach(element => {
			element.addEventListener("click", function (e) {
				iconMenu.classList.remove("_active");
				menuBody.classList.remove("_active");
				body_lock_remove(delay);
				setTimeout(() => {
					menu()
				},2000);
			});
		});
		logo.addEventListener("click", function (e) {
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			body_lock_remove(delay);
			setTimeout(() => {
				menu()
			},2000);
		});
	};
	function menu_close() {
		let iconMenu = document.querySelector(".icon-menu");
		let menuBody = document.querySelector(".menu__body");
		iconMenu.classList.remove("_active");
		menuBody.classList.remove("_active");
	}
	//=================
	//BodyLock
	function body_lock(delay) {
		let body = document.querySelector("body");
		if (body.classList.contains('_lock')) {
			body_lock_remove(delay);
		} else {
			body_lock_add(delay);
		}
	}
	function body_lock_remove(delay) {
		let body = document.querySelector("body");
		if (unlock) {
			let lock_padding = document.querySelectorAll("._lp");
			setTimeout(() => {
				for (let index = 0; index < lock_padding.length; index++) {
					const el = lock_padding[index];
					el.style.paddingRight = '0px';
				}
				body.style.paddingRight = '0px';
				body.classList.remove("_lock");
			}, delay);

			unlock = false;
			setTimeout(function () {
				unlock = true;
			}, delay);
		}
	}
	function body_lock_add(delay) {
		let body = document.querySelector("body");
		if (unlock) {
			let lock_padding = document.querySelectorAll("._lp");
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			}
			body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			body.classList.add("_lock");

			unlock = false;
			setTimeout(function () {
				unlock = true;
			}, delay);
		}
	}
	
}
//========================================================================================================================================================
function BildSlider(){
	//BildSlider
	let sliders = document.querySelectorAll('._swiper');
	if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-bild')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-bild');
	
				if (slider.classList.contains('_swiper_scroll')) {
					let sliderScroll = document.createElement('div');
					sliderScroll.classList.add('swiper-scrollbar');
					slider.appendChild(sliderScroll);
				}
			}
			if (slider.classList.contains('_gallery')) {
				//slider.data('lightGallery').destroy(true);
			}
		}
		sliders_bild_callback();
	}
	
	function sliders_bild_callback(params) { }
	
	let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: true,
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
	
	
	function sliders_bild_callback(params) { }
	
	if(document.querySelector('.slider-albums__body')){
		new Swiper('.slider-albums__body' , {
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 120,
			watchOverflow: true,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,
			autoplay:{
				delay: 2000,
				disableOnInteraction: false
			},
			on:{
				init(){
					this.el.addEventListener('mouseenter', () => {
					  this.autoplay.stop();
					});
			  
					this.el.addEventListener('mouseleave', () => {
					  this.autoplay.start();
					});
				}
			}
		})
	}
	if(document.querySelector('.slider-video__body')){
		new Swiper('.slider-video__body', {
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 100,
			watchOverflow: true,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,
			autoplay:{
				delay: 2700,
				disableOnInteraction: false
			},
			on:{
				init(){
					this.el.addEventListener('mouseenter', () => {
					  this.autoplay.stop();
					});
			  
					this.el.addEventListener('mouseleave', () => {
					  this.autoplay.start();
					});
				}
			}
		})
	}
	if(document.querySelector('.slider-galery__body')){
		new Swiper('.slider-galery__body' , {
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 100,
			watchOverflow: true,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,
			autoplay:{
				delay: 2700,
				disableOnInteraction: false
			},
			on:{
				init(){
					this.el.addEventListener('mouseenter', () => {
					  this.autoplay.stop();
					});
			  
					this.el.addEventListener('mouseleave', () => {
					  this.autoplay.start();
					});
				}
			}
		})
	}
}
