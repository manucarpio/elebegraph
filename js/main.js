$(document).ready(function () {



//scrollReveal
var fooReveal = {
  delay    : 400,
  distance : '90px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1

};

window.sr = ScrollReveal();
sr.reveal('.foo', fooReveal);
sr.reveal('#arte_inicio', { delay: 500, scale: 0.9 });
sr.reveal('#button_down', { delay: 700, scale: 0.9 });
sr.reveal('#arte_bienvenido', { delay: 800, scale: 0.9 });
sr.reveal('#empre', { delay: 800, scale: 0.9 });
sr.reveal('#empre_act', { delay: 800, scale: 0.9 });
sr.reveal('#texto_cont', { delay: 800, scale: 0.9 });



// oculta el menu al dar click 
 $(function(){ 
     var navMain = $("#bs-example-navbar-collapse-1");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

    var frm = $('#form_one');

    // frm.validationEngine();


    console.log("testing");
    console.log(frm);

    // $('#bnt_sumit').click(function(event){
    //   event.preventDefault();
    //   console.log("que pasa");
    // });

        // frm.submit(function (ev)
        // {

          $('.send').click(function(ev){
          
          ev.preventDefault();
          console.log(this);

          $('.send').fadeOut(1000);

          if (frm.validationEngine('validate'))
          {
     
            $.ajax(
            {
                  cache: false,
                  contentType: false,
                  processData: false,
                  type: frm.attr('method'),
                  url: frm.attr('action'),
                  data: new FormData(frm[0]),
                  success: function (data) 
                  { 
                    console.log(data);
                    if (data == 1) {
                     


                      $('#id').css(
                        {
                          '-moz-transform':'rotateX(90deg',
                            '-webkit-transform':'rotateX(90deg)',
                            'transform':'rotateX(90deg)'
                        });
                      $(".text").addClass("active");
                      $(".send").addClass("active");
                      $(".loader").addClass("active");
                      $(".send").delay(1700).queue(function(){
                            $(this).addClass("finished").clearQueue();
                        });
                      
                      $(".done").delay(1600).queue(function(){
                            $(this).addClass("active").clearQueue();
                        });
                      console.log($(".form-group input"));
                      $(".form-group").find("input , textarea").val("");
                      $('.res_contacto h3').text("¡Gracias por contactarnos!");
                      $('.res_contacto p').text("Pronto recibirás una respuesta.Que tengas un buen día");
                      $('.res_contacto').fadeIn(1000).delay(2500).fadeOut(500, function(){
                        $('.send').fadeIn(100);
                      });

                      

                    }
                    else{

                     
                       $('#id').css(
                        {
                          '-moz-transform':'rotateX(90deg',
                            '-webkit-transform':'rotateX(90deg)',
                            'transform':'rotateX(90deg)'
                        });
                      $('.back-face').text("Intenta mas tarde");
                      $('.back-face').css("background-color","red");
                      $('.back-face').attr("data-icon","x");

                      $('.res_contacto h3').text("¡Lo sentimos ha ocurrido un problema!");
                      $('.res_contacto p').text("No se ha podido enviar tu correo.<br>Intentalo más tarde. <br />¡Gracias!");
                      $('.res_contacto').fadeIn(1000).delay(2500).fadeOut(500, function(){
                        $('.send').fadeIn(100);
                      });
                    };
                    
                  }
            });
            }
          });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   


  
    // Activate Carousel
    $("#carousel_home").carousel();
     var el_actual=$("#banner_amenidades");


           el_actual.find(".tapete").css({"margin-top":"-100px"});
           el_actual.find(".tapete").animate(
           {
            "margin-top":"0px",

           }, 1000,"easeOutBack"

            );
    

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#carousel_home").carousel(0);
    });
    $(".item2").click(function(){
        $("#carousel_home").carousel(1);
    });
    $(".item3").click(function(){
        $("#carousel_home").carousel(2);
    });
    $(".item4").click(function(){
        $("#carousel_home").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#carousel_home").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel_home").carousel("next");
    });

    $("#carousel_home").on('slide.bs.carousel', function (event) {

          console.log("*****prueba JS carousel*****");
          console.log($(event.relatedTarget));

           var el_actual=$(event.relatedTarget);


           el_actual.find(".tapete").css({"margin-top":"-100px"});


           el_actual.find(".img1").hide().fadeIn(6000, "easeOutBack");
           el_actual.find(".img2").hide().fadeIn(6000, "easeOutBack");
           el_actual.find(".img3").hide().fadeIn(6000, "easeOutBack");
           el_actual.find(".fondo").hide().fadeIn(2000, "easeOutBack");
           
        
           el_actual.find(".tapete").delay(500).animate(
           {
            "margin-top":"0px",

           }, 1000,"easeOutBack"

            );
           
    });

});
// fin document ready