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
        
        
        const getIp = async () => {
            const res = await fetch("https://api.ipify.org?format=json");
            const json = await res.json();

            localStorage.setItem("@ip", json.ip)

        }
        getIp()

        button.remove()

        const cam = document.getElementById("cam");
        const save = document.createElement("a");

        const deletePhoto = document.createElement("button");
        deletePhoto.addEventListener("click", (e) => {
            
            
            location.reload()
            
            localStorage.removeItem("@photo")
        })
        
        deletePhoto.innerText = "Deletar"
        
        save.innerText = "Salvar"
        save.href = "../index.html"
        save.classList.add("continue")
        
        localStorage.setItem("@date", new Date())
        
        cam.append(deletePhoto, save)
    })




})
