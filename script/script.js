

//----------------------------------[REFERENTE AO TESTE]--------------------------------------------
const Url = "https://webscraipinghttpsapi20221127133431.azurewebsites.net/WebScraping/search="

$("#pesq").click(function() {

    FazerPesquisa();
    InicializarElementos();
})
$("body").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#pesq").click();
    }
})

function FazerPesquisa(){

    var pesquisa = $("#searchBar").val();

    fetch(Url+pesquisa)
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#lista');

        data.map((item) => {
            const li = document.createElement('li');
            const title = document.createElement('h3');
            const url = document.createElement('a');

            title.innerHTML = item.titulo;
            li.appendChild(title);

            url.setAttribute('href', item.link);
            url.setAttribute('target', '_blank')
            url.innerHTML = item.link;
            li.appendChild(url);

            list.appendChild(li);
        })
    })
}
//----------------------------------------------------------------------------------



function InicializarElementos(){
    $("main").css("display", "block");
}