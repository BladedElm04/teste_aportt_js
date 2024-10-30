const video = document.querySelector("video");

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
    })

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const canvas = document.querySelector("canvas");
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        let context = canvas.getContext("2d");
        context.drawImage(video, 0, 0);

        localStorage.setItem("@photo", canvas.toDataURL())
        localStorage.setItem("@date", new Date())

        const getIp = async () => {
            const res = await fetch("https://api.ipify.org?format=json");
            const json = await res.json();

            localStorage.setItem("@ip", json.ip)

        }
        getIp()

        
        const cam = document.getElementById("cam");
        const save = document.createElement("a");
    
        console.log(canvas)
    
        save.innerText = "Continuar"
        save.href = "../index.html"
    
    
        cam.append(save)
    })
    
    


})
