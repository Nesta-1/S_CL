let play = document.getElementById('play')
let progressBar = document.getElementById('progressBar')
let audio = new Audio('Audio/1.mp4')     // we stored the audio file in audio var


// if u click on the play button, it should play audio and show the pause button and pause when we click on it
play.addEventListener('click', () => {
    if(audio.paused || audio.currentTime==0){
        audio.play()
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    } else{
        audio.pause();      // when paused, it should show the play btn
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
})

// to update progress bar as we play the song
