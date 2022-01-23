let ben=document.getElementById("bbtn");
let primary=document.getElementById("primary")
let gwen=document.getElementById("ele1")
let kevin=document.getElementById("ele2")
let max=document.getElementById("nav")
let peter=document.getElementById("navt")
let spider=document.getElementById("nnat")
let fourarms=document.getElementById("yes")
let sixarms=document.getElementById("no")

fourarms.addEventListener('click',function(){
   primary.style.display="none"
   document.body.style.backgroundImage="url('happy.jpg')"
   document.body.style.backgroundSize="100vw 100vh"


   
})
sixarms.addEventListener('click',function(){
   primary.style.display="none"
   document.body.style.backgroundImage="url('cry.jpg')"
   document.body.style.backgroundSize="100vw 100vh"

   
})



ben.addEventListener('click',function(){
   if(document.body.style.backgroundColor!="black"){
      document.body.style.backgroundColor="black"
      ben.innerHTML="Nah, I don't like it"
      document.body.style.color="yellow"
      gwen.style.borderColor="orange"
      kevin.style.borderColor="orange"
      peter.style.backgroundColor="yellow"
      peter.style.color="black"
      spider.style.backgroundImage="url('color2.jpg')";
        gwen.style.borderColor="yellow"
         gwen.style.backgroundColor="black"
         gwen.style.color="yellow"
      

         
      }
   else {
      document.body.style.backgroundColor="white"
      ben.innerHTML="Try out the dark theme"
      document.body.style.color="black"
      kevin.style.borderColor="black"
      peter.style.backgroundColor="brown"
      gwen.style.borderColor="black"
      gwen.style.backgroundColor="white"
      gwen.style.color="black"
      peter.style.color="white"
      spider.style.backgroundImage="url('color.jpg')";
      


   }
}
)
peter.addEventListener('click',function(){
   if(max.style.display!="none"){
       max.style.display="none"
       peter.innerHTML="open the navbar"
}
else {
   max.style.display="flex"
   peter.innerHTML="close the navbar"

}
})

gwen.addEventListener('mouseover',function(){
   if(document.body.style.backgroundColor!="black"){
      gwen.style.borderColor="black"
      gwen.style.backgroundColor="chartreuse"
      gwen.style.color="black"
   }
   else{
      gwen.style.borderColor="red"
      gwen.style.backgroundColor="black"
      gwen.style.color="red"
   }
  
 })
 gwen.addEventListener('mouseout',function(){
    if(document.body.style.backgroundColor!="black"){
      gwen.style.borderColor="black"
      gwen.style.backgroundColor="white"
      gwen.style.color="black"
     
    }
    else{
      gwen.style.borderColor="yellow"
      gwen.style.backgroundColor="black"
      gwen.style.color="yellow"
    }
  

 })
