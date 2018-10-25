export { default as div } from "./div.html";
export { style } from "../../public/style.scss";

$(window).on("load", function() {

  $(".content-type").on('click', function() {
    $("#content-type-content").toggleClass("not-shown");
    $("#content-type__arrow").toggleClass("arrow-down");
  });

  $(".topics").on('click', function() {
    $("#topics-content").toggleClass("not-shown");
    $("#topics__arrow").toggleClass("arrow-down");
  });

  $(".tags").on('click', function() {
    $("#tags-content").toggleClass("not-shown");
    $("#tags__arrow").toggleClass("arrow-down");
  });

  $(".format").on('click', function() {
    $("#format-content").toggleClass("not-shown");
    $("#format__arrow").toggleClass("arrow-down");
  });

  $(".author").on('click', function() {
    $("#author-content").toggleClass("not-shown");
    $("#author__arrow").toggleClass("arrow-down");
  });

  $(".license").on('click', function() {
    $("#license-content").toggleClass("not-shown");
    $("#license__arrow").toggleClass("arrow-down");
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
