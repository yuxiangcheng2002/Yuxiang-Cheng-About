var myProjects = new Array('./Projects/1.jpg','./Projects/2.jpg','./Projects/3.jpg','./Projects/4.jpg');
var myPortraits = new Array('./Portraits/1.jpg','./Portraits/2.jpg','./Portraits/3.jpg','./Portraits/4.jpg');

window.onload = function(){
    var randomNum = Math.floor(Math.random() * myProjects.length);
    var randomNum = Math.floor(Math.random() * myPortraits.length);
    document.getElementById("randomProjects").src = myProjects[randomNum];
    document.getElementById("randomPortraits").src = myPortraits[randomNum];
}