let map;
let marker
let data;
let boton = document.getElementById('buscar');

async function initMap() {
    let jsondata;
    try{
      const response = await fetch('styleMaps.json')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        jsondata = await response.json();
        console.log(data)
    }catch(error){
        console.log('error por inutil:' + error)
    }
    const myLatLng = { lat: 41.390205, lng: 2.154007 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: myLatLng,
        styles: jsondata

    });

    marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
        icon: "icono/mouse1.png"

    });
    const contentString = "Hola Juanma "
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}

window.initMap = initMap;



/*****************************************************************************************************/
boton.addEventListener('click', function(){
    buscar()
})


function buscar() {

    let geocoder = new google.maps.Geocoder();
    let address = document.getElementById("adreca").value
    geocoder.geocode({ 'address': address }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            document.getElementById("latitude").value = latitude;
            document.getElementById("longitude").value = longitude;
            console.log(latitude)
            console.log(longitude)
            
            let newLatLng = new google.maps.LatLng(latitude, longitude);
            marker.setPosition(newLatLng);

            let center = new google.maps.LatLng(latitude, longitude);
            map.setCenter(center);
            map.setZoom(14);
        }
        else {
            alert("l’adreça no s’ha trobat.")
        }
    });
}

function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(15);
            marker.setPosition(pos);
        });
    }
}

