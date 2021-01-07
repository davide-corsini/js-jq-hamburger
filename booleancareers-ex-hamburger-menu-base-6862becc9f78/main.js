// Hamburger menu:
// mostrare / nascondere il menu principale
//     (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:

//Metto tutto in document ready
//icona su cui cliccare ----> <i class="fas fa-bars"></i>
//METODO 1
$(document).ready(function(){
    var myMenu = $('.header-right > a i.fas.fa-bars');
    var open = $('div.hamburger-menu');

    myMenu.click(function(){
        open.show()
    })

    open.click(function(){
        open.hide()
    })
})


//Metodo #2


        // $(document).ready(function () {
    //     var message = false;
    //     var mobileMenu = $('div.hamburger-menu');

    //     $('i.fa-bars').click(function(){


    //         if(message == true){
    //             mobileMenu.fadeOut(1000);
    //             mobileMenu.
    //             message = false;
    //             console.log(message);
    //         }
    //         else{
    //             mobileMenu.fadeIn(1000);
    //             message = false;
    //             console.log(message);
    //         }



    //     })

    // });

    