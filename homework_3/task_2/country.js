function getCountryLink(){
    let urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    return `https://restcountries.eu/rest/v2/alpha/${code}`;
}
function addToRightSide(right, rightText, type){
    switch (type)
    {   case "text":
            right.text(rightText);
            break;
        case "img":
            let img = $(document.createElement("img"));
            img.attr("src", rightText);
            right.append(img);
            break;
        case "array_of_links":
            for (let linkText of rightText){
                let link = $(document.createElement('a'));
                link.attr('href', "country.html?code=" + linkText);
                link.text(linkText+' ');
                right.append(link);
            }
    }
}
function addToTable(table, leftText, rightText,type="text"){
    let row = $(document.createElement('tr'));
    let left = $(document.createElement('td'));
    left.text(leftText);
    row.append(left);
    let right = $(document.createElement('td'));
    addToRightSide(right, rightText, type);
    row.append(right);
    table.append(row);
}
function renderData(data){
    console.log(data);
    const container = $('.container');
    let header = $(document.createElement('h1'));
    header.addClass('text-center');
    header.text(data.name);
    let table = $(document.createElement('table'));
    table.addClass('myTable');
    addToTable(table, "Country Code:", data.alpha3Code);
    addToTable(table, "Population:", data.population);
    addToTable(table, "Currency Code:", data.currencies[0].code);
    addToTable(table, "Flag: ", data.flag, "img");
    addToTable(table, "Borders:", data.borders, "array_of_links");
    container.append(header);
    container.append(table);

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
    let url = getCountryLink();
    $.ajax({
        url: url,
        method: 'GET',
        success: jQueryParseData,
        error: jQueryAjaxError
    })
}
$(document).ready(function () {
    jQueryLoadIndex();
})
