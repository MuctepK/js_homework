const indexLink = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code'
function renderData(data){
    console.log(data);
    const container = $('.container');
    for (let i =0;i < data.length;i++){
        console.log(data[i]);
        let countryDiv = $(document.createElement('div'));
        countryDiv.addClass('country');
        countryDiv.append(data[i].name);
        let countryLink = $(document.createElement("a"));
        countryLink.attr('href', "country.html?code=" + data[i].alpha3Code);
        countryLink.text('Читать дальше');
        countryDiv.append(countryLink);
        container.append(countryDiv);
    }
}
function parseData(event){
    let xhr = event.target;
    console.log(xhr.response);
    console.log(xhr.status);
    if (xhr.status == 200){
        data = JSON.parse(xhr.response);
        renderData(data);
    }
    else{
        console.log('error')
    }
}
function loadIndex(){
    let xhr = new XMLHttpRequest();
    xhr.onload = parseData;
    xhr.open('GET', indexLink);
    xhr.send();

}
function jQueryParseData(response, status){
    console.log(response);
    console.log(status);
    renderData(response);
}
function jQueryAjaxError(response, status){
    console.log(response);
    console.log(status);
    console.log('error');
}
function jQueryLoadIndex(){
    $.ajax({
        url: indexLink,
        method: 'GET',
        success: jQueryParseData,
        error: jQueryAjaxError
    })
}
$(document).ready(function () {
    jQueryLoadIndex();
})
