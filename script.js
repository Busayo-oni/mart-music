
// Get the elements
let activeScreen = 0;
const screens = document.querySelectorAll('.screen');
const skipBtn = document.querySelector('.skip');
const albumDiv = document.querySelector('.album');
const recentlyDiv = document.querySelector('.recently')
const screenTwoSection = document.getElementById('screenTwoSection');
const currentSection = document.getElementById('currentSection');
const albumImage = document.getElementById('albumImage');
const backIcon = document.querySelector('.back-icon');
let musicIndex = 0;



const songImage = document.getElementById('songImage');
const songTitle = document.getElementById('songTitle');
const singer = document.getElementById('singer');


/* // Song data (can be dynamically loaded)
 const songInfo = {
    title: "Owo oluwa",
    image: "assets/owo_oluwa.jpeg",  // Replace with your song's image path
    audio: "assets/P_Daniel__Owo_Oluwa.mp3"    // Replace with your song's audio file path
};

albumImage.addEventListener('click', function() {
    // Hide the image section and show the audio section
    screenTwoSection.style.display = 'none';
    currentSection.style.display = 'block';

    // Set the song details (title and image)
    songImage.src = songInfo.image;
    songTitle.innerText = songInfo.title;


     // Create the audio player with autoplay
     audioPlayer.innerHTML = `<audio controls autoplay>
                                 <source src="${songInfo.audio}" 
                                  type="audio/mpeg">
                               </audio>`;
 });*/

 //send Top Mix/Recently played song info to current screen
 albumImage.addEventListener("click", function() {
    songImage.src = "assets/owo_oluwa.jpeg";
    songTitle.innerText = "Owo oluwa";
    singer.innerText = "P_Daniel ft Emma omg";
});

cardImage1.addEventListener("click", function() {
    songImage.src = "assets/e_ti_tobi_to.jpeg";
    songTitle.innerText = "E ti tobi to";
    singer.innerText = "Emma omg";
});


cardImage2.addEventListener("click", function() {
    songImage.src = "assets/images.jpeg";
    songTitle.innerText = "I Give You Control";
    singer.innerText = "Emma omg";
});

cardImage3.addEventListener("click", function() {
    songImage.src = "assets/e_ti_tobi_to.jpeg";
    songTitle.innerText = "E ti tobi to";
    singer.innerText = "Emma omg";
});


cardImage4.addEventListener("click", function() {
    songImage.src = "assets/images.jpeg";
    songTitle.innerText = "I Give You Control";
    singer.innerText = "Emma omg";
});


// switch screen function
function handleActiveScreens() {
    screens.forEach((s, i) => {
        s.style.display = "none";

        if (i === activeScreen) {
            s.style.display = "block";
        }
    });
}

// skip button to switch from screen 0-1
handleActiveScreens ();
skipBtn.addEventListener('click', ()=> {
    activeScreen = 1;
    handleActiveScreens();
});

// albumImage to switch from screen 1- current playing
handleActiveScreens ();
albumImage.addEventListener('click', ()=> {
    activeScreen = 2;
    handleActiveScreens();
});





document.getElementById('albumImage').addEventListener('click', function() {
    // Create the audio player and insert it into the #audioPlayer div
    var audioContainer = document.getElementById('audioPlayer');
    
    // Check if an audio element already exists and remove it if it does
    audioContainer.innerHTML = '';

    // Create a new audio element with autoplay
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('controls', 'controls');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.innerHTML = '<source src="assets/P_Daniel__Owo_Oluwa.mp3" type="audio/mpeg">';
 
  
    // Append the audio element to the audioPlayer div
    audioContainer.appendChild(audioElement);
});



document.getElementById('cardImage1').addEventListener('click', function() {
    // Create the audio player and insert it into the #audioPlayer div
    var audioContainer = document.getElementById('audioPlayer');
    
    // Check if an audio element already exists and remove it if it does
    audioContainer.innerHTML = '';

    // Create a new audio element with autoplay
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('controls', 'controls');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.innerHTML = '<source src="assets/EmmaOMG_-_E_Ti_Tobi_To_CeeNaija.com_.mp3" type="audio/mpeg">';
 

    // Append the audio element to the audioPlayer div
    audioContainer.appendChild(audioElement);
});








document.getElementById('cardImage2').addEventListener('click', function() {
    // Create the audio player and insert it into the #audioPlayer div
    var audioContainer = document.getElementById('audioPlayer');
    
    // Check if an audio element already exists and remove it if it does
    audioContainer.innerHTML = '';

    // Create a new audio element with autoplay
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('controls', 'controls');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.innerHTML = '<source src="assets/EmmaOMG_-_I_Give_You_Control_CeeNaija.com_.mp3" type="audio/mpeg">';
 

    // Append the audio element to the audioPlayer div
    audioContainer.appendChild(audioElement);
});






document.getElementById('cardImage3').addEventListener('click', function() {
    // Create the audio player and insert it into the #audioPlayer div
    var audioContainer = document.getElementById('audioPlayer');
    
    // Check if an audio element already exists and remove it if it does
    audioContainer.innerHTML = '';

    // Create a new audio element with autoplay
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('controls', 'controls');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.innerHTML = '<source src="assets/EmmaOMG_-_I_Give_You_Control_CeeNaija.com_.mp3" type="audio/mpeg">';
 

    // Append the audio element to the audioPlayer div
    audioContainer.appendChild(audioElement);
});















document.getElementById('cardImage4').addEventListener('click', function() {
    // Create the audio player and insert it into the #audioPlayer div
    var audioContainer = document.getElementById('audioPlayer');
    
    // Check if an audio element already exists and remove it if it does
    audioContainer.innerHTML = '';

    // Create a new audio element with autoplay
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('controls', 'controls');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.innerHTML = '<source src="assets/EmmaOMG_-_I_Give_You_Control_CeeNaija.com_.mp3" type="audio/mpeg">';
 

    // Append the audio element to the audioPlayer div
    audioContainer.appendChild(audioElement);
});












// Top Mix card1 to switch from screen 1- current playing
handleActiveScreens ();
cardImage1.addEventListener('click', ()=> {
    activeScreen = 2;
    handleActiveScreens();
});

// Top Mix card2 to switch from screen 1- current playing
handleActiveScreens ();
cardImage2.addEventListener('click', ()=> {
    activeScreen = 2;
    handleActiveScreens();
});

// Recently played card1 to switch from screen 1- current playing
handleActiveScreens ();
cardImage3.addEventListener('click', ()=> {
    activeScreen = 2;
    handleActiveScreens();
});

// Recently played card2 to switch from screen 1- current playing
handleActiveScreens ();
cardImage4.addEventListener('click', ()=> {
    activeScreen = 2;
    handleActiveScreens();
});

handleActiveScreens ();
backIcon.addEventListener('click', ()=> {
    activeScreen = 1;
    handleActiveScreens();
});

 

















 
 
 // Event listener for the back icon click to return to the previous section
 function history_back() {
    window.history.back();
} 