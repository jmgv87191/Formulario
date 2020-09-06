<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/vistaPrevia/estilos.css">
    <script src="../js/jquery.min.js"></script>
    <script src="../js/scriptsImg.js"></script>
</head>

<body>

    <div class="contenedor">

        <?php
        $host ="localhost";
        $user ="root";
        $pass ="";
        $db="formulario2";

        //funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
        $con = mysqli_connect($host,$user,$pass,$db)or die("Problemas al Conectar");
        mysqli_select_db($con,$db)or die("problemas al conectar con la base de datos");


        $sql=" SELECT * from alta
                order by id desc
                limit 1";

        $result=mysqli_query($con,$sql);

        $mostrar=mysqli_fetch_array($result)

    ?>

        <div class="contImg">
            <img src="../img/form.jpg" alt="">

            <div class="uno">
                <input type="text" class="input1" name="" id="" value=" <?php  echo  $mostrar["CostoTramite"];?>" readonly>
                <input type="text" class="input1" name="" id="" readonly>
                <input type="text" class="input1" name="" id="" readonly>
                <input type="text" class="input1" name="" id="" readonly>
                <input type="text" class="input1" name="" id="" value=" <?php  echo  $mostrar["SectorUsuario"];?>" readonly>
            </div>

            <div class="dos">
                <input type="text" name="" id="dos" value=" <?php  echo  $mostrar["ServicioSolicitado"];?>" readonly>
            </div>

            <div class="tres">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["CcatUsuario"];?>" readonly>
            </div>

            <div class="cuatro">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["Calles"];?>" readonly>
            </div>

            <div class="cinco">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["Colonia"];?>" readonly>
            </div>

            <div class="seis">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["TramiteSolicitado"];?>" readonly>
            </div>

            <div class="siete">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["NumEmpleados"];?>" readonly>
            </div>

            <div class="ocho">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["NombUsuario"];?>" readonly>
            </div>

            <div class="nueve">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["Telefono"];?>" readonly>
            </div>

            <div class="diez">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["DomNotificaciones"];?>" readonly>
            </div>

            <div class="once">
                <input type="text" name="" id="" value=" <?php  echo  $mostrar["Correo"];?>" readonly>
            </div>



        </div>

    </div>
</body>
</html>

