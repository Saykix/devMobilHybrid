//creer et manipuler des object
//déclaration
let sport ={ nom:"Handball", description:"un je de ballon"};

//manipuler
console.log(sport);
console.log(sport.nom);

//modifier
sport.nom="Football";
console.log(sport.nom);

//ajout d'un attribut
sport.nombreJoueurs=11;
console.log(sport);

//un object poeut avoir des methodes
let sport2={
    nom:"Badminton",
    description:"Ca vole",
    afficher: function(){
        console.log(`${this.nom.toUpperCase()} ${this.description}`)
    }
};

sport2.afficher();

//tableaux d'objets 
let sports=[
    sport,
    sport2,
    { nom:"padel", description:"un autre jeu de raquettes"}
];
console.log(sports);
sports.push( { nom:"Tennis", description:"ça claque"});
console.log(sports);