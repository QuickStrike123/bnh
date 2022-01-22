function CheckSound() {

    navigator.mediaDevices.getUserMedia({audio:true});

    Classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S6wifztS_/model.json',modelReady);
    
}

function modelReady() {

    Classfier.classify(gotResults);
    
}

function gotResults(error,results) {

    if (error == true) {

        console.error(error);
        
    } else {

        console.log(results);

        r = Math.floor(255 * Math.random())+ 1;

        g = Math.floor(255 * Math.random())+ 1;

        b = Math.floor(255 * Math.random())+ 1;

        document.getElementById("result_sound").style.color = "rgb("+r+","+g+","+b+")";

        document.getElementById("result_confidence").style.colour = "rgb("+r+","+g+","+b+")";

        document.getElementById("result_sound").innerHTML = " Sound - " + results[0].label;

        document.getElementById("result_confidence").innerHTML = "  Accuracy -  " + (results[0].confidence * 100).toFixed(2)  + " % ";

        Dog = 0;

        Cat = 0;

        Cow = 0;

        Lion = 0;

        if (results[0].label == "Barking"){

            document.getElementById("Image").src = "Doggo.gif"

            Dog + 1;

            console.log(" the dog noise has been played " + Dog + " times ");
        
        }
        else if (results[0].label == "Meowing"){

            document.getElementById("Image").src = "CAT.gif"

            Cat + 1;

            console.log(" the Cat noise has been played " + Cat + " times ");
        }
        else if (results[0].label == "Mooing"){

            document.getElementById("Image").src = "MOOOOOOOOOVE.gif"

            Cow + 1;

            console.log(" the Cow noise has been played " + Cow + " times ");
        }
        else if (results[0].label == "Raor"){

            document.getElementById("Image").src = "CatGoRoar.gif"

            Lion + 1;

            console.log(" the Lion noise has been played " + Lion + " times ");

        }
    }
}