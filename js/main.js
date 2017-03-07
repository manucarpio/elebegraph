$(document).ready(function () {

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

          $('#bnt_sumit').click(function(ev){
      
          ev.preventDefault();
          console.log(this);

          $('#sumit_btn').fadeOut(1000);

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
                      console.log($(".form-group input"));
                      $(".form-group").find("input , textarea").val("");
                      $('.res_contacto h3').text("¡Gracias por contactarnos!");
                      $('.res_contacto p').text("Pronto recibirás una respuesta.Que tengas un buen día");
                      $('.res_contacto').fadeIn(1000).delay(2500).fadeOut(500, function(){
                        $('#sumit_btn').fadeIn(100);
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
                        $('#sumit_btn').fadeIn(100);
                      });
                    };
                    
                  }
            });
            }
          });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

});
