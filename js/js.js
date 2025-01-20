let jackpot = 0;
let current_reel = "";

function spinBtnClick() {
    jackpot = 0;
    let reelm2 = document.querySelector('.reels-m2');
    let reelm1 = document.querySelector('.reels-m1');
    let reel0 = document.querySelector('.reels-0');
    let reel1 = document.querySelector('.reels-1');

    let imgs = document.querySelectorAll('.reels-m2 .reel img')
    imgs.forEach((img) => {
        img.src = "./imgs/reel-" + (Math.floor(Math.random() * 3) + 1) + ".png"

        if (img.src == "./imgs/reel-1.png") {
            jackpot++;
        }

    });



    reelm2.classList.add('reels-m1');
    reelm1.classList.add('reels-0');
    reel0.classList.add('reels-1');
    reel1.classList.add('reels-m2');

    reelm2.classList.remove('reels-m2');
    reelm1.classList.remove('reels-m1');
    reel0.classList.remove('reels-0');
    reel1.classList.remove('reels-1');
}


function jackpot_trigger() {
    let reel0 = document.querySelector('.reels-0');
    let imgs = document.querySelectorAll('.reels-0 .reel img');
    jackpot = 0;

    imgs.forEach((img) => {
        if (img.src.includes("reel-1.png")) {
            jackpot++;
        }
    })

    if (jackpot >= 3) {
        document.querySelector("#jackpot_audio").play();
        imgs.forEach((img) => {
            if (img.src.includes("reel-1.png")) {
                console.log("ok");
                let video = document.createElement("video");
                video.loop = true;
                video.muted = true;
                video.autoplay = true;
                video.playsInline = true;

                let source = document.createElement("source");
                source.src = "https://vladpostu.github.io/cecchi-slot/imgs/video.mp4";
                source.type = "video/mp4";
                video.appendChild(source);

                console.log(source.src);

                img.replaceWith(video);
            }
        })

    }
}

function reset() {
    let videos = document.querySelectorAll('.reels-0 .reel video');
    console.log(videos);


    videos.forEach((video) => {
        // Extract the source element from the video
            // Create a new <img> element to replace the video
            let img = document.createElement("img");
            img.src = "./imgs/reel-1.png"; 
            img.alt = "Reel Image";

            video.replaceWith(img);
    });
}


let spinBtn = document.querySelector('.spin-btn');
spinBtn.addEventListener('click', () => {

    spinBtn.disabled = true;

    reset();

    spinBtnClick()
    var audio = document.getElementById("spin_sound");
    audio.play();

    setTimeout(() => spinBtnClick(), 350);
    setTimeout(() => spinBtnClick(), 700);
    setTimeout(() => spinBtnClick(), 1050);
    setTimeout(() => spinBtnClick(), 1400);
    setTimeout(() => spinBtnClick(), 1750);
    setTimeout(() => {
        spinBtnClick();
    }, 2100);

    setTimeout(() => {
        jackpot_trigger();
        spinBtn.disabled = false;
    }, 2500);

    

})






