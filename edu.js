/** modal **/
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const openModalButton = document.querySelector('.open-modal')
const closeModalButton = document.querySelector('.modal__close')

openModalButton.addEventListener('click', e => {
  e.preventDefault()
  
  modal.classList.add('modal--open')
  body.classList.add('body-lock')
})

closeModalButton.addEventListener('click', e => {
  e.preventDefault()
  
  modal.classList.remove('modal--open')
  body.classList.remove('body-lock')
})

$(document).on('click', function(e){
    hideModals;
})

/* modal slide*/


/* filter */
 let filter = $('[data-filter]');
    
    filter.on('click', function(event){
             
        event.preventDefault();
        let cat = $(this).data('filter');  

        if(cat == 'all'){

            $("[data-cat]").removeClass('hide');

        }else{
            
            $("[data-cat]").each(function(){            
                let workCat = $(this).data('cat');
                if(workCat != cat){
                    $(this).addClass('hide');
                }else   
                    $(this).removeClass('hide');     
            });        
        }
    
    });