class MySection3 extends HTMLElement {
    connectedCallback() {
        var current4 = this.getAttribute('current4');
        this.innerHTML = `<div class="album">
        <h4 id="h4c">Les petits prix :</h4>
        <div class="wrapper">
            <div class="carousel owl-carousel">
                <div class="card-prix"> 
                    <div class="card card-p1">
                    .
                    </div>
                    <p>Badges - "Se jeter à l'eau..."</p>
                    <p>5€</p>
                    <a href="">Il me le faut !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-p2">
                    .
                    </div>
                    <p>Boucles d'oreilles - "Mermaid pampilles turquoises"</p>
                    <p>25€</p>
                    <a href="">Je les veux !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-p3">
                    .
                    </div>
                    <p>Badges - "Drache queen."</p>
                    <p>5€</p>
                    <a href="">Celui-ci, c'est le bon !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p4">
                    .
                    </div>
                    <p>Badges - "Hi hi. Je jubile."</p>
                    <p>5€</p>
                    <a href="">Je le prends !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p5">
                    .
                    </div>
                    <p>Badges - "God save the spleen."</p>
                    <p>5€</p>
                    <a href="">J'en ai besoin !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p6">
                    .
                    </div>
                    <p>Badges - "Foutons-nous la paix."</p>
                    <p>5€</p>
                    <a href="">C'est tout-moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p7">
                    .
                    </div>
                    <p>Boucles d'oreilles - "Mosaïc pampilles rouges."</p>
                    <p>25€</p>
                    <a href="">J'achète !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p8">
                    .
                    </div>
                    <p>Boucles d'oreilles - "Vtamine C"</p>
                    <p>25€</p>
                    <a href="">Yess... !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p9">
                    .
                    </div>
                    <p>Cartes - "Vieillir est un privilège."</p>
                    <p>2€</p>
                    <a href="">Celui-là, c'est pour moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p10">
                    .
                    </div>
                    <p>Badges - "La reine déneige."</p>
                    <p>5€</p>
                    <a href="">J'en rêve !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p11">
                    .
                    </div>
                    <p>Badges - "Just doux it."</p>
                    <p>5€</p>
                    <a href="">I want it !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p12">
                    .
                    </div>
                    <p>Cartes - "Distribution de sourires..."</p>
                    <p>2€</p>
                    <a href="">Je passe commande !</a>
                </div>  
            </div>
        </div>
    </div>`
    }
}

customElements.define('main-section3', MySection3);

