function appendCity(item){
    $("#city").append('<option value='+item.id+'>'+item.name+'</option>');
}
function appendState(item){
    $("#country").append('<option value='+item.id+'>'+item.name+'</option>');
}
function appendCountry(item){
    $("#country").append('<option value='+item.id+'>'+item.name+'</option>');
}
async function appendAddressData() {
    const response = await fetch('http://127.0.0.1:5500/data/city-data-min.json');
    const data = await response.json();
    // for(var city=0;city<data.cities.length;city++){
    //     $("#service_area").append('<option>'+city+'</option>')
    // }
    data.forEach(appendCountry);
    data[1].states.forEach(appendState);
    data[0].states[0].cities.forEach(appendCity);
}
$( document ).ready(function() {
    $("#country").change(appendAddressData);
    $("#state").change(appendAddressData);
    appendAddressData();
});