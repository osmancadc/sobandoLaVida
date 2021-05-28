const playIconContainer = document.getElementById('play-icon');
const audioPlayerContainer = document.getElementById('audio-player-container');
const seekSlider = document.getElementById('seek-slider');

$("#pause-icon").on('click',()=>{
    $("#audio").trigger("pause")
    $("#pause-icon").toggle(1)
    $("#play-icon").toggle(1)
})

$("#play-icon").on('click',()=>{
    $("#audio").trigger("play")
    $("#play-icon").toggle(1)
    $("#pause-icon").toggle(1)
    
})

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
    audio.currentTime=e.target.value
});

const showRangeProgress = (rangeInput) => {
    audioPlayerContainer.style.setProperty('--seek-before-width',  rangeInput.value / rangeInput.max * 100+'%');
}

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    $("#duration").html(calculateTime(audio.duration))
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
}

var advance = function(duration, element) {
    increment = 10/duration
    percent = Math.min(increment * element.currentTime * 10, 100);
    audioPlayerContainer.style.setProperty('--seek-before-width', `${percent}%`);
    $("#seek-slider").val(element.currentTime)
    startTimer(duration, element);
    $("#current-time").html(calculateTime(element.currentTime))
}
var startTimer = function(duration, element){ 
    if(percent < 100) {
      timer = setTimeout(function (){advance(duration, element)}, 100);
    }
}

audio.onloadedmetadata = function() {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
    advance(audio.duration,audio)
    
};
