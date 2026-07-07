document.addEventListener("DOMContentLoaded", function(){

    console.log("Site RevisaCar carregado com sucesso!");

    const cards = document.querySelectorAll(".card, .info-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });
    });

    const whatsapp = document.querySelector(".whatsapp");

    if(whatsapp){
        whatsapp.addEventListener("click", function(){
            console.log("Cliente direcionado para o WhatsApp");
        });
    }

});
