// window.addEventListener("scroll",()=>{
//     let nav_div=document.getElementById("nav-div");
//     nav_div.classList.toggle("menu-ul",window.scrollY>0);
// })


function view_micro_menu(){
    let menu=document.getElementById("icon-menu-ul");
    console.log("click");
    if(menu.style.display=="none")
        menu.style.display="block";  
    else
    menu.style.display="none";
}
function hw_over(){
    let hw=document.getElementById("hw");
        hw.src="/images/wings-images/hw-desc.jpg";
}
function hw_out(){
    let hw=document.getElementById("hw");
    hw.src="/images/wings-images/hw.jpg";
}
function sw_over(){
    let sw=document.getElementById("sw");
    sw.src="/images/wings-images/sw-desc.jpg";
}
function sw_out(){
    let sw=document.getElementById("sw");
    sw.src="/images/wings-images/sw.jpg";
}
function design_over(){
    let design=document.getElementById("design");
    design.src="/images/wings-images/design-desc.jpg";

}
function design_out(){
    let design=document.getElementById("design");
    design.src="/images/wings-images/design.jpg";
}
