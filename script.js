//import songs from './users/nencypatel/Spotify_clone_website/';
console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from( document.getElementsByClassName('songItem'));
let songs = [
    {songName:"let-me-love-you", filePath: "songs/1.mp3" , coverPath: "cover/1.jpg"},
    {songName:"shape-of-you", filePath: "songs/2.mp3" , coverPath: "cover/2.jpg"},
    {songName:"calm-down", filePath: "songs/3.mp3" , coverPath: "cover/3.jpg"},
    {songName:"unstoppable", filePath: "songs/4.mp3" , coverPath: "cover/4.jpg"},
    {songName:"thousand-years", filePath: "songs/5.mp3" , coverPath: "cover/5.jpg"},
    {songName:"salam-e-isq", filePath: "songs/1.mp3" , coverPath: "cover/1.jpg"},
    {songName:"na--jana", filePath: "songs/2.mp3" , coverPath: "cover/2.jpg"}

]

songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//audioElement.play();

//handle play-pause click

masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime <= 0){
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.opacity = 1;
   }else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.opacity = 0;
   }
})

//Listen to the events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
 //update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 myProgressBar.value = progress;   
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
         makeAllPlays();
         masterSongName.innerText = songs[songIndex].songName;
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `songs/${songIndex}.mp3`;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=7){
    songIndex = 0;
   }else{
    songIndex += 1;
   }
   audioElement.src = `songs/${songIndex}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex = 0;
    }else{
     songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 
 })



