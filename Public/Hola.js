


$(function(){

        $("#p1").on('submit',function(e) {
            e.preventDefault();
       
              var Nombre = $('#tx1').val();
              var Apellido  =  $('#tx2').val();
              var Cedula =  $('#tx3').val();
              var Sexo  =   $('#tx4').val();
    
             if(Cedula == null || Cedula.length == 0 || /^\s+$/.test(Cedula)){
            alert('ERROR: EL CAMPO CEDULA TIENE QUE SER OBLIGATORIO');}
            else
            {
                $.ajax({
       
                    url: "/add_datos_Personas",
                    type: "POST",
                    
                    data:{
                    NOMBRE : Nombre,
                    APELLIDO: Apellido,
                    CEDULA : Cedula,
                    SEXO : Sexo},
                    
                    success: function(response)
                    {console.log("TODO BIEN");  
    
                $('#tx1').val("");  
                $('#tx2').val("");
                $('#tx3').val("");}
    
                
                });
        
               
            }
            
            
             })
       
    
     })
    

