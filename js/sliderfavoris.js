class MySection extends HTMLElement {
    connectedCallback() {
        var current2 = this.getAttribute('current2');
        this.innerHTML = `<div class="album">
        <h4 id="h4a">Vous aimerez aussi : </h4>
        <div class="wrapper">
            <div class="carousel owl-carousel">
                <div class="card-prix">
                    <a href="product.html" alt="lien vers le badge">
                    <div class="card card-11">
                    .
                    </div>
                    </a>
                    <p>Carte postale <br>Distribution de sourires...</p>
                    <p>2€</p>
                    <a href="product.html">Il me le faut !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-21">
                    .
                    </div>
                    <p>Boucles d'oreilles <br>Fun Terrazzo-pois</p>
                    <p>25€</p>
                    <a href="">Je les veux !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-31">
                    .
                    </div>
                    <p>Badge <br> Drache queen</p>
                    <p>5€</p>
                    <a href="">Celui-ci, c'est le bon !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-41">
                    .
                    </div>
                    <p>Badge <br>Hi hi. Je jubile</p>
                    <p>5€</p>
                    <a href="">Je le prends !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-51">
                    .
                    </div>
                    <p>Badge<br>God save the spleen</p>
                    <p>5€</p>
                    <a href="">J'en ai besoin !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-61">
                    .
                    </div>
                    <p>Badge<br>Foutons-nous la paix</p>
                    <p>5€</p>
                    <a href="">C'est tout-moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-71">
                    .
                    </div>
                    <p>Boucles d'oreilles <br>Mosaïc pampilles rouges</p>
                    <p>25€</p>
                    <a href="">J'achète !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-81">
                    .
                    </div>
                    <p>Boucles d'oreilles <br>Vitamine C</p>
                    <p>25€</p>
                    <a href="">Yess... !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-91">
                    .
                    </div>
                    <p>Carte postale <br>Vieillir est un privilège</p>
                    <p>2€</p>
                    <a href="">Celui-là, c'est pour moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-101">
                    .
                    </div>
                    <p>Badge<br>il est conseillé de sourire</p>
                    <p>2€</p>
                    <a href="">J'en rêve !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-111">
                    .
                    </div>
                    <p>Badge <br>Just doux it</p>
                    <p>5€</p>
                    <a href="">I want it !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-121">
                    .
                    </div>
                    <p>Boucles d'oreilles<br> Sprakling limonade</p>
                    <p>25€</p>
                    <a href="">Je passe commande !</a>
                </div>  
            </div>
        </div>
    </div>`
    }
}

customElements.define('main-section', MySection);

