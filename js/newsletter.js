class MyNewsLetter extends HTMLElement {
    connectedCallback() {
        var current5 = this.getAttribute('current5');
        this.innerHTML = `<div id="newsletter2">
        
        <h2 class="h2new">Ne manquez pas<br>les nouveautés!</h2>
        <div classe="sous-texte1">
            <p class="h3new">Abonnez-vous à la newsletter de Lilo pour recevoir<br> toutes les actualités.
            </p>
        </div>
        <div id="bloc2">
            <img id="imgnew2" src="./medias/img/newsletter-machine.svg">
            <h4 class="h4new">Inscrivez-vous ici!</h4>

            <form action="" class="fields">
                <input type="text" placeholder="Entrez votre adresse email" name="mail" required="">
                <button id="newb"><a href="merci-new.html"><img src="./medias/icons/newsletters-enveloppe.svg"
                            class="logoenveloppe" alt=""></a></button>
            </form>
        </div>
    </div>`
    }
}

customElements.define('main-newsletter', MyNewsLetter);

