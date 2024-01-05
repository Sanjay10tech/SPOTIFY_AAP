const start = function () {

    const tl = gsap.timeline()
    tl.to(".gsap-img", {
        opacity: 1
    })
    tl.to(".spot", {
        display: "block"
    })

    tl.from(".gsap-img", {
        y: -200,
        scale: 0,
        duration: 1,
        delay: 1,
        ease: "elastic.out(1,0.3)",
    })
    tl.from(".spot", {
        opacity: 0,
        y: -120,
        stagger: 0.2,
        duration: 0.2,
        ease: "ease.in"

    })
    tl.to(".gsap-img", {
        opacity: 0,
        rotate: 360,
        duration: 1
    })
    tl.to(".spot", {
        opacity: 0,
        stagger: 0.1,
        duration: 0.1
    })
    tl.to("#gsap", {
        opacity: 0
    })
};
const closePlaylist = document.querySelector(".close-content");
const openplaylist = document.querySelector(".show-playlist");
const pContent = document.querySelector(".playlist-content")
const playlistItem1 = document.querySelector(".playlist-container2")
const playlistItem2 = document.querySelector(".playlist-container")
const minusItem = document.querySelectorAll(".playlist-item-minus")
const plusItem = document.querySelectorAll(".playlist-item-two");
const plusItemUpper = document.querySelectorAll(".upper");
const showSidebar = document.querySelector(".sidebar-show")
const hideSidebar = document.querySelector(".close-sidebar")
const msg = document.querySelector(".msg-content")
const closeInfo = document.querySelector(".overlay-blur")
const showInfo = document.querySelector(".iconss")
const Info = document.querySelector(".my-info")
const openPodcast = document.querySelector(".open-podcast");
const closePodcast = document.querySelector(".close-podcast");
const podcastContainer = document.querySelector(".podcast-container");
const playBtn = document.getElementById("playMusic")
const pauseBtn = document.getElementById("pauseMusic")


document.addEventListener("DOMContentLoaded", start)

///ADD PLAYLIST FUNCTIONALITY
plusItem.forEach(function (p) {

    p.addEventListener("click", function () {
        if (playlistItem1.childElementCount === 1) {
            msg.textContent = "My Playlist"

        }
        playlistItem1.appendChild(p.closest(".playlist-item"))
        p.classList.add("minus-hidden")
        p.parentNode.childNodes[3].classList.remove("minus-hidden")
    })
})
minusItem.forEach(function (m) {
    m.addEventListener("click", function () {
        playlistItem2.appendChild(m.closest(".playlist-item"))
        m.parentNode.childNodes[3].classList.add("minus-hidden")
        m.parentNode.childNodes[5].classList.remove("minus-hidden")

    })
})
/////////////////////////////////
///PLAYLIST RELATED
openplaylist.addEventListener("click", function () {
    pContent.classList.remove("hide-content")
})
closePlaylist.addEventListener("click", function () {
    pContent.classList.add("hide-content")
})

showSidebar.addEventListener("click", function () {
    document.querySelector(".sidebar").style.top = "0"
})
hideSidebar.addEventListener("click", function () {
    document.querySelector(".sidebar").style.top = "-110vh"
})

/////INFO RELATED
showInfo.addEventListener("click", function () {
    Info.classList.remove("info-visible")
    closeInfo.classList.remove("info-visible")

})
closeInfo.addEventListener("click", function () {
    Info.classList.add("info-visible")
    closeInfo.classList.add("info-visible")
})

/////PODCAST RELATED
openPodcast.addEventListener("click", function () {
    podcastContainer.classList.remove("hide-podcast")
})

closePodcast.addEventListener("click", function () {
    podcastContainer.classList.add("hide-podcast");
})
////////////////////////////////////////////////////////
//Adding play pause functionality
pauseBtn.addEventListener("click", function () {
    playBtn.classList.remove("pauseHidden")
    pauseBtn.classList.add("pauseHidden")
    document.querySelectorAll(".myAudio").forEach((music) => {
        music.pause()
    })
})

let musicCard = document.querySelectorAll(".overlay")

musicCard.forEach(function (button, index) {
    button.addEventListener("click", function () {
        togglePlayPause(index);
    });
});

let audio = document.querySelectorAll(".myAudio");

function togglePlayPause(cardIndex) {
    audio.forEach(function (audio, index) {
        if (index === cardIndex) {
            if (audio.paused) {
                audio.play();

                playBtn.classList.add("pauseHidden")
                pauseBtn.classList.remove("pauseHidden")
            } else {
                audio.pause();
                playBtn.classList.remove("pauseHidden")
                pauseBtn.classList.add("pauseHidden")

            }
        } else {
            audio.pause();
        }
    });
}


let cardImg = document.querySelectorAll(".card_img");

musicCard.forEach(e => {
    e.addEventListener("click", function () {
        let playImg = document.querySelector(".play_img");
        let playTitle = document.querySelector(".play-title");
        let playArtist = document.querySelector(".play-artist");
        let playingImg = e.parentNode.childNodes[3].childNodes[1].getAttribute("src")
        let playingSong = e.parentNode.childNodes[5].childNodes[1].textContent;
        let playingArtists = e.parentNode.childNodes[5].childNodes[3].textContent
        // console.log(playingImg);
        playImg.setAttribute("src", playingImg)
        playTitle.textContent = playingSong;
        playArtist.textContent = playingArtists
    })
})
