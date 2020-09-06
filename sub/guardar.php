
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/imagen/estilos.css">
    <script src="../js/jquery.min.js"></script>
    <script src="../js/scripts.js"></script>
</head>

<body>
    <div class="contenedor">
        <section>
            <div class="mensaje">
                <?php
                    //conectamos Con el servidor
                    $host ="localhost";
                    $user ="root";
                    $pass ="";
                    $db="formulario2";
                    //funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
                    $con = mysqli_connect($host,$user,$pass,$db)or die("Problemas al Conectar");
                    mysqli_select_db($con,$db)or die("problemas al conectar con la base de datos");

                    //recuperar las variables
                    $CostoTramite=$_POST['costo'];
                    $NoSolicitud=$_POST['costo2'];
                    $IdTramite=$_POST['tipoTramite2'];
                    $SectorUsuario=$_POST['sector'];
                    $NomTramite=$_POST['tipoTramite'];
                    $año=$_POST['año'];
                    $ServicioSolicitado=$_POST['servSol'];
                    $CcatUsuario=$_POST['claveCat'];
                    $Calles=$_POST['calle'];
                    $Colonia=$_POST['colonia'];
                    $TramiteSolicitado=$_POST['descripcion'];
                    $NumEmpleados=$_POST['NumEmpleados'];
                    $superficiePredio=$_POST['superficiePredio'];
                    $NombUsuario=$_POST['propietario'];
                    $Telefono=$_POST['telefono'];
                    $RepresentanteLegal=$_POST['repLeg'];
                    $DomNotificaciones=$_POST['donNot'];
                    $Correo=$_POST['correo'];
                    $descripcionTramite=$_POST['descripcionTramite'];

                    $sql= 'INSERT INTO alta (CostoTramite,NoSolicitud,IdTramite,SectorUsuario,NomTramite,año,ServicioSolicitado,
                    CcatUsuario,Calles,Colonia,TramiteSolicitado,NumEmpleados,superficiePredio,NombUsuario,Telefono,RepresentanteLegal,
                    DomNotificaciones,Correo,descripcionTramite)
                    VALUES (\''.$CostoTramite.'\',\''.$NoSolicitud.'\',\''.$IdTramite.'\',\''.$SectorUsuario.'\',\''.$NomTramite.'\',\''.$año.'\',
                    \''.$ServicioSolicitado.'\',\''.$CcatUsuario.'\',\''.$Calles.'\',\''.$Colonia.'\',\''.$TramiteSolicitado.'\',
                    \''.$NumEmpleados.'\',\''.$superficiePredio.'\',\''.$NombUsuario.'\',
                    \''.$Telefono.'\',\''.$RepresentanteLegal.'\',\''.$DomNotificaciones.'\',\''.$Correo.'\',\''.$descripcionTramite.'\')';

                     //ejecutamos la sentencia de sql
                     $ejecutar=mysqli_query($con,$sql);
                     //verificamos la ejecucion
                     if(!$ejecutar){
                      echo"Hubo Algun Error";
                     }else{
                      header('Location: guardar2.php');
                    
                     }

                ?>
            </div>
        </section>
    </div>




</body>
</html>


