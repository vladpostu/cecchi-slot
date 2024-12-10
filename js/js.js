function spinBtnClick() {
    let reelm2 = document.querySelector('.reels-m2');
    let reelm1 = document.querySelector('.reels-m1');
    let reel0 = document.querySelector('.reels-0');
    let reel1 = document.querySelector('.reels-1');

    let imgs = document.querySelectorAll('.reels-m2 .reel img')
    imgs.forEach((img) => {
        img.src = "./imgs/reel-" + (Math.floor(Math.random() * 4) + 1) + ".png"
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

let spinBtn = document.querySelector('.spin-btn');
spinBtn.addEventListener('click', () => {
    spinBtnClick()
})



