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
                    <p>Badge<br>Le dindon de la farce</p>
                    <p><del>5€</del>  <b>3€</b></p>
                    
                    <a href="">Il me le faut !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-p2">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>Funcky</p>
                    <p><del>25€</del>  <b>15€</b></p>
                    <a href="">Je les veux !</a>
                </div> 
                <div class="card-prix"> 
                    <div class="card card-p3">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>Arc laiton brut</p>
                    <p><del>25€</del>  <b>15€</b></p>
                    <a href="">Celles-ci, c'est les bonnes !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p4">
                    .
                    </div>
                    <p>Badge<br>Mégots, bulots,dodo</p>
                    <p><del>5€</del>  <b>3€</b></p>
                    <a href="">Je le prends !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p5">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>Lilas écailles</p>
                    <p><del>25€</del>  <b>15€</b></p>
                    <a href="">J'en ai besoin !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p6">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>Trio beige</p>
                    <p><del>25€</del>  <b>14€</b></p>
                    <a href="">Je les prends !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p7">
                    .
                    </div>
                    <p>Badge<br>Miss raclette</p>
                    <p><del>5€</del>  <b>3€</b></p>
                    <a href="">J'achète !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p8">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>blue rainbow</p>
                    <p><del>25€</del>  <b>15€</b></p>
                    <a href="">Yess... !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p9">
                    .
                    </div>
                    <p>Badge<br>No Limits but the skai</p>
                    <p><del>5€</del>  <b>3€</b></p>
                    <a href="">Celui-là, c'est pour moi !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p10">
                    .
                    </div>
                    <p>Badge<br>Passionné ne veut pas...</p>
                    <p><del>5€</del>  <b>3€</b></p>
                    <a href="">J'en rêve !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p11">
                    .
                    </div>
                    <p>Boucles d'oreilles<br>Noir arc</p>
                    <p><del>25€</del>  <b>15€</b></p>
                    <a href="">I want it !</a>
                </div>  
                <div class="card-prix"> 
                    <div class="card card-p12">
                    .
                    </div>
                    <p>Badge<br> Obsédée textuelle</p>
                    <p><del>25€</del>  <b>15€</b></p>
                    <a href="">Je passe commande !</a>
                </div>  
            </div>
        </div>
    </div>`
    }
}

customElements.define('main-section3', MySection3);

