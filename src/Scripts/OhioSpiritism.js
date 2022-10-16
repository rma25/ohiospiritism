// Opera 8.0+ Test
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


//Takes the user back to the top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Show - Hide Button Functionality
var btnTopContainerEle = document.getElementById("btnTopContainer");

var displayBtnOnScroll = function () {
    var y = isEdge ? document.documentElement.scrollTop : window.scrollY;

    if (y >= 800) {
        btnTopContainerEle.className = "container btnShow"
    } else {
        btnTopContainerEle.className = "container btnHide"
    }
};

window.addEventListener("scroll", displayBtnOnScroll);

//Change the Carousel Image based on Screen size
//For home default page
var images = getCarouselSlideImage();

var firstSlideEle = document.getElementById("firstSlide");

if (firstSlideEle != null && firstSlideEle != undefined) {
    firstSlideEle.src = images[0];
}

var secondSlideEle = document.getElementById("secondSlide");

if (secondSlideEle != null && secondSlideEle != undefined) {
    secondSlideEle.src = images[1];
}

var thirdSlideEle = document.getElementById("thirdSlide");

if (thirdSlideEle != null && thirdSlideEle != undefined) {
    thirdSlideEle.src = images[2];
}

//For Foreign pages
var foreignImages = getCarouselSlideImage();

var firstSlideForeignEle = document.getElementById("firstSlideForeign");

if (firstSlideForeignEle != null && firstSlideForeignEle != undefined) {
    firstSlideForeignEle.src = foreignImages[0];
}

var secondSlideForeignEle = document.getElementById("secondSlideForeign");

if (secondSlideForeignEle != null && secondSlideForeignEle != undefined) {
    secondSlideForeignEle.src = foreignImages[1];
}

var thirdSlideForeignEle = document.getElementById("thirdSlideForeign");

if (thirdSlideForeignEle != null && thirdSlideForeignEle != undefined) {
    thirdSlideForeignEle.src = foreignImages[2];
}

function IsItMobile() {
    var isMobile = false;

    var x = window.innerWidth || document.body.clientWidth || window.screen.width;
    var y = window.innerHeight || document.body.clientHeight || window.screen.height;

    isMobile = (x <= 414 && y <= 823);

    return isMobile;
}

function getCarouselSlideImage(isForeign) {
    var imgPath1 = "./Images/Unsplash/carousel-slide-4.jpg";
    var imgPath2 = "./Images/Unsplash/carousel-slide-7.jpg";
    var imgPath3 = "./Images/Unsplash/carousel-slide-11.jpg";

    //Mobile
    if (IsItMobile()) {
        imgPath1 = "./Images/Unsplash/Mobile/mobile-carousel-slide-4_414x823.jpg";
        imgPath2 = "./Images/Unsplash/Mobile/mobile-carousel-slide-7_414x823.jpg";
        imgPath3 = "./Images/Unsplash/Mobile/mobile-carousel-slide-11_414x823.jpg";
    }
    //Default
    else {
        imgPath1 = "./Images/Unsplash/carousel-slide-4.jpg";
        imgPath2 = "./Images/Unsplash/carousel-slide-7.jpg";
        imgPath3 = "./Images/Unsplash/carousel-slide-11.jpg";
    }

    if (isForeign != null && isForeign != undefined && isForeign) {
        imgPath1 = "." + imgPath1;
        imgPath2 = "." + imgPath2;
        imgPath3 = "." + imgPath3;
    }

    return [imgPath1, imgPath2, imgPath3];
};