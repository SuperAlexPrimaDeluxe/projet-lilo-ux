class MySection extends HTMLElement {
    connectedCallback() {
        var current2 = this.getAttribute('current2');
        this.innerHTML = `<div class="album">
        <h4 id="h4a">Vous aimerez aussi : </h4>
        <div class="wrapper">
            <div class="carousel owl-carousel">
                <div class="card-prix">
                    <a href="product-badge-1.html"> 
                    <div class="card card-11">
                    .
                    </div>
                    </a>
                    <p>badge<br>Boum-boum.</p>
                    <p>5€</p>
                    <a href="product-badge-1.html">Il me le faut !</a>
                </div> 
                <div class="card-prix"> 
                    <a href="product-bijoux-1.html">  
                    <div class="card card-21">
                    .
                    </div>
                    </a>
                    <p>Boucles d'oreilles <br>Fun Terrazzo-pois<p>
                    <p>25€</p>
                    <a href="product-bijoux-1.html">Je les veux !</a>
                </div> 
                <div class="card-prix"> 
                    <a href="product-badge-1.html">
                    <div class="card card-31">
                    .
                    </div>
                    </a>
                    <p>Badge <br> Drache queen</p>
                    <p>5€</p>
                    <a href="product-badge-1.html">Celui-ci, c'est le bon !</a>
                </div>  
                <div class="card-prix"> 
                    <a href="product-badge-1.html">
                    <div class="card card-41">
                    .
                    </div>
                    </a>
                    <p>Badge <br>Hi hi. Je jubile</p>
                    <p>5€</p>
                    <a href="product-badge-1.html">Je le prends !</a>
                </div>  
                <div class="card-prix"> 
                    <a href="product-badge-1.html">
                    <div class="card card-51">
                    .
                    </div>
                    </a>
                    <p>Badge<br>God save the spleen</p>
                    <p>5€</p>
                    <a href="product-badge-1.html">J'en ai besoin !</a>
                </div>  
                <div class="card-prix"> 
                   <a href="product-badge-1.html">
                    <div class="card card-61">
                    .
                    </div>
                    </a>
                    <p>Badge<br>Foutons-nous la paix</p>
                    <p>5€</p>
                    <a href="product-badge-1.html">C'est tout-moi !</a>
                </div>  
                <div class="card-prix"> 
                     <a href="product-bijoux-1.html">
                    <div class="card card-71">
                    .
                    </div>
                    </a>
                    <p>Boucles d'oreilles <br>Mosaïc</p>
                    <p>25€</p>
                    <a href="product-bijoux-1.htm">J'achète !</a>
                </div>  
                <div class="card-prix"> 
                    <a href="product-bijoux-1.html">
                    <div class="card card-81">
                    .
                    </div>
                    </a>
                    <p>Boucles d'oreilles <br>Vitamine C</p>
                    <p>25€</p>
                    <a href="product-bijoux-1.html">Yess... !</a>
                </div>  
                <div class="card-prix"> 
                    <a href="product-paper-1.html">
                    <div class="card card-91">
                    .
                    </div>
                    </a>
                    <p>Carte postale <br>Vieillir est un privilège</p>
                    <p>2€</p>
                    <a href="product-paper-1.html">Celui-là, c'est pour moi !</a>
                </div>  
                <div class="card-prix"> 
                    <a href="product-badge-1.html"> 
                    <div class="card card-101">
                    .
                    </div>
                    </a>
                    <p>Badge<br>il est conseillé de sourire</p>
                    <p>2€</p>
                    <a href="product-badge-1.html">J'en rêve !</a>
                </div>  
                <div class="card-prix"> 
                     <a href="product-badge-1.html">
                    <div class="card card-111">
                    .
                    </div>
                    </a>
                    <p>Badge <br>Just doux it</p>
                    <p>5€</p>
                    <a href="product-badge-1.html">I want it !</a>
                </div>  
                <div class="card-prix">  
                   <a href="product-bijoux-1.html">
                    <div class="card card-121">
                    .
                    </div>
                    </a>
                    <p>Boucles d'oreilles<br> Sprakling limonade<p>
                    <p>25€</p>
                    <a href="product-bijoux-1.html">Je passe commande !</a>
                </div>  
            </div>
        </div>
    </div>`
    }
}

customElements.define('main-section', MySection);

