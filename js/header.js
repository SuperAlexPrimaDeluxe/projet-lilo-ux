class MyHeader extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');
        this.innerHTML = `<header>

        <!--HEADER PT1 - IMAGE & ICONES DE CONNEXION -->
    
        <div class="top_header">
            <a href="index.html"><img src="medias/icons/lilo_logo.svg" width="100px" alt="" id="logoheader" /></a>
            <div class="iconheader">
                <span class="headerusername"><a href="login/connexion.html">Connexion</a> | <a href="login/dashboard.html">Pita88</a></span>
                <div class="ctn_icons_right_header">
                    <span class="pastille-type1"></span>
                    <a href="login/dashboard.html"><img src="medias/icons/poeple2.svg" alt="" id="icon" /></a>
                </div>
                <div class="ctn_icons_right_header">
                    <span class="pastille-type2">3</span>
                    <a href="espace_client/panier.html"><img src="medias/icons/basket.svg" alt="" id="icon" /></a>
                </div>
                <div class="ctn_icons_right_header">
                    <span class="pastille-type2">1</span>
                    <a href="espace_client/wishlist.html"><img src="projet-lilo-ux/medias/icons/coeur_lilo.svg" alt="" id="icon" /></a>
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
                        <a href="404/index.html" class="justlink2header"><img src="medias/icons/search.svg" alt="" /></a>
                        <input type="text" placeholder="Recherche ..." id="inputsearchmobile" />
                    </div>
                </li>
    
                <div id="ctnmenures">
                    <li><a href="#">Accueil</a></li>
                    <li class="has-childrenheader" id="colorerheader"><a href="boutique.html" id="supresslink1">Boutique<img id="arrowdown1" src="medias/icons/downarrow.svg"></a>
        
                        <!-- sous menu-->
                        <ul class="sous-menuheader" id="sousmenuboutique">
                            <li id="lionlymobile"><a href="badges.html">Tous les produits</a></li>
                            <li><a href="badges.html">Badges</a></li>
                            <li><a href="bijoux.html">Bijoux</a></li>
                            <li><a href="papetrie.html">Papeterie</a></li>
                            <li><a href="nouveaute.html">Nouveautés</a></li>
                            <li><a href="favorites.html">Préférés</a></li>
                            <li><a href="petitsprix.html">Petits prix</a></li>
                        </ul>
                    </li>
    
                    <li><a href="actus.html">Actus</a></li>
    
                    <li class="has-childrenheader" id="colorerheader2"><a href="contact.html" id="supresslink2">Contact<img id="arrowdown2" src="medias/icons/downarrow.svg"></a>
                        <ul class="sous-menuheader" id="sousmenucontact">
                            <li><a href="contact.html">Nos point de ventes</a></li>
                            <li><a href="contact.html">Formulaire de contact</a></li>
                            <li><a href="contact.html">Foire aux questions</a></li>
                        </ul>
                    </li>
    
                    <li class="searchcontainer" id="suprarecherche">
                        <div class="supersearch">
                            <!-- <button id="menu-button" class="mobile"></button> -->
                            <div class="input">
                                <a href="404/index.html" class="justlink"><img src="medias/icons/search.svg" alt="" class="search"/></a>
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

{/* <header>
        <nav>
            <div id="burger">
                <button type="button">Menu</button>
            </div>
            <a href="index.html" title="les ateliers de lilo"><img class="logo" src="img/ladl-logo-dark.svg" alt="logo"></a>
            <ul class="menuDesktop">
                <li><a class="${current === "accueil" ? 'active' : ''}" href="index.html">Accueil</a></li>
                <li><a class="${current === "boutique" ? 'active' : ''}" href="shop.html">Boutique</a>
                    <ul class="sub">
                        <li><a href="shop.html">Voir tout</a></li>
                        <li><a href="badges.html">Badges</a></li>
                        <li><a href="bijoux.html">Bijoux</a></li>
                        <li><a href="papeterie.html">Papeterie</a></li>
                        <li><a href="nouveautes.html">Nouveautés</a></li>
                        <li><a href="promo.html">Promo</a></li>
                    </ul>
                </li>
                <li><a class="${current === "apropos" ? 'active' : ''}" href="apropos.html">A propos</a></li>
                <li><a class="${current === "blog" ? 'active' : ''}" href="blog.html">Blog</a>
                    <ul class="sub">
                        <li><a href="blog.html">Actualités</a></li>
                        <li><a href="evenements.html">Evènements</a></li>
                    </ul>
                </li>
                <li><a class="${current === "ateliers" ? 'active' : ''}" href="ateliers.html">Ateliers</a></li>
                <li><a class="${current === "ptvente" ? 'active' : ''}" href="pointsdevente.html">Points de vente</a></li>
                <li><a class="${current === "contact" ? 'active' : ''}" href="contact.html">Contact</a></li>
            </ul>

            <div class="userMenu">
                <a href="#" title="mes favoris"> <img src="img/mdi_cards-heart-outline.svg"
                        alt="icône de la wishlist donc des favoris"></a>
                <a id="cart" href="#" title="mon panier d'achats"> <img src="img/mdi_shopping-outline.svg"
                        alt="icône du panier d'achat"></a>
                <a href="connexion.html" title="me connecter au profil"><img src="img/mdi_account-circle-outline.svg"
                        alt="icône du profil pour se connecter"></a>
            </div>
        </nav>

        <div class="overlay">
                <div class="overlayCart">
                    <a href="" class="closebtn"></a>
                    <span class="titleCart">Panier</span>
                    <div class="overlay-content">
                        <div class="content-product">
                            <figure><img src="img/product/badge-a-fleur-de-peau.jpeg" alt=""></figure>
                            <div class="product-infos">
                                <div class="cartInfos">
                                    <span class="cat">Badge</span><br>
                                    <span class="titleProduct">"A fleur de peau de vache"</span><br>
                                    <span class="price">5,00 €</span>
                                </div>
                                <div class="quantity">
                                    <div>
                                        <button>-</button>
                                        <span class="number">1</span>
                                        <button>+</button>
                                    </div>
                                    <a href="" class="delete"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overlay-content">
                        <div class="content-product">
                            <figure><img src="img/product/badge-humoureuse.jpg" alt=""></figure>
                            <div class="product-infos">
                                <div class="cartInfos">
                                    <span class="cat">Badge</span><br>
                                    <span class="titleProduct">"Je suis humoureuse"</span><br>
                                    <span class="price">5,00 €</span>
                                </div>
                                <div class="quantity">
                                    <div>
                                        <button>-</button>
                                        <span class="number">1</span>
                                        <button>+</button>
                                    </div>
                                    <a href="" class="delete"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subTotal">
                        <span>Sous Total</span>
                        <span class="price">10,00 €</span>
                    </div>
                    <div class="shippingFees">
                        <span>Frais de port</span>
                        <span>3,00 €</span>
                    </div>
                    <div class="total">
                        <span>Total</span>
                        <span>13,00 €</span>
                    </div>
                    <div class="btnCart">
                        <a href="panier.html" class="secondBtn">Afficher le panier</a>
                        <a href="tunnelcommande_infos.html" class="cta">Commander</a>
                    </div>
                </div>
            </div>

    </header> */}