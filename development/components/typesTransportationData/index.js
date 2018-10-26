export { default as TypesTransportationData } from './TypesTransportationData.html';
// export { default as typesTransportationDataStyle } from './typesTransportationDataStyle.scss';

$(window).on('load', (event) => {
  $('.toggle').on('click', function(event) {
    const target = $( event.target );
    const dropDownContent = target[0].nextElementSibling;

    $(target).toggleClass('arrow-down');
    $(dropDownContent).toggleClass("not-shown");
  });
});
