//Challenge1//

function Text(){
    document.getElementById("user").innerHTML="Sahanashre"
    }
    window.addEventListener("load",Text);
    
    //Challenge2//
    function backgroundColor(){
      document.getElementById("btn-click").style.backgroundColor = "yellow";
    }
    document.getElementById("btn-click").onclick = backgroundColor;
    
    
    //Challenge3//
    function makeSentence(){
      const a = document.getElementById("noun").value;
      const b = document.getElementById("verb").value;
      const c = document.getElementById("adverb").value;
      const sum = a + " "+ b +" "+ c;
      const d = document.getElementById("statement").innerHTML=sum;
    }
    const n = document.getElementById("build-button");
    n.addEventListener("click",makeSentence);
    
    //Challenge4.1//
    const gp = document.getElementById("grandparent");
    const p = document.getElementById("parent");
    const c = document.getElementById("child");
    c.addEventListener("click",function(){
      console.log("Child clicked")
    })
    p.addEventListener("click",function(){
      console.log("Parent clicked")
    })
    gp.addEventListener("click",function(){
      console.log("Grandparent clicked")
    })
    
    //Challenge4.2//
    c.addEventListener("click",function(onclick){
      console.log("Child clicked")
    },true)
    p.addEventListener("click",function(onclick){
      console.log("Parent clicked")
    },true)
    gp.addEventListener("click",function(onclick){
      console.log("Grandparent clicked")
    },true)
    
    //Challenge5//
    var saha = document.getElementById("category");
      
      saha.addEventListener("click",(e)=>{
        console.log(e.target.id)
      })
    
    
    
    
    
    
    
    