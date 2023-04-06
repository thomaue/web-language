import img1 from '../Images/mémoire.jpg'
import img2 from '../Images/code1.jpg'
import img3 from '../Images/test1.jpg'


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
            <p> pour mieux comprendre étudions de près cet exemple :</p>

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

            <h2>mais alors que s'est-t-il passé ?</h2>
            







        </div>
    );
}