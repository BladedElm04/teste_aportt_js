const getDate = () => {

    let now = new Date();
    let date = now.toLocaleDateString();

    const spanDate = document.getElementById("date");
    spanDate.innerText = date;

    const weekDay = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    const spanDay = document.getElementById("day");
    spanDay.innerText = weekDay[now.getDay()];

    const pTimeOfDay = document.getElementById("greetings");

    if (now.getHours() < 12) {
        pTimeOfDay.innerText = "Bom dia"
    }
    if (now.getHours() >= 12 && now.getHours() < 18) {
        pTimeOfDay.innerText = "Boa tarde"
    }
    if (now.getHours() >= 18 && now.getHours() <= 24) {
        pTimeOfDay.innerText = "Boa noite"
    }


    setInterval(function time() {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        if (hour < 10) hour = "0" + hour;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        const spanHour = document.getElementById("hour");
        spanHour.innerText = `${hour}`;

        const spanMinutes = document.getElementById("minutes");
        spanMinutes.innerText = `: ${minutes}`;

        const spanSeconds = document.getElementById("seconds");
        spanSeconds.innerText = `: ${seconds}`;
    })

}
getDate()


const registered = document.getElementById("registered");

const text = document.createElement("p");

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/dados");
    const json = await res.json();

    const index = json.findIndex((e) => new Date(e.date).getDay() === new Date().getDay())

    console.log(index)

    if (json[index]) {
        text.innerText = "Ponto efetuado"
    } else {
        text.innerText = "Aguardando ponto"
    }

    registered.append(text);

    const info = document.getElementById("info");
    const p = document.createElement("p");
    p.innerText = "Não há registros"

    const bInfo = document.createElement("button");
    bInfo.innerText = "Acessar registros"

    if (json[index]) {
        info.append(bInfo);
        const a = document.createElement("a");
        a.href = "../pages/registersPage.html";

        a.append(bInfo);
        info.append(a)
    } else {
        info.append(p)
    }

}

getData()

// const date = localStorage.getItem("@date");


