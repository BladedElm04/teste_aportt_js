
let map

navigator.geolocation.watchPosition((position) => {
    
    if(map === undefined){
        map = L.map("map").setView([position.coords.latitude, position.coords.longitude], 15)
    } else {
        map.remove();
        map = L.map("map").setView([position.coords.latitude, position.coords.longitude], 15)
    } 
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let marker = L.marker([position.coords.latitude, position.coords.longitude], {
        draggable: true,
        
    }).addTo(map);

    console.log(marker.setLatLng(marker.getLatLng()))
    

    localStorage.setItem("@locationLat", `${position.coords.latitude}`)
    localStorage.setItem("@locationLong", `${position.coords.longitude}`)


});
