$(document).ready(function(){



    var ano = function() {
        var fecha = new Date();
        var ano = fecha. getFullYear();
        return ano;
    }

    $("#btnCostos1").on("click",function(){
        $("#descripcion").attr("value","Fusión de Predio");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","seleccionado");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos2").on("click",function(){
        $("#descripcion").attr("value","Escrituración");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","seleccionado");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos3").on("click",function(){
        $("#descripcion").attr("value","Serv.p/Casa Hab.");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","seleccionado");
        $("#tr5").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos4").on("click",function(){
        $("#descripcion").attr("value","Subdivisión");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","seleccionado");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#limpiar").on("click",function(){
        $("#costo").attr("value","");
        $("#tipoTramite").attr("value","");
    })


    $("#año").attr({'value': ano});

    $("#enviar").on("click",function(){
        $("#colonia").attr("value",function(){
            let colonia =  $("#colonia").value;
            if(colonia=="San Juan de la Costa"){
                colonia="1";
            }
        })

    })

});