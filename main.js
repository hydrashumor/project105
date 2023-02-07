Webcam.set({
    width:350,
    height:200,
    image_format: 'png',
    png_quality:90
});

webcam = document.getElementById("webcam");
Webcam.attach( '#webcam' );
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 verison:', ml5.version);
classifier = ml5.imageClassifier('#',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}