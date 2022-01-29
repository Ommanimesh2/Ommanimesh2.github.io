let item1=document.getElementById("item1")
let item2=document.getElementById("item2")
let item3=document.getElementById("item3")
let item4=document.getElementById("item4")
let register=document.getElementById("register")
let login=document.getElementById("login")
let textarea=document.getElementById("textarea")
let search=document.getElementById("searchbtn")
let dpdwn1=document.getElementById("dropdown-item1")
let dpdwn2=document.getElementById("dropdown-item2")
let dpdwn=document.getElementById("dropdown")
let newitems=document.getElementById("newitems")
let navitems=document.querySelectorAll(".navitems")
let navtoggle=document.querySelector(".navt");


navtoggle.addEventListener("click",()=>{
    console.log("here")
    navitems.forEach((item)=>{
        if(item.style.display!="none"){
            item.style.display="none"
            navtoggle.classList.add("fa-align-justify")
            navtoggle.classList.remove("fa-times")
        }
        else{
            item.style.display="block"
            navtoggle.classList.remove("fa-align-justify")
            navtoggle.classList.add("fa-times")
        }
    })
})
search.addEventListener("click",()=>{
    if(textarea.style.display!="block"){
        search.classList.remove("fa-search")
        search.classList.add("fa-times")
        search.style.left=40+"vw";
        search.style.top=1+"vh";
        textarea.style.display="block"
     item1.style.display="none"
     item2.style.display="none"
     item3.style.display="none"
     item4.style.display="none"
     register.style.display="none"
     login.style.display="none"
    }
    
    else {
        search.style.left=0;

        search.classList.remove("fa-times")
        search.classList.add("fa-search")
        textarea.style.display="none"
        item1.style.display="block"
        item2.style.display="block"
        item3.style.display="block"
        item4.style.display="block"
        register.style.display="block"
        login.style.display="block"
    }
})
item1.addEventListener("mouseleave",()=>{
 if( newitems.style.display!="block")
    {
        newitems.style.display="block"
   
}
    else{
        newitems.style.display="none"
    }
})
item1.addEventListener("mouseenter",()=>{
 if( newitems.style.display!="block")
    {
        newitems.style.display="block"
  
}
    else{
        newitems.style.display="none"
    }
})
