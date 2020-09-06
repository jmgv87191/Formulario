
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
                    $host ="localhost";
                    $user ="root";
                    $pass ="";
                    $db="formulario2";

                    //funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
                    $con = mysqli_connect($host,$user,$pass,$db)or die("Problemas al Conectar");
                    mysqli_select_db($con,$db)or die("problemas al conectar con la base de datos");


                    $sql=" SELECT id from alta
                            order by id desc
                            limit 1";

                    $result=mysqli_query($con,$sql);

                    $mostrar=mysqli_fetch_array($result)
                ?>

                <?php 
                    echo"<p>Datos Guardados Correctamente</p>";
                    echo " Número de registro: ". $mostrar["id"]."<br><button><a href='../index.html'>Regresar</a></button>";
                   // echo  "<button><a target='blank' href='../vistaPrevia/vistaPrevia.php'>Vista previa</a></button>";
                ?>

            </div>
        </section>
    </div>

</body>
</html>




