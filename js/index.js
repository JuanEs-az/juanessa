//Code Form
let form = $(".ctn-pass")
let password = $(".password");
let confirmar = $(".confirmar");
//DOM
let main = $(".ctn-main")
let msg = $(".ctn-msg")
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
options = {
    "satsugem": function(){
        ttl_txt.text("Juanessa: Un año junto a mi rukistrukis")
        tarros.fadeIn();
        tarros.css("display", "flex")
    },
    "wasawasa": function(){
        ttl_txt.text("Juanessa: Explicação de que es esto")
        msg.fadeIn();
    }
}

//Triggers
confirmar.click(() => {
    let opcion = options[password.val()]
    if(!!opcion){
        opcionvalida();
        opcion();
    } 
})
