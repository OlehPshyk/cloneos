document.addEventListener('DOMContentLoaded', () => { 
  console.log("Start APP");

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



});
if (module.hot) {
  module.hot.accept();
}
