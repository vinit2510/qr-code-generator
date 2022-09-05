document.getElementById("btn").addEventListener("click", generate_qr)

function generate_qr() {
    const qr_code = document.getElementById("qr_div")
    const input_link = document.getElementById("link").value

    qr_code.innerHTML = ""

    new QRCode(qr_code, {
        text: input_link,
        width: 250,
        height: 250,
    })
}