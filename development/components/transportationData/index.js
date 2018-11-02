export { default as TransportationData } from './TransportationData.html';
// export { default as transportationDataStyle } from './transportationDataStyle.scss';


$(window).on('load', function() {
  $('.blabla__real-time').on('click', function() {
    $('.blabla__real-time').rotate({
    angle:0,
    animateTo:360
    })
  })
});
