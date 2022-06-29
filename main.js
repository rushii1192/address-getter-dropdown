
async function appendAddressData() {
    const response = await fetch('http://127.0.0.1:5500/data/city-data-min.json');
    const data = await response.json();
    
    var selected_country = $('#country').find(":selected").text();
    var selected_state = $('#state').find(":selected").text();
    
    for(var country_counter=0;country_counter<data.length;country_counter++){
        $("#country").append('<option value='+data[country_counter].id+'>'+data[country_counter].name+'</option>');
        if(data[country_counter].name == selected_country){
            for(var state_counter=0;state_counter<data[country_counter].states.length;state_counter++){
                $("#state").append('<option value='+data[country_counter].states[state_counter].id+'>'+data[country_counter].states[state_counter].name+'</option>');
                if(data[country_counter].states[state_counter].name==selected_state){
                    for(var city_counter=0;city_counter<data[country_counter].states[state_counter].cities.length;city_counter++){
                        $("#city").append('<option value='+data[country_counter].states[state_counter].cities[city_counter].id+'>'+data[country_counter].states[state_counter].cities[city_counter].name+'</option>');
                    }
                    break;
                }
            }
            break;
        } 
    }
}
$( document ).ready(function() {
    $("#country").change(appendAddressData);
    $("#state").change(appendAddressData);
    appendAddressData();
});

function showDetails(){
    var country = $('#country').find(":selected").text();
    var state = $('#state').find(":selected").text();
    var city = $('#city').find(":selected").text();

    alert(`
    Address Line 1:- ${$("#addressLine1").val()}\n
    Address Line 2:- ${$("#addressLine2").val()}\n
    Country:- ${country}\n
    State:- ${state} \n
    City:- ${city}
    `);
}