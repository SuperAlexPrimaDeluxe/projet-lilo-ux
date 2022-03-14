
class MyHeader extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');
        this.innerHTML = `<header>

        <!--HEADER PT1 - IMAGE & ICONES DE CONNEXION -->
    
        <div class="top_header">
            <a href="index.html" id="returnhome"><img src="medias/icons/lilo_logo.svg" width="100px" alt="" id="logoheader"/></a>
            <div class="iconheader">
                <span class="headerusername"><a href="login/connexion.html" id="txtconnexion" style="display: none">Connexion</a><a href="login/dashboard.html" id="godash0">Sarah Conor</a></span>
                <div class="ctn_icons_right_header">
                    <span class="pastille-type1"></span>
                    <a href="login/dashboard.html" id="godash"><img src="medias/icons/poeple2.svg" alt="" id="icon1" /></a>
                </div>
                <div class="ctn_icons_right_header">
                    <span class="pastille-type2" ">0</span>
                    <a href="espace_client/panier.html" id="gopanier"><img src="medias/icons/basket.svg" alt="" id="icon2" /></a>
                </div>
                <div class="ctn_icons_right_header">
                    <span class="pastille-type2" id="psty2">0</span>
                    <a href="espace_client/wishlist.html" id="gowishlist"><img src="medias/icons/coeur_lilo.svg" alt="" id="icon3" /></a>
                </div>
            </div>
        </div>
    
        <!--HEADER PT2 - NAVIGUATION-->
    
        <nav class="navheader" role="navigation">
            <div class="menuheader">
    
                <li class="none" id="toggleheader">
                    <div id="backpackheader">
                        <img src="medias/icons/burger.svg" alt="menu burger" id="burgerheader">
                        <img src="medias/icons/close.svg" alt="close icon" id="closeheader">
                    </div>
                </li>
    
                <li id="recherchemobileheader">
                    <div class="input">
                        <a href="404/index.html" class="justlink2header" id="iconederecherchemobile"><img src="medias/icons/search.svg" alt="" id="lasupericonederecherche"/></a>
                        <input type="text" placeholder="Recherche ..." id="inputsearchmobile" />
                    </div>
                </li>
    
                <div id="ctnmenures">
                    <li><a href="index.html" id="returnhome2">Accueil</a></li>
                    <li class="has-childrenheader" id="colorerheader"><a href="boutique.html" id="supresslink1">Boutique<img id="arrowdown1" src="medias/icons/downarrow.svg"></a>
        
                        <!-- sous menu-->
                        <ul class="sous-menuheader" id="sousmenuboutique">
                            <li id="lionlymobile"><a href="boutique.html" id="globalboutique">Tous les produits</a></li>
                            <li><a href="boutique.html" id="globalboutique">Toute la boutique</a></li>
                            <li><a href="badges.html" id="globalbadges">Badges</a></li>
                            <li><a href="bijoux.html" id="globalbijoux">Bijoux</a></li>
                            <li><a href="papetrie.html" id="globalpapetrie">Papeterie</a></li>
                        </ul>
                    </li>
    
                    <li><a href="actus.html" id="actusredirect">Actus</a></li>
    
                    <li class="has-childrenheader" id="colorerheader2"><a href="contact.html" id="supresslink2">Contact<img id="arrowdown2" src="medias/icons/downarrow.svg"></a>
                        <ul class="sous-menuheader" id="sousmenucontact">
                            <li><a href="contact.html#pointdevente" id="pdv">Nos point de ventes</a></li>
                            <li><a href="contact.html#fdecontact" id="fde">Formulaire de contact</a></li>
                            <li><a href="contact.html#FAQQ" id="FAQlinker">Foire aux questions</a></li>
                        </ul>
                    </li>
    
                    <li class="searchcontainer" id="suprarecherche">
                        <div class="supersearch">
                            <!-- <button id="menu-button" class="mobile"></button> -->
                            <div class="input">
                                <a href="recherche.html" class="justlink" id="rdeskto"><img src="medias/icons/search.svg" alt="" class="search" id="searchdesktoop"/></a>
                                <input type="text" placeholder="Recherche ..." id="searchheader" />
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
        </nav>
    </header>`
    }
}

customElements.define('main-header', MyHeader);



