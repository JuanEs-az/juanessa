//Code Form
let form = $(".ctn-pass")
let password = $(".password");
let confirmar = $(".confirmar");

//DOM
let main = $(".ctn-main")
let msg = $(".ctn-msgs")
let tarros = $(".ctn-tarros")
let ttl_txt =  $(".mn-title-ctn")
//Funciones
let opcionvalida = () => {
    main.find("> *").fadeOut();
    $('link[rel="icon"]').attr("href","./img/heart.ico")
    $("title").text("Juanessa")
    $(".fk-title").hide()
    $(".mn-title").fadeIn()
}
options = [
    function(){
        ttl_txt.text("Juanessa: Explicação de que es esto")
        msg.fadeIn();
    },
    function(){
        ttl_txt.text("Juanessa: Un año junto a mi rukistrukis")
        tarros.fadeIn();
        $(".ctn-papelitos").fadeIn();
        tarros.css("display", "flex")
    },
]

//Server
const app = new Server("https://juanessa-crud.onrender.com");
//Cargando
let cargandoInterval = setInterval(() => {
    if(app.passReady()){
        $(".cargando").hide();
        password.fadeIn();
        confirmar.fadeIn();
        clearInterval(cargandoInterval);
    }
}, 500)
let papelitos;
let papelitosMostrar;
app.getPapelitos().then((result) => {
    papelitos = result.papelitos;
    papelitosMostrar = [...papelitos]
})
//Triggers
confirmar.click(() => {
    const indexPw = app.comparePasswords(password.val())
    if(indexPw == -1) return

    opcionvalida();
    options[indexPw]();
    
})
