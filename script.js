window.onload = function () {
    const title = "Selamat Ulang Tahun Dhea Rosigianti";
    let i = 0;
    const speed = 100;
    const h1 = document.getElementById("title");

    function typing() {
        if (i < title.length) {
            h1.innerHTML += title.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
};

function playMusic() {
    const music = document.getElementById("music");
    music.play();
    alert("Selamat Ulang Tahun 💕🥰");
}