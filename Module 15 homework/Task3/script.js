function screenSize(){
    document.getElementById('window.screen.width').innerHTML = screen.width;
    document.getElementById('window.screen.height').innerHTML = screen.height; 
}
const standing = document.querySelector('#standing');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('btn j-btn-test');

const error = () => {
    standing.textContent = 'Невозможно получить ваше местоположение';
}

const success =(position) =>{
    console.log = ('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    standing.textContent = `Широта: ${latitude} *, Долгота: ${longitude} *`;

    mapLink.href = `https://www.openstreetmap.org/#map=3/${latitude}/${longitude}`;
    mapLink.textContent= 'Ссылка на карту';
};
document.getElementById('geo').addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent ='';

    if (!navigator.geolocation) {
        standing.textContent = 'Geolocation не поддерживается вашим браузером';
    }else {
        standing.textContent = 'Определения местоположения...';
        navigator.geolocation.getCurrentPosition(success,error);

    }
    });
