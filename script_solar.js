function createStars (jumlah_bintang) {
    const container = document.querySelector("body");

    for (i=0; i<=jumlah_bintang; i++) {
        const star = document .createElement("div");
        star.className = "star";
        star.style.width = "0.1px";
        star.style.height = "0.1px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        container.appendChild(star);
    }
}

createStars(450);