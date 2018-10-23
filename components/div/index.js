export { default as div } from "./div.html";
export { style } from "../../public/style.scss";

$(window).on("load", function() {

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

  nextSlideButton.setAttribute("style", `background: url(${nextPicSrc}); background-size: cover; `);
  prevSlideButton.setAttribute("style", `background: url(${prevPicSrc}); background-size: cover;`);




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

    nextSlideButton.setAttribute("style", `background: url(${nextPicSrc}); background-size: cover; `);
    prevSlideButton.setAttribute("style", `background: url(${prevPicSrc}); background-size: cover;`);
  })
})
