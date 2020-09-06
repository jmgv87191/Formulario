$(document).ready(function(){

    var ano = function() {
        var fecha = new Date();
        var ano = fecha. getFullYear();
        return ano;
    }

    $("#btnCostos1").on("click",function(){
        $("#descripcion").attr("value","Casa (rural)");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","seleccionado");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos2").on("click",function(){
        $("#descripcion").attr("value","Casa (urbana)");
        $("#costo").attr("value","$295.31");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","seleccionado");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos3").on("click",function(){
        $("#descripcion").attr("value","01 - 05 Viv.");
        $("#costo").attr("value","$485.77");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","seleccionado");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos4").on("click",function(){
        $("#descripcion").attr("value","06 - 10 Viv.");
        $("#costo").attr("value","$728.69");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","seleccionado");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos5").on("click",function(){
        $("#descripcion").attr("value","11 - 15 Viv.");
        $("#costo").attr("value","$971.58");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","seleccionado");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");

        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos6").on("click",function(){
        $("#descripcion").attr("value","16 - 20 Viv.");
        $("#costo").attr("value","$1,214.47");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","seleccionado");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos7").on("click",function(){
        $("#descripcion").attr("value","21 - 30 Viv.");
        $("#costo").attr("value","$1,821.70");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","seleccionado");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos8").on("click",function(){
        $("#descripcion").attr("value","31 - 50 Viv.");
        $("#costo").attr("value","$2,428.94");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","seleccionado");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos9").on("click",function(){
        $("#descripcion").attr("value","51 - 100 Viv.");
        $("#costo").attr("value","$3,036.17");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","seleccionado");
        $("#tr11").attr("class","");
        $(".datosGenerales").css({
            "display": "flex"
        });
    });

    $("#btnCostos10").on("click",function(){
        $("#descripcion").attr("value",">100");
        $("#costo").attr("value","$3,643.41");
        $("#tr2").attr("class","");
        $("#tr3").attr("class","");
        $("#tr4").attr("class","");
        $("#tr5").attr("class","");
        $("#tr6").attr("class","");
        $("#tr7").attr("class","");
        $("#tr8").attr("class","");
        $("#tr9").attr("class","");
        $("#tr10").attr("class","");
        $("#tr11").attr("class","seleccionado");
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