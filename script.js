let qrcode = null;

function generateQR() {
    const text = document.getElementById("text").value.trim();
    const qrContainer =document.getElementById("qrcode");
    const qrMessage = document.getElementById("qrMessage");
    const downloadButton = document.getElementById("downloadButton");

    if (!text) {
        alert("Por favor, insira um texto ou URL!");
        return;
    }

    qrContainer.innerHTML = "";
    qrcode = new QRCodeStyling({
        width: 280,
        height: 280,
        type: "canvas",
        data: text,
        margin: 10,

        dotsOptions: {
            color: "#111827",
        },

        cornersSquareOptions: {
            color: "#111827"
        },

        cornersDotOptions: {
            color: "#111827"
        },

        backgroundOptions: {
            color: "#ffffff"
        }
    });
    qrcode.append(qrContainer);
    qrMessage.style.display = "none";

    downloadButton.disabled = false;
}


function downloadQR() {
    if (!qrcode) {
        return;
    }

    qrcode.download({
        name: "qrcode",
        extension: "png"
    });
}

document.getElementById("text").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            generateQR();
        }
});