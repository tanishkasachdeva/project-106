Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'" />'
    });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l9bIN3lMP/model.json",modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded!");
}
p

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        if(results[0].label=="amazing")
        {
            document.getElementById("update_gesture").innerHTML="&#128076;";
        }
        if(results[0].label=="best")
        {
            document.getElementById("update_gesture").innerHTML="&#128077;";
        }
        if(results[0].label=="rock")
        {
            document.getElementById("update_gesture").innerHTML="&#129304;";
        }
        if(results[0].label=="victory")
        {
            document.getElementById("update_gesture").innerHTML="&#9996;";
        }
        if(results[0].label=="clap")
        {
            document.getElementById("update_gesture").innerHTML="&#128079;";
        }
        if(results[0].label=="hi")
        {
            document.getElementById("update_gesture").innerHTML="&#128400;";
        }
        if(results[0].label=="punch")
        {
            document.getElementById("update_gesture").innerHTML="&#9994;";
        }
        speak();
    }
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the hand gesture is"+prediction_1;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}