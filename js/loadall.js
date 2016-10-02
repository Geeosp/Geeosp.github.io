function loadall() {

  //  var t = $.template('<h4/>${description}  </h4>');
    var jsonDescription = {
        description: "Hello, I am Geo. I study Computer Sciences at Federal University of Pernambuco. I am a mobile developer,  a game design, a video editor, a guitar player, a vector design, a pokemon master, a good friend and an awsome cooker.                    I am always interested in Augmented Reality aplications, Computer-Human interations, Game Development and Artificial inteligence. I wish I could work more with all of that, but right now I am just happy because I've made this website from scratch."
    }

    var div = document.createElement('h4');
    div.innerHTML = jsonDescription.description;
    document.getElementById('description').appendChild(div);
    
}

window.onload = loadall;