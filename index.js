var form12hr=false;


function formathr(today){
    var hr=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    var ampm = "AM";
    if(hr>=12){
    ampm="PM"
    hr=hr%12;
    if(hr==0) hr=12;
    }
    if(hr<10) hr= '0'+hr;
    if(min<10) min='0'+min;
    if(sec<10) sec='0'+sec;
    var time = hr + ":" + min + ":" + sec + " " + ampm;
    
    $('.time').text(time);
}



$('#hour12').click(function(){
    $('.format12').css("color","crimson");
    $('.format24').css("color","rgb(145, 145, 145)");
    form12hr=true;
});

$('#hour24').click(function(){
    $('.format24').css("color","crimson");
    $('.format12').css("color","rgb(145, 145, 145)");
    form12hr=false;
});



function showTime(){
var today = new Date();
var day = today.getDay();
if(form12hr==true){
formathr(today);
}
else{
    var hr=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    if(hr<10) hr= '0'+hr;
    if(min<10) min='0'+min;
    if(sec<10) sec='0'+sec;
    var time = hr + ":" + min + ":" + sec;
    
    $('.time').text(time);
}


switch(day){
    case 0:
    $('#sunday').css("color","crimson")
    $('#sunday').css("display","block")
    break;

    case 1:
    $('#moday').css("color","crimson")
    $('#monday').css("display","block")
    break;

    case 2:
    $('#tuesday').css("color","crimson")
    $('#tuesday').css("display","block")
    break;

    case 3:
    $('#wednesday').css("color","crimson")
    $('#wednesday').css("display","block")
    break;

    case 4:
    $('#thrusday').css("color","crimson")
    $('#thrusday').css("display","block")
    break;

    case 5:
    $('#friday').css("color","crimson")
    $('#friday').css("display","block")
    break;

    case 6:
    $('#saturday').css("color","crimson")
    $('#saturday').css("display","inline")
    break;

    default:
    $('#saturday').css("color","crimson")
    $('#saturday').css("display","block")
    break;
        
}
}

showTime();
setInterval(showTime,1000);


