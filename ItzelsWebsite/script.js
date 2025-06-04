document.addEventListener("DOMContentLoaded", () => {
    const screenshots = document.querySelectorAll(".Review-SC");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    const positions = [];

    screenshots.forEach((img) => {
        let overlapping = true;
        let top, left;
        const imgSize = 160; 

        while (overlapping) {
            top = Math.random() * 80 + 5;
            left = Math.random() * 80 + 5;
            overlapping = positions.some(pos => {
                return (
                    Math.abs(pos.top - top) < 15 &&
                    Math.abs(pos.left - left) < 15
                );
            });
        }

        positions.push({ top, left });
        img.style.top = `${top}%`;
        img.style.left = `${left}%`;
        img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.remove("hidden");
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
            modalImg.src = "";
        }
    });
});