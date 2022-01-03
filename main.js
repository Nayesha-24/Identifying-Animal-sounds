function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TjZM_B2ey/", modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults( error,results){
    if( error){ console.error(error);}
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;  
        random_number_g = Math.floor(Math.random()*255)+ 1;
        random_number_b = Math.floor(Math.random()*255)+ 1;

        document.getElementById("result_label").innerHTML= "I can hear-"+  results[0].label;
        document.getElementById("result_confidence").innerHTML= "Accuracy-"+  (results[0].confidence*100 ).toFixed(2)+ "%";
        document.getElementById("result_label").style.color="rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")" ;
        document.getElementById("result_confidence").style.color="rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")" ;

        img= document.getElementById("Dog");
        img1= document.getElementById("Cat");
        img2= document.getElementById("monkey");
        img3= document.getElementById("Sheep");
        img4= document.getElementById("alien_04");

        if( results[0].label == 'Dog'){
            img.src='doggy_gif.gif';
            img1.src= 'Dancing heart cat.png';
            img2.src= 'png-transparent-monkey-cartoon-drawing-illustration-happy-little-monkey-brown-and-beige-monkey-sticker-comics-mammal-cat-like-mammal-thumbnail.png';
            img3.src= 'Sheeep.png';
            img4.src= 'aliens-04.png';
        }

        else if( results[0].label == 'Cat '){
            img.src='animated-dog-png-transparent-animated-dog-images-285008.png';
            img1.src= 'dancing-in-love.gif';
            img2.src= 'png-transparent-monkey-cartoon-drawing-illustration-happy-little-monkey-brown-and-beige-monkey-sticker-comics-mammal-cat-like-mammal-thumbnail.png';
            img3.src= 'Sheeep.png';
            img4.src= 'aliens-04.png';
        }

        else if( results[0].label == 'monkey'){
            img.src='animated-dog-png-transparent-animated-dog-images-285008.png';
            img1.src= 'Dancing heart cat.png';
            img2.src= 'Dancing monkey.gif';
            img3.src= 'Sheeep.png';
            img4.src= 'aliens-04.png';
        }
        else if( results[0].label == 'monkey'){
            img.src='animated-dog-png-transparent-animated-dog-images-285008.png';
            img1.src= 'Dancing heart cat.png';
            img2.src= 'Dancing monkey.gif';
            img3.src= 'sheepDance.gif';
            img4.src= 'aliens-04.png';
        }
        else {
            img.src='aliens-01.png';
            img1.src= 'aliens-02.png';
            img2.src= 'aliens-03.png';
            img3.src= 'Sheeep.png';
            img4.src= 'aliens-04.gif';
        }


    }

}