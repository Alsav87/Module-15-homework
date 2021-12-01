function timePlace(){
    let plus = 3; 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/Moscow', false); 
xhr.send(); 
if (xhr.status != 200) {
    console.log( xhr.status + ': ' + xhr.statusText ); 
} else {
    let time = xhr.responseText; 
    let z = JSON.parse(time).utc_datetime; 
    let time1 = new Date(z).getTime(); 
    let timestampPlus = time1 + (plus * 60 * 60 * 1000); 
    let timePlus = new Date(timestampPlus); 
    let result = timePlus.toUTCString();  
    document.getElementById('navigation').innerHTML=result;
}}
function reload_interval(time){
	setTimeout(function(){
		location.reload();
	}, time);
}
    

