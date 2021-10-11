import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => { 
  // console.log("Start APP");

  // var AudioSynth = require('audiosynth');
  // var AudioContext = window.AudioContext || window.webkitAudioContext;
  // var context = new AudioContext();
  // var synth = new AudioSynth(context);  
  // synth.setOscWave(3);
  // const resolveCdbMedium = (event) => {    
  //   const g3Btn = event.target.closest('[data-id="g3-btn"]');
  //   if(g3Btn){
  //     synth.setDelayFeedback(0.2);     
  //     synth.setDelayTimeTempo(110, 0.25);
  //     synth.setFilterCutoff(0.2);     
  //     synth.setAmpReleaseTime(0.9);
  //     synth.setFilterEnvMod(0.8);
  //     synth.setFilterAttackTime(0.9);      
  //     synth.playNote(synth.noteToMIDI(g3Btn.dataset.note||'C', 3), 1.0, 1.0, 0); 
  //   }
  // }
  // let mediumCdb = document.querySelector('.js-cdb-medium');
  // mediumCdb&&mediumCdb.addEventListener('mousedown', resolveCdbMedium);  
  


  $('.js-notable-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 10000,
    respondTo: 'window',    
    initialSlide: 0,
    infinite: true,
    nextArrow: '.next-notable-slick-btn',
    prevArrow: '.previous-notable-slick-btn',
    slidesToShow: 1,
    slidesToScroll: 1,   
    mobileFirst: true,    
    responsive: [
      {
        breakpoint: 815,
        settings: {
          arrows: true, 
          slidesToShow: 2,  
        }
      },
      {
        breakpoint: 1199,
        settings: {      
          arrows: true,    
          slidesToShow: 3,  
        }
      }
    ] 
  })
  $('.js-notable-slider').css({"opacity": "1","transition": "opacity 0.5s ease"});

  $('.js-trending-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 10000,
    respondTo: 'window',    
    initialSlide: 0,
    infinite: true,
    nextArrow: '.next-trending-slick-btn',
    prevArrow: '.previous-trending-slick-btn',
    slidesToShow: 1,
    slidesToScroll: 1,   
    mobileFirst: true,    
    responsive: [
      {
        breakpoint: 815,
        settings: {
          arrows: true, 
          slidesToShow: 2,  
        }
      },
      {
        breakpoint: 1199,
        settings: {      
          arrows: true,    
          slidesToShow: 3,  
        }
      }
    ] 
  })
  $('.js-trending-slider').css({"opacity": "1","transition": "opacity 0.5s ease"});

});
if (module.hot) {
  module.hot.accept();
}
