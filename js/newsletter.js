class MyNewsLetter extends HTMLElement {
    connectedCallback() {
        var current5 = this.getAttribute('current5');
        this.innerHTML = `    <div class="newsletter">

        <div class="info">
        <div class="bloc1">
            <div class ="texte">
                <h2 class="h2new">Ne manquez pas<br>les nouveautés!</h2>
            </div>
            <div classe= "sous-texte1">
                <h3 class="h3new">Abonnez-vous à la newsletter de<br> Lilo pour recevoir toutes les <br>actualités</h3>
            </div>
        </div>

        <div class="bloc2">
            <h4 class="h4new">Inscrivez-vous ici!</h4>
           
            <form action="" class ="fields">
                <input type="text" placeholder="Entrez votre adresse email" name="mail" required="">
                 <button id="newb"><a href="merci-new.html"><img src="./medias/icons/newsletters-enveloppe.svg" class="logoenveloppe" alt=""></a></button>
            </form>
        </div>
    </div>
  
    <div class="imn">
        <div class="bloc3">
            <img id="imgnew" src="./medias/img/newsletter-machine.svg">
        </div>
    </div>
    </div>`
    }
}

customElements.define('main-newsletter', MyNewsLetter);

