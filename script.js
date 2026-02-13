const messageInput = document.getElementById("messageInput");
const nameInput = document.getElementById("nameInput");
const messagePreview = document.getElementById("messagePreview");
const namePreview = document.getElementById("namePreview");
const fontSelect = document.getElementById("fontSelect");
const stampSelect = document.getElementById("stampSelect");
const stampPreview = document.getElementById("stampPreview");

messageInput.addEventListener("input", () => {
    messagePreview.textContent = messageInput.value;
});

nameInput.addEventListener("input", () => {
    namePreview.textContent = nameInput.value;
});

fontSelect.addEventListener("change", () => {
    messagePreview.style.fontFamily = fontSelect.value;
});

stampSelect.addEventListener("change", () => {
    stampPreview.src = "assets/stamps/" + stampSelect.value;
});

function downloadPNG() {
    const postcard = document.getElementById("postcard");

    html2canvas(postcard).then(canvas => {
        const link = document.createElement("a");
        link.download = "postcard.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}