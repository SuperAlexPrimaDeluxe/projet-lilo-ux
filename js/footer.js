class MyFooter extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');
        this.innerHTML = `<div class="dechirure"></div>

        <footer class="footer">
    
            <!--COLONNE 1-->
            <div class="all">
                <div class="column">
                    <div class="colonne-1">
                        <div class="block-footer-info">
                            <h3 class="h3-footer">à propos de moi</h3>
                            <ul class="liste-info">
                                <h4 class="h4-footer">Contact</h4>
                                <li>+32 (0)470 98 78 52</li>
                                <li>info@lilo.com</li>
                                <h4 class="h4-footer">Adresse</h4>
                                <li>3 Rue des Arbalestriers, 7500 Mons</li>
                                <li><b>Ouvert du lundi au vendredi<br>de 10h à 18h</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <!--COLONNE 2-->
                <div class="column">
                    <div class="colonne-2">
                        <div class="block-footer-back">
                            <h3 class="h3-footer">site</h3>
                            <ul class="liste-site">
                                <li><a href="index.html" id="indexfooter">Accueil</a></li>
                                <li><a href="boutique.html" id="boutiqueindex">Boutique</a></li>
                                <li><a href="actus.html" id="actusfooter">Actus</a></li>
                                <li><a href="contact.html" id="contactfooter">Contact</a></li>
                                <li><a href="espace_client/panier.html" id="panierfooter">Panier</a></li>
                                <li><a href="#">Aide</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <!--COLONNE 3-->
    
                <div class="column">
                    <div class="colonne-3">
                        <div class="block-footer-entreprise">
                            <h3 class="h3-footer">mode de paiement</h3>
                            <div class="paiement">
                                <img src="medias/icons/BANCONTACT_LILO.svg" alt="bancontact" id="bancontact">
                                <img src="medias/icons/MAESTRO_LILO.svg" alt="maestro" id="maestro">
                                <img src="medias/icons/MASTERCARD_LILO.svg" alt="mastercard" id="mastercard">
                                <img src="medias/icons/PAYPAL_LILO.svg" alt="paypal" id="paypal">
                                <img src="medias/icons/VISA_LILO.svg" alt="visa" id="visa">
                            </div>
                            <h3 class="h3-footer">mode de livraison</h3>
                            <img src="medias/icons/bpostlogo.svg" width="50" alt="logo bpost" id="bpost">
                            <!-- Mettre les logos adéquat -->
                        </div>
                    </div>
                </div>
    
                <!--COLONNE 4-->
    
                <div class="column">
                    <div class="colonne-4">
                        <div class="block-footer-compte">
                            <h3 class="h3-footer">mon compte</h3>
                            <ul class="liste-compte">
                                <li><a href="#">Profil</a></li>
                                <li><a href="#">Paramètres</a></li>
                                <li><a href="#">Confidentialité</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <!--COLONNE 5-->
    
                <div class="column">
                    <div class="colonne-5">
                        <div class="block-footer-logo">
                            <img src="medias/icons/lilologo.svg" alt="Lilo-logo">
                        </div>
                        <div class="block-reseaux">
                            <a class="" href="https://www.facebook.com/lesateliersdelilo/">
                                <img class="picto" src="medias/icons/Facebook.svg" alt="facebook">
                            </a>
                            <a href="https://www.instagram.com/lesateliersdelilo/">
                                <img class="picto" src="medias/icons/Instagram.svg" alt="insta">
                            </a>
                            <a href="ml.desmanet@gmail.com">
                                <img class="picto" src="medias/icons/Mail.svg" alt="mail">
                            </a>
                        </div>
                    </div>
                </div>
    
    
                <div class="column conditions">
                    <div class="liens">
                        <a href="conditions_generales.html">
                            Mentions légales
                        </a>
                        <a href="conditions_generales.html">
                            Protection des données
                        </a>
                        <a href="conditions_generales.html">
                            Conditions des offres
                        </a>
                    </div>
                    <span>
                        © 2022, Les ateliers de Lilo. Commerce électronique réaliser par le groupe "CALM"
                    </span>
                </div>
            </div>
    
    
            <!--CONDITION GENERALE-->
    
    
    
        </footer>`
    }
}

customElements.define('main-footer', MyFooter);

{}