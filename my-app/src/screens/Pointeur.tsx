import img1 from '../Images/mémoire.jpg'
import img2 from '../Images/code1.jpg'
import img3 from '../Images/test1.jpg'
import img4 from '../Images/mémoire2.jpg'
import img5 from '../Images/difference.jpg'
import img6 from '../Images/magie.jpg'
import img7 from '../Images/mémoire3.jpg'


export const Pointeur = () => {
    return (
        <div>
            <h1>Les pointeurs : </h1>
            <br />
            <h2>C'est quoi ?</h2>
            <p>
                <mark>
                un pointeur est un objet dont la valeur est égale à
                l'adresse d'un autre object.
                </mark>
                <br />
                <br />
                On peut comparer ca à un livreur de pizza,
                il connaît l’adresse mais pas la personne à livrer.
                <br />
                Dans cet exemple, l'adresse est celle de la mémoire et le 
                client représente la valeur.
            </p>

            <br />
            <img src={img1} alt=""/>

            <p>Sur le schéma ci-contre :
                <br />
                une 
                <em> variable X </em>
                à été crée 
                à 
                <mark> l'adresse</mark>
                <strong> 0x000003942 </strong> 
                contenant la
                <mark> valeur</mark>
                <strong> 145</strong>.
                <br />
                <em>Pointeur sur Variable X </em>
                lui aura sa propre
                <mark> adresse </mark>
                et contiendra 
                <strong> 0x000003942 </strong>
                comme 
                <mark> Valeur </mark>
            </p>

            <h2>A quoi ca sert ?</h2>

            <h4>
                un pointeur permet à une fonction de modifier
                des données
            </h4>

            <br />
            <p> pour mieux comprendre son utilité étudions de près cet exemple :</p>

            <img src={img2} alt=""/>

            <p>
                On essaye à l'aide de la fonction 
                <em> ft_switch </em>
                de permuter les valeurs contenu dans les variables 
                <em> nb1 </em>
                et
                <em> nb2 </em>. 
                <br />
            </p>

            <img src={img3} alt=""/>

            <p>
                On remarque que l'opération ne s'est pas déroulé 
                comme prévu.
                <br />
            </p>

            <h2>Que s'est-t-il passé ?</h2>

            <img src={img4} alt=""/>

            <p>
                nous avons grâce à la fonction crée des copies de
                <em> nb1 </em>
                et
                <em> nb2 </em>
                . 
                <br />
                <br />
                Ainsi dans notre exemple, ce sont 
                <em> nombre1 </em>
                et 
                <em> nombre2 </em>
                qui ont permutés, et non pas
                <em> nb1 </em>
                et
                <em> nb2 </em>
                comme souhaité.
            </p>

            <h2>Comment créer un pointeur ?</h2>

            <p>
                pour déclarer ou initialiser un pointeur
                 on utilise la syntaxe
                suivante :
                <br />
                <br />
                <mark>
                <em>type </em>
                *nom_pointeur = &nom_variable 
                </mark>
                <br />
                <br />
                <h4>par exemple :</h4>
                <em>int </em>
                *nombre1 = &nb1
                <br />
                <br />
                <br />

                enfin pour utiliser un pointeur on utilisera cette
                syntaxe :
                <br />
                <br />
                <em>nom_pointeur </em>
                : recupère 
                <mark>l'adresse de la variable </mark>
                pointée
                <br />
                <em>*nom_pointeur </em>
                : recupère la 
                <mark> valeur de la variable </mark> 
                pointée
                <br />
                <em>&nom_pointeur </em>
                : recupère 
                <mark> l'adresse du pointeur </mark>
            </p>

            <h2>Résoudre le problème : </h2>

            <p>
                on déclare donc les pointeurs
                <em> nombre1 </em>
                et 
                <em> nombre2 </em>
                qui pointe respectivement sur 
                <em> nb1 </em>
                et
                <em> nb 2 </em>
            </p>
            <img src={img5} alt=""/>

            <h4>  Magie *_*</h4>

            <img src={img6} alt=""/>

            <h2>en conclusion :</h2>

            <p>voici ce que nous avons fait :</p>
            <br />
            <img src={img7} alt=""/>
            <br />
            en utilisant les *pointeurs nous avons pu acceder aux 
            valeurs contenue par 
            <em> nb1 </em>
                et
            <em> nb 2 </em>



            



            







        </div>
    );
}