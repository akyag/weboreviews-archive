$(document).foundation();

jQuery(document).ready(function(){
  jQuery('#pictures-demo').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager

  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  //captions: true, // Position: overlay, below, custom, false
  captionsSrc: 'title',
  // pager
  pager: false,

  // controls
  controls: false,
  autoHover: false,

  // transitions
  transition: 'kenburns', // fade, horizontal, kenburns, false
  kenZoom: 140,
  speed: 3000 // time the transition takes (ms)
  });
});
