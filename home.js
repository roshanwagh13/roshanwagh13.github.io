
function func1(){
    document.getElementById("menu1").style.display="inline-block";
}
function func2(){
    document.getElementById("menu1").style.display="none";
}
function func3(){
    document.getElementById("menu2").style.display="inline-block";
}
function func4(){
    document.getElementById("menu2").style.display="none";
}
function func5(){
    document.getElementById("content1").style.background="white";
}
function func6(){
    document.getElementById("content2").style.background="white";
}
function func7(){
    document.getElementById("content3").style.background="white";
}
function func8(){
    document.getElementById("content4").style.background="white";
}
function func9(){
    document.getElementById("content5").style.background="white";
}
function func10(){
    document.getElementById("content6").style.background="white";
}

function func11(){
    document.getElementById("content1").style.background="gainsboro";
}function func12(){
    document.getElementById("content2").style.background="gainsboro";
}function func13(){
    document.getElementById("content3").style.background="gainsboro";
}function func14(){
    document.getElementById("content4").style.background="gainsboro";
}function func15(){
    document.getElementById("content5").style.background="gainsboro";
}function func16(){
    document.getElementById("content6").style.background="gainsboro";
}

function func17(){
    document.getElementById("t-area").style.display="block";

}
var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";
function toggle_menu()
{
    if(menuList.style.maxHeight=="0px")
        menuList.style.maxHeight="130px";
    else
        menuList.style.maxHeight="0px";    
}