class MySection2 extends HTMLElement {
    connectedCallback() {
        var current3 = this.getAttribute('current3');
        this.innerHTML = `<div class="album">
        <h4 id="h4a">Les nouveautés sur le site :</h4>
        <div class="wrapper">
            <div class="carousel owl-carousel">
                <div class="card-prix"> 
                    <div class="card card-n1">
                    .
                    </div>
                    <p>Badge<br>Intolérance zero</p>
                    <p>5€</p>
                    <a href="">Il me le faut !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-n2">
                    .
                    </div>
                    <p>Badge<br>Le meilleur est à venir</p>
                    <p>5€</p>
                    <a href="">Je les veux !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-n3">
                    .
                    </div>
                    <p>Badge<br>Femme de méninges</p>
                    <p>5€</p>
                    <a href="">Celui-ci, c'est le bon !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n4">
                    .
                    </div>
                    <p>Badge<br>Tout le monde n'est...</p>
                    <p>5€</p>
                    <a href="">Je le prends !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n5">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>Mosaic</p>
                    <p>22€</p>
                    <a href="">J'en ai besoin !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n6">
                    .
                    </div>
                    <p>Badge<br>dans quel monde Vuitton</p>
                    <p>5€</p>
                    <a href="">C'est tout-moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n7">
                    .
                    </div>
                    <p>Badge<br>Eteindre la lumière</p>
                    <p>5€</p>
                    <a href="">J'achète !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n8">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>PEPS</p>
                    <p>25€</p>
                    <a href="">Yess... !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n9">
                    .
                    </div>
                    <p>Badge<br>La gourde qui fait déborder...</p>
                    <p>5€</p>
                    <a href="">Celui-là, c'est pour moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n10">
                    .
                    </div>
                    <p>Carte postale<br>J'arrête de procrastiner...</p>
                    <p>3€</p>
                    <a href="">J'en rêve !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n11">
                    .
                    </div>
                    <p>Badge<br>Zérotonine</p>
                    <p>5€</p>
                    <a href="">I want it !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-n12">
                    .
                    </div>
                    <p>Badge<br>Tire sur mon doigt</p>
                    <p>5€</p>
                    <a href="">Je passe commande !</a>
                </div>  
            </div>
        </div>
    </div>`
    }
}

customElements.define('main-section2', MySection2);

