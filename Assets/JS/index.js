var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('nav-scrolled','shadow');
    } else{
        nav.classList.remove('nav-scrolled','shadow');
    }
});

// home page book now
var subjectObject = {
    "Luzon":{
        "Baguio" : "Baguio",
        "Batanes" : "Batanes",
        "Batangas" :"Batangas",
        "Ilocos Norte" : "Ilocos Norte",
        "Pangasinan" : "Pangasinan" ,
        "Vigan" : "Vigan",
    },
    "Visayas":{
        "Biliran" : "Biliran",
        "Bohol" : "Bohol",
        "Cebu" : "Cebu",
        "Negros Occidental" : "Negros Occidental",
        "Samar" : "Samar",
    },
    "Mindanao":{
        "Cagayan De Oro" : "Cagayan De Oro",
        "Davao" : "Davao",
        "Iligan City" : "Iligan City",
        "Siargao" : "Siargao",
        "Surigao Del Sur" : "Surigao Del Sur",
        "Tagum" : "Tagum"
    }
}

window.onload = function(){
    var choose = document.getElementById('destination')
    var places = document.getElementById('places')

    for(var x in subjectObject){
        destination.options[destination.options.length] = new Option(x)
    }

    choose.onchange = function(){
        places.length = 1

        for (var y in subjectObject[this.value]){
            places.options[places.options.length] = new Option(y)

        }
    }
}