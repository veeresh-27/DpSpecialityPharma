

const btnHamburger = document.querySelector('#btnhmb');
let btnHamburgerLinks = document.querySelectorAll('.btn-hmb-links');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


const openClose = () => {
    if(btnHamburger.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        btnHamburger.classList.remove('open');    
        fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        });
        
    }
      else { // Open Hamburger Menu
        body.classList.add('noscroll');
        btnHamburger.classList.add('open');
        fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
        });
    
        }
        
}

btnHamburger.addEventListener('click', openClose);

for (i of btnHamburgerLinks) {
    i.addEventListener('click', openClose);
}

gsap.registerPlugin(ScrollTrigger);

const headerTimeline = gsap.timeline({
    defaults: {duration: 0.4},
    scrollTrigger: {
        trigger: ".hero",
        start: "top",
        // markers: true,
        toggleActions: "restart none none reset",
    },
});
headerTimeline.to(".header", {
    backgroundColor: "white",
    boxShadow:"0 0px 10px #5DA3FA",
})
    .to(".white-curve", {
        visibility: "hidden",
    }, 0)
    .to(".header__menu span",{
        backgroundColor: "#383CC1"
    }, 0)
    .to(".header__links a", {
        color: "#383CC1"
    }, 0);

// const heroTimeline = gsap.timeline({
//     defaults: {duration: 0.4},
//     scrollTrigger: {
//         trigger: ".hero",
//         start: "top",
//         // markers: true,
//         toggleActions: "restart none none reset",
//     },
// });

const aboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "bottom 80%",
        // markers: true,
        ease: Power1.easeInOut,
        // toggleActions: "play none none reset",
    },
});
aboutTimeline.from(".about", {
    duration: 1.3,
    // xPercent: "-100",
    opacity: 0,
});

const supplierTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "bottom 60%",
        // markers: true,
        ease: Power1.easeInOut,
        // toggleActions: "play none none reset",
    },
});
supplierTimeline.from(".sup", {
    duration: 1.3,
    // xPercent: "100",
    opacity: 0,
});

const awardsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".awards",
        start: "top 90%",
        // markers: true,
        ease: Power1.easeInOut,
        // toggleActions: "play none none reset",
    },
});
awardsTimeline.from(".awards", {
    duration: 1.3,
    // xPercent: "100",
    opacity: 0,
});


const contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".awards",
        start: "bottom 90%",
        // markers: true,
        ease: Power1.easeInOut,
        // toggleActions: "play none none reset",
    },
});
contactTimeline.from(".contact", {
    duration: 1.3,
    // yPercent: "100",
    opacity: 0,
});






const countExp = document.querySelector('.exp');
const countCustomers = document.querySelector('.customers');
const countSupplers = document.querySelector('.supplers');
const countAwards = document.querySelector('.award');


ScrollTrigger.create({
    trigger: ".about__feature-box",
    start: "top 90%",
    delay: 5,
        // markers: true,
    onEnter: () => {
        let countE = 0;
        let countC = 0;
        let countS = 0;
        let countA = 0;


        setInterval(() => {
            if (countE < 15) {
                countE++;
                countExp.innerHTML = countE + "+";
            }
        }, 100);

        setInterval(() => {
            if (countC < 5000) {
                countC += 20;
                countCustomers.innerHTML = countC + "+ Customers";
            }
        }, 6);

        setInterval(() => {
            if (countS < 70) {
                countS ++;
                countSupplers.innerHTML = countS + "+ Suppliers";
            }
        }, 18);

        setInterval(() => {
            if (countA < 20) {
                countA ++;
                countAwards.innerHTML = countA + "+ Awards" ;
            }
        }, 70);
    },
    toggleActions: "restart none none reset",
});





    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotsNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNav.children);
    
    prevButton.classList.remove('is-hidden');
    var pIndex=0;
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + "px";
    }
    
    slides.forEach(setSlidePosition);
    
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
        
    }
    
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }
    
    prevButton.addEventListener("click", e => {
        if(pIndex == 0){
            for(let i=0;i<4;i++){
                nextButton.click();
            } 
        }
        else{
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector(".current-slide");
            const prevDot = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);
            
            pIndex=prevIndex;
            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot); 
        }
        
    
    })
    
    nextButton.addEventListener("click", e => {
        
        if(pIndex+1 == slides.length){
            for(let i=0;i<4;i++){
                prevButton.click();
            } 
        }
        else{
            
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector(".current-slide");
            const nextDot = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide);
            
            pIndex=nextIndex;
            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
        }
        
    })
    
    dotsNav.addEventListener("click", e => {
        const targetDot = e.target.closest("button");
    
        if (!targetDot) return;
    
        const currentSlide = track.querySelector(".current-slide");
        const currentDot = dotsNav.querySelector(".current-slide");
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
    
        moveToSlide(track, currentSlide, targetSlide);
    
        updateDots(currentDot, targetDot);
    
    })
    
    function slideShow() {
        nextButton.click();
    }
setInterval(slideShow, 4000);
    



var dayOfWeek = (new Date).getDay();
var hours = ["Closed",          // Sunday
             "Open today 10:00 am – 07:00 pm",   // Monday
             "Open today 10:00 am – 07:00 pm",   // Tuesday
             "Open today 10:00 am – 07:00 pm",   // Wednesday
             "Open today 10:00 am – 07:00 pm",   // Thursday
             "Open today 10:00 am – 07:00 pm",   // Friday
             "Open today 10:00 am – 07:00 pm"];  // Saturday
var todaysHours = hours[dayOfWeek];
document.getElementById("hours").innerHTML = todaysHours;