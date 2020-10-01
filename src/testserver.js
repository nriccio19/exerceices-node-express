import axios from 'axios'

/* 
1) Définition d'une variable data, qui contient toutes les promises (await+objet Promise et méthode All)
2) Array des request Http avec axios.get
3).then + callBack avec en paramètre "response" qui retourne contenu de la clé data (.data) de l'objet response(response.data)
4)On console.log la variable data qui retourne chaque clé data de chauqe reponse de requête. .
*/

let data = await Promise.all([
    axios.get('http://localhost:7777/').then((response) => response.data),
    axios
        .get('http://localhost:7777/aboutme')
        .then((response) => response.data),
    axios
        .get('http://localhost:7777/aboutyou')
        .then((response) => response.data),
    axios.get('http://localhost:7777/vote').then((response) => response.data),
    axios
        .get('http://localhost:7777/vote/18')
        .then((response) => response.data),
    axios
        .get('http://localhost:7777/palindrome/tenet')
        .then((response) => response.data),
    axios
        .get('http://localhost:7777/oddtest/3')
        .then((response) => response.data),
]).catch((err) => {
    console.error(err)
})

console.log(data)
