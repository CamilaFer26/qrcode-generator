let qrcode = null;

function getChoices() {
    return {
        color: document.getElementById("qrColor").value,
        bgColor: document.getElementById("bgColor").value
    }
}

function generateQR() {
    const text = document.getElementById("text").value.trim();
    const qrContainer =document.getElementById("qrcode");
    const qrMessage = document.getElementById("qrMessage");
    const downloadButton = document.getElementById("downloadButton");
    
    const {color, bgColor} = getChoices();

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
            color: color
        },

        cornersSquareOptions: {
            color: "#111827"
        },

        cornersDotOptions: {
            color: "#111827"
        },

        backgroundOptions: {
            color: bgColor
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