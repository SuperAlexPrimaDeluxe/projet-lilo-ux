//création d'une constante qui va instancier le queryselector pour ne pas devoir écrire toute la phrase à chaque appel $() remplace document.querySelector();
const $ = document.querySelector.bind(document);
//création d'une constante qui va instancier le queryselectorall pour ne pas devoir écrire toute la phrase à chaque appel $$() remplace document.querySelectorAll();
const $$ = document.querySelectorAll.bind(document);

//on instantcie un tableau qui va récoupérer tous les éléments qui ont la classe btn
//s'il n'y en a qu'un seul ce sera un tableau avec UN élément btns[0]
let btns = $$('.btn');
let articles = $$('.allactus');


//création d'une boucle sur tous les éléments du tableau btns
//je décide de les appeler btn par pure logique (singulier pour la liste d'items)
for (const btn of btns) {
    //pour chaque élément du tableau
    //on lui ajoute un écouteur d'évènement sur le clic
    btn.addEventListener("click", function (e) {
        //appel de la fonction qui recoche l'élément
        //elle pourrait être écrite ici sans faire un appel à und fonction externe
        //mais je veux pouvoir l'appeler au chargement de la page cf ligne 75 
        check(e, btn)
    });
}

//la fonction qui coche/active les boutons
function check(e, button) {
    let checkedList = [];
    //par défaut on décoche "all"
    $('#b0actus').classList.remove('checked');
    //si la case est cochée on la décoche
    //si elle n'est pas cochée on la coche ==> toggle
    button.classList.toggle('checked');

    for (const btn of btns) {
         //pour chaque bouton on vérifie s'il est coché
        if (!btn.classList.contains("checked")) {
            //sinon on le rajoutes dans un tableau
            checkedList.push(btn);
            //puis on check si la longueur du tableau de boutons décochés est égale à la longueur du tableau de boutons
            //donc si TOUT est décoché
            if (checkedList.length == btns.length) {
                //alors on relance la fonction init
                //qui coche "ALL" et affiche tout
                init();
            } 
            //s'il est coché
        }else {
            //appel de la fonction qui va gérer l'affichage des articles
            showHideArticles();
            
        }
    }


}
//fonction qui gère l'affichage des articles
function showHideArticles() {
    //masque tout
    for (const article of articles) {
        article.classList.add('hidden');
    }
    
    for (const btn of btns) {
        //avant de récupérer les boutons qui sont checked et 
        if (btn.classList.contains('checked')) {
            //et d'activer les éléments dont la classe correspond au dataset des boutons checked
            for (const article of articles) {
                if(article.classList.contains(btn.dataset.product)){
                    article.classList.remove('hidden')
                }

            }
        }
    }

}
//appel primordial de la fonction pour cocher l'élément par défaut
//actuellement le 0 càd ALL
function init() {
    $('#b0actus').classList.add('checked');
    for (const btn of btns) {
        btn.classList.remove('checked');
    }
    for (const article of articles) {
        article.classList.remove('hidden');
    }
}
$("#b0actus").addEventListener("click", init);
init();