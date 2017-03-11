var description = {
    description: "Hello, I am Geo. I study Computer Sciences at Federal University of Pernambuco. I am a mobile developer,  a game design, a video editor, a guitar player, a vector design, a pokemon master, a good friend and an awsome cooker.                    I am always interested in Augmented Reality aplications, Computer-Human interations, Game Development and Artificial inteligence. I wish I could work more with all of that, but right now I am just happy because I've made this website from scratch."
};

var resume = {
    /*  
            {
               "where": "",
               "what": "",
               "when": "",
               "other": ""
           }    
           */
    'education': [

        {

            "where": "Universidade Federal de Pernambuco, (UFPE), Brasil",
            "what": "Ciencias da Computação",
            "when": "2012 - Current",
            "other": "GPA 8.2/10"
        }, {
            "where": "DePaul University, Chicago, IL, EUA",
            "what": "Computer Sciences, Non-degree internation student",
            "when": "Agosto 2015 - Junho 2016",
            "other": ""

        }
    ],
    
    
    'experience': [{
        "where": "Northeaster University",
        "what": "Game Developer",
        "when": "2016",
        "other": "Como parte do programa Ciencias Sem Fronteiras"
    }, {
        "where": "Voxar Labs, UFPE",
        "what": "Iniciação Científica",
        "when": "2015",
        "other": "Realidae aumentada"
    }, {
        "where": "UFPE",
        "what": "Monitor de Processamento Gráfico",
        "when": "2014 - 2015",
        "other": ""
    }, {
        "where": "UFPE",
        "what": "Monitor de Algoritmos e Estrutura de Dados",
        "when": "2013 - 2014",
        "other": ""
    }],
 /*   
 "name": "Photoshop",
 "knowlege": "80",
 "icon": ""
    */
    'skills': [{
        "name": "Photoshop",
        "knowlege": "80",
        "icon": ""
    }]

};

function loadall() {
    "use strict";
    //  var t = $.template('<h4/>${description}  </h4>');
    var div;
    div = document.createElement('h4');
    div.innerHTML = description.description;
    document.getElementById('description').appendChild(div);
}


window.onload = loadall;