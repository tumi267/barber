let moduleoOpen=document.querySelectorAll('.btn');
let r = document.querySelector(':root');
 
for (let i = 0; i < moduleoOpen.length; i++) {
    moduleoOpen[i].addEventListener('click',function(){    
        switch(this.id) {
            case 'A':
                r.style.setProperty(`--moduleCard1`, 'block');  
              break;
            case 'S':
                r.style.setProperty(`--moduleCard2`, 'block');  
              break;
              case 'P':
                r.style.setProperty(`--moduleCard3`, 'block');  
              break;
              case 'O':
                r.style.setProperty(`--moduleCard4`, 'block');  
              break;
              case 'B':
                r.style.setProperty(`--moduleCard5`, 'block');  
              break;
              case 'J':
                r.style.setProperty(`--moduleCard6`, 'block');  
              break;
              case 'B1':
                r.style.setProperty(`--moduleCard7`, 'block'); 
                r.style.setProperty(`--moduleCard2`, 'none');  
              break;
              case 'H':
                r.style.setProperty(`--moduleCard8`, 'block');
                r.style.setProperty(`--moduleCard2`, 'none');   
              break;
              case 'F':
                r.style.setProperty(`--moduleCard9`, 'block'); 
                r.style.setProperty(`--moduleCard2`, 'none');  
              break;
              case 'closeA':
                r.style.setProperty(`--moduleCard1`, 'none');  
              break;
            case 'closeS':
                r.style.setProperty(`--moduleCard2`, 'none');  
              break;
              case 'closeP':
                r.style.setProperty(`--moduleCard3`, 'none');  
              break;
              case 'closeO':
                r.style.setProperty(`--moduleCard4`, 'none');  
              break;
              case 'closeB':
                r.style.setProperty(`--moduleCard5`, 'none');  
              break;
              case 'closeJ':
                r.style.setProperty(`--moduleCard6`, 'none');  
              break;
              case 'closeB1':
                r.style.setProperty(`--moduleCard7`, 'none');
                r.style.setProperty(`--moduleCard2`, 'block');   
              break;
              case 'closeH':
                r.style.setProperty(`--moduleCard8`, 'none'); 
                r.style.setProperty(`--moduleCard2`, 'block');  
              break;
              case 'closeF':
                r.style.setProperty(`--moduleCard9`, 'none'); 
                r.style.setProperty(`--moduleCard2`, 'block');  
              break;
            default:
          }
    })
}