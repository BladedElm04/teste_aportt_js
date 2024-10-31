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
        const dataUrl = canvas.toDataURL("image/png")
        console.log(dataUrl)

        localStorage.setItem("@photo", dataUrl)


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
        deletePhoto.classList.add("photo_buttons")

        save.innerText = "Salvar";
        save.href = "../index.html";
        save.classList.add("continue");
        save.classList.add("photo_buttons")

        localStorage.setItem("@date", new Date())

        save.addEventListener("click", () => {
            const ip = localStorage.getItem("@ip");
            const date = localStorage.getItem("@date");
            const latitude = localStorage.getItem("@locationLat");
            const longitude = localStorage.getItem("@locationLong");
            const photo = localStorage.getItem("@photo");

            const data = { ip, date, latitude, longitude, photo }

            const registerData = (data) => {
                fetch("http://localhost:3000/api/dados", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
            }

            registerData(data);

            localStorage.clear()


        })

        cam.append(deletePhoto, save)
    })




})
