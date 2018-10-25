export { default as div } from "./div.html";
export { style } from "../../public/style.scss";

const toggleDropdown = function() {
  alert(this);
}

$(window).on("load", function() {

  $('.toggle').on('click', function(event) {
    const target = $( event.target );
    const dropDownContent = target[0].nextElementSibling;

    $(target).toggleClass('arrow-down');
    $(dropDownContent).toggleClass("not-shown");
  });

  const currentlyActive = document.getElementsByClassName("active")[0];
  const rgxp = /\d+/;
  const n = currentlyActive.classList[0].match(rgxp);
  let nextSlide = document.getElementsByClassName('ism-slide-' + (+n[0] + 1) );
  let prevSlide = document.getElementsByClassName('ism-slide-' + (+n[0] - 1) );
    if( nextSlide.length == 0 ){
      nextSlide = document.getElementsByClassName('ism-slide-0');
    }
    if( prevSlide.length == 0 ){
      let a = document.getElementsByClassName('ism-slides')[0];

      const m = a.getElementsByTagName('li').length;
      prevSlide = document.getElementsByClassName('ism-slide-' + (m - 1) );
    }

  let nextImg = nextSlide[0].getElementsByTagName('img');
  let prevImg = prevSlide[0].getElementsByTagName('img');

  const nextPicSrc = nextImg[0].getAttribute('src');
  const prevPicSrc = prevImg[0].getAttribute('src');

  const nextSlideButton = document.getElementsByClassName('ism-button-next')[0];
  const prevSlideButton = document.getElementsByClassName('ism-button-prev')[0];

  nextSlideButton.setAttribute("style", `background: url(${nextPicSrc}); background-size: cover; align-content: center; display: flex; flex-flow: column nowrap; justify-content: center; font-weight: bold; text-shadow: 2px 2px black;`);
  prevSlideButton.setAttribute("style", `background: url(${prevPicSrc}); background-size: cover; align-content: center; display: flex; flex-flow: column nowrap; justify-content: center; font-weight: bold; text-shadow: 2px 2px black;`);

  nextSlideButton.innerHTML = "NEXT";
  prevSlideButton.innerHTML = "PREVIOUS";



  $(".ism-button-next, .ism-button-prev, .ism-radio-label").on("click", function(){

    const currentlyActive = document.getElementsByClassName("active")[0];
    const rgxp = /\d+/;
    const n = currentlyActive.classList[0].match(rgxp);

    let nextSlide = document.getElementsByClassName('ism-slide-' + (+n[0] + 1) );
    let prevSlide = document.getElementsByClassName('ism-slide-' + (+n[0] - 1) );

      if( nextSlide.length == 0 ){
        nextSlide = document.getElementsByClassName('ism-slide-0');
      }
      if( prevSlide.length == 0 ){
        let a = document.getElementsByClassName('ism-slides')[0];

        const m = a.getElementsByTagName('li').length;
        prevSlide = document.getElementsByClassName('ism-slide-' + (m - 1) );
      }

    let nextImg = nextSlide[0].getElementsByTagName('img');
    let prevImg = prevSlide[0].getElementsByTagName('img');

    const nextPicSrc = nextImg[0].getAttribute('src');
    const prevPicSrc = prevImg[0].getAttribute('src');

    const nextSlideButton = document.getElementsByClassName('ism-button-next')[0];
    const prevSlideButton = document.getElementsByClassName('ism-button-prev')[0];

    nextSlideButton.setAttribute("style", `background: url(${nextPicSrc}); background-size: cover; align-content: center; display: flex; flex-flow: column nowrap; justify-content: center; font-weight: bold; text-shadow: 2px 2px black;`);
    prevSlideButton.setAttribute("style", `background: url(${prevPicSrc}); background-size: cover; align-content: center; display: flex; flex-flow: column nowrap; justify-content: center; font-weight: bold; text-shadow: 2px 2px black;`);

  })


})
