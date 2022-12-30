let index = 0;
let projekty = ["<button class=\"button u_projektu\" onclick=\"posunDoLeva()\"><</button> <div class=\"about\"><div style=\"text-align: center;\"> <span class=\"nadpis_portfolio\">Project Sara</span> </div> <div style=\"text-align: center; margin-top: 20px; margin-bottom: 20px;\"> <span class=\"info_o_projektu\" style=\"background-color: rgb(35, 224, 35); border-color: rgb(35, 224, 35);\">Finished</span> </div> <p> \"Project Sara\" is my first major Python project. It is a voice assistant for computers, which is completely in Czech (most voice assistants in the Czech Republic do not speak Czech).<br><br> The program is created using the SpeechRecognition library and the GUI is made in Tkinter. Project Sara contains predefined commands (turn on the application, search, find, find information ...), but the user can create his own commands at will. For the project I created a own mp3 player so that the program can play songs.<br><br> </p> <div style=\"text-align: center; justify-content: center;\"> <a href=\"https://github.com/Enigma036/Projekt-Sara\" target=\"_blank\"> <button class=\"button_pro_portfolio\">View code</button> </a> </div> </div> <button class=\"button u_projektu\" onclick=\"posunDoPrava()\">></button>"];
projekty.push("<button class=\"button u_projektu\" onclick=\"posunDoLeva()\"><</button> <div class=\"about\"><div style=\"text-align: center;\"> <span class=\"nadpis_portfolio\">Subnet Training</span> </div> <div style=\"text-align: center; margin-top: 20px; margin-bottom: 20px;\"> <span class=\"info_o_projektu\" style=\"background-color: rgb(35, 224, 35); border-color: rgb(35, 224, 35);\">Finished</span> </div> <p> Subnet Training is a learning website for practicing subnetting.<br><br> Once upon a time in our computer networking class we were learning about subnetting. Our tutor mentioned that it would be nice if someone created a website for the \"Maturita\" (Something like UK A-levels) where students could practice subnetting. It seemed to me like an interesting project, so I created the page in one weekend.<br><br> </p> <div style=\"text-align: center; justify-content: center; display: flex;\"> <a href=\"https://github.com/Enigma036/subnet-training\" target=\"_blank\"> <button class=\"button_pro_portfolio\">View code</button> </a> <a href=\"https://subnet.tomashanak.xyz/\" target=\"_blank\"> <button class=\"button_pro_portfolio\">View page</button> </a> </div> </div> <button class=\"button u_projektu\" onclick=\"posunDoPrava()\">></button>");
projekty.push("<button class=\"button u_projektu\" onclick=\"posunDoLeva()\"><</button> <div class=\"about\" > <div style=\"text-align: center;\"> <span class=\"nadpis_portfolio\">HNote</span> </div> <div style=\"text-align: center; margin-top: 20px; margin-bottom: 20px;\"> <span class=\"info_o_projektu\" style=\"background-color: rgb(255, 196, 0); border-color: rgb(255, 196, 0);\">Work in progress</span> </div> <p> HNote is a work in progress project that is being created for the <a href=\"https://tourdeapp.cz/\" target=\"_blank\">&#60;Tour De App&#62;</a> competition.<br><br> It is a page that will serve as a diary for programmers. The frontend of the application will be HTML/CSS/JavaScript and for the backend I will use a Python framework called Flask.<br><br> </p> </div> <button class=\"button u_projektu\" onclick=\"posunDoPrava()\">></button>");

function naPortfolio(){
    let nadpis = document.getElementById("about-profile-text");
    let text = "<button class=\"button\" onclick=\"naAbout()\"><</button><h2 class=\"about\">My <span style=\"color: red;\">portfolio</span></h2><br>";
    nadpis.innerHTML = text;
    nadpis = document.getElementById("profile_content");
    text = projekty[0];
    text += "</div>";
    nadpis.innerHTML = text;
}

function naAbout(){
    let nadpis = document.getElementById("about-profile-text");
    let text = "<h2 class=\"about\">About <span style=\"color: red;\">me</span></h2> <button class=\"button\" onclick=\"naPortfolio()\">></button>";
    nadpis.innerHTML = text;
    nadpis = document.getElementById("profile_content");
    text = "<div class=\"about\"> <p> My name is Tomas Hanak and I'm a software developer and geek from the Czech Republic (For my American friends, it's <a href=\"https://goo.gl/maps/MNy8FrYoWfs732o78\" target=\"_blank\">here</a>).<br><br> My journey in the IT field started in elementary school where I started learning HTML/CSS coding languages. After building a few web pages, I switched to C++ to create simple console applications.<br><br> The biggest leap in my IT career was moving to Technical and Business College, Brno. Here I was introduced to the Python language. It was love at first sight. I created a number of small projects in Python and one big one: \"Voice Assistant for computers in Czech language\" (Microsoft's Cortana is not available in the Czech Republic). During my first two years at school I was further introduced to PHP and JavaScript.<br><br> Nowadays I am studying my third year at the Technical and Business College, Brno and I am newly programming in C#, I can work with databases and I know the basics of computer networks. </p> </div>";
    nadpis.innerHTML = text;
}

function zmenPortfolio(){
    let div_projekty = document.getElementById("profile_content");
    div_projekty.innerHTML = projekty[index];
}

function posunDoPrava(){
    if(index==projekty.length-1){
        index = 0;
    }
    else{
        index++;
    }
    zmenPortfolio();
}

function posunDoLeva(){
    if(index==0){
        index = projekty.length-1;
    }
    else{
        index--;
    }
    zmenPortfolio();
    console.log(index);
}
