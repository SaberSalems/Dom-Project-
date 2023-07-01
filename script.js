//my beautiful script

var prix = document.querySelectorAll('.PrixProduit');
var quantite = document.querySelectorAll('.QuantiteProduit');
var pluss = document.querySelectorAll('.plus');
var moinss = document.querySelectorAll('.moins');
var razs = document.querySelectorAll('.raz');
var heart = document.querySelectorAll('.fa')
var PT = document.querySelectorAll('.PrixTotal');
var arts = document.querySelectorAll('.art');
console.log(heart);

prix.forEach((e,i)=>{

  console.log(pluss[i]);
// +++
    pluss[i].addEventListener ('click', ()=> { 
    quantite[i].value = parseInt(quantite[i].value)+1;
    prix[i].innerHTML = parseInt(prix[i].innerHTML)+100;
PT.innerHTML = parseInt(PT.innerHTML) + 100;
  
  })

//---

  moinss[i].addEventListener ('click', ()=> { 
    if ( quantite[i].value > 0 ) {
      quantite[i].value = parseInt(quantite[i].value)-1;
      prix[i].innerHTML = parseInt(prix[i].innerHTML)-100;
      PT.innerHTML = parseInt(PT.innerHTML) - 100;
    }
    })
  

//remove

 razs[i].addEventListener ('click', ()=> {
  PT.innerHTML = parseInt(PT.innerHTML) - parseInt(prix[i].innerHTML);
  arts[i].remove();

    })


   //heart

  heart[i].addEventListener ('click', ()=> {

    if (heart[i].className == "fa fa-heart") {
      heart[i].className = "fa fa-heart-o";
    }
      
   else 
   {
    heart[i].className = "fa fa-heart";
   }

  })
})


let total=Array.from(document.getElementsByClassName('PrixProduit'))

function calculateSum() {
    let somme=0;
    for (let i = 0; i < PrixProduit.length; i++) {
        total[i].value=Number(prix[i].innerText)*Number(PrixTotal[i].innerText);
        somme += Number(prix[i].innerText)*Number(PrixTotal[i].innerText);
        console.log("s"+somme)
totalfin.value=somme;
    }
    
}






