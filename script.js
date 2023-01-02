let index = 0;
let projekty = ["<button class=\"button u_projektu\" onclick=\"posunDoLeva()\"><</button> <div class=\"about\"><div style=\"text-align: center;\"> <span class=\"nadpis_portfolio\">Project Sara</span> </div> <div style=\"text-align: center; margin-top: 20px; margin-bottom: 20px;\"> <span class=\"info_o_projektu\" style=\"background-color: rgb(35, 224, 35); border-color: rgb(35, 224, 35);\">Finished</span> </div> <p> \"Project Sara\" is my first major Python project. It is a voice assistant for computers, which is completely in Czech (most voice assistants in the Czech Republic do not speak Czech).<br><br> The program is created using the SpeechRecognition library and the GUI is made in Tkinter. Project Sara contains predefined commands (turn on the application, search, find, find information ...), but the user can create his own commands at will. For the project I created a own mp3 player so that the program can play songs.<br><br> </p> <div style=\"text-align: center; justify-content: center;\"> <a href=\"https://github.com/Enigma036/Projekt-Sara\" target=\"_blank\"> <button class=\"button_pro_portfolio\">View code</button> </a> </div> </div> <button class=\"button u_projektu\" onclick=\"posunDoPrava()\">></button>"];
projekty.push("<button class=\"button u_projektu\" onclick=\"posunDoLeva()\"><</button> <div class=\"about\"><div style=\"text-align: center;\"> <span class=\"nadpis_portfolio\">Subnet Training</span> </div> <div style=\"text-align: center; margin-top: 20px; margin-bottom: 20px;\"> <span class=\"info_o_projektu\" style=\"background-color: rgb(35, 224, 35); border-color: rgb(35, 224, 35);\">Finished</span> </div> <p> Subnet Training is a learning website for practicing subnetting.<br><br> Once upon a time in our computer networking class we were learning about subnetting. Our tutor mentioned that it would be nice if someone created a website for the \"Maturita\" (Something like UK A-levels) where students could practice subnetting. It seemed to me like an interesting project, so I created the page in one weekend.<br><br> </p> <div style=\"text-align: center; justify-content: center; display: flex;\"> <a href=\"https://github.com/Enigma036/subnet-training\" target=\"_blank\"> <button class=\"button_pro_portfolio\">View code</button> </a> <a href=\"https://subnet.tomashanak.xyz/\" target=\"_blank\"> <button class=\"button_pro_portfolio\">View page</button> </a> </div> </div> <button class=\"button u_projektu\" onclick=\"posunDoPrava()\">></button>");
projekty.push("<button class=\"button u_projektu\" onclick=\"posunDoLeva()\"><</button> <div class=\"about\" > <div style=\"text-align: center;\"> <span class=\"nadpis_portfolio\">HNote</span> </div> <div style=\"text-align: center; margin-top: 20px; margin-bottom: 20px;\"> <span class=\"info_o_projektu\" style=\"background-color: rgb(255, 196, 0); border-color: rgb(255, 196, 0);\">Work in progress</span> </div> <p> HNote is a work in progress project that is being created for the <a href=\"https://tourdeapp.cz/\" target=\"_blank\">&#60;Tour De App&#62;</a> competition.<br><br> It is a page that will serve as a diary for programmers. The frontend of the application will be HTML/CSS/JavaScript and for the backend I will use a Python framework called Flask.<br><br> </p> </div> <button class=\"button u_projektu\" onclick=\"posunDoPrava()\">></button>");

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
