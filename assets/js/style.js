function view_micro_menu(){
    let menu=document.getElementById("icon-menu-ul");
    console.log("click");
    if(menu.style.display=="none")
        menu.style.display="block";  
    else
    menu.style.display="none";
}