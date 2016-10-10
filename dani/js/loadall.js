function loadall() {

  //  var t = $.template('<h4/>${description}  </h4>');
    var jsonDescription = {
        description: "I love you"
    }

    var div = document.createElement('h2');
    div.innerHTML = jsonDescription.description;
    document.getElementById('description').appendChild(div);
    
}

window.onload = loadall;