const getData = async () => {
    const res = await fetch("http://localhost:3000/api/dados");
    const json = await res.json();

    const divList = document.getElementById("list")
    const ul = document.createElement("ul");
    json.forEach(element => {
        console.log(element)
        const li = document.createElement("li");
        li.innerHTML = `Data:${element.date}, IP:${element.ip}, Lat:${element.latitude}, Long: ${element.longitude}, `
        ul.append(li)
    });
    
    divList.append(ul)

    console.log(json)
}

getData()
