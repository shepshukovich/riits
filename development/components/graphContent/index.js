export { default as GraphContent } from './GraphContent.html';
// export { default as graphContentStyle } from './graphContentStyle.scss';
const growNumber = ( el_pos ) => {
  let y_scroll_pos = window.pageYOffset;
  let element_position = el_pos - 950;
  let element_height = el_pos + 35
  if(y_scroll_pos > element_position && y_scroll_pos <  element_height) {
    let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

    $('.stats__number-1').animateNumber(
      {
        number: 1100,
        numberStep: comma_separator_number_step,
        'font-size': '40px',
        easing: 'easeInQuad'
      }
    );
    $('.stats__number-2').animateNumber(
      {
        number: 1690173,
        numberStep: comma_separator_number_step,
        'font-size': '40px',
        easing: 'easeInQuad'
      }
    );
    $('.stats__number-3').animateNumber(
      {
        number: 166243,
        numberStep: comma_separator_number_step,
        'font-size': '40px',
        easing: 'easeInQuad'
      }
    );
    $('.stats__number-4').animateNumber(
      {
        number: 55817,
        numberStep: comma_separator_number_step,
        'font-size': '40px',
        easing: 'easeInQuad'
      }
    );
  }
  };

$(window).on("load", function() {
  let element_position = $('.stats__number').offset().top;
  growNumber(element_position);

  $(window).on('scroll', function() {
    growNumber(element_position);
  });
});
