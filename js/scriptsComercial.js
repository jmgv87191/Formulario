$(document).ready(function(){

    var ano = function() {
        var fecha = new Date();
        var ano = fecha. getFullYear();
        return ano;
    }

    $("#btnCostos1").on("click",function(){
        $("#descripcion").attr("value","Locales Comerc.");
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
        $("#descripcion").attr("value","Deptos.p/Renta");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","seleccionado");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#limpiar").on("click",function(){
        $("#costo").attr("value","");
        $("#tipoTramite").attr("value","");
    })

    $("#año").attr({'value': ano});


});