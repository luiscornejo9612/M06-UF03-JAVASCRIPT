<?php
// Verifica si se enviaron archivos
// if(isset($_FILES['inputFiles'])) {
//     $totalFiles = count($_FILES['inputFiles']['name']);
//     for($i = 0; $i < $totalFiles; $i++) {
//         $tmpFilePath = $_FILES['inputFiles']['tmp_name'][$i];
//         $fileName = $_FILES['inputFiles']['name'][$i];
//         $fileSize = $_FILES['inputFiles']['size'][$i];
//         $fileType = $_FILES['inputFiles']['type'][$i];
//         $fileError = $_FILES['inputFiles']['error'][$i];

//         // Procesar o mostrar la información del archivo
//         echo "File Name: $fileName <br>";
//         echo "File Size: $fileSize <br>";
//         echo "File Type: $fileType <br>";
//         echo "Temporary File Path: $tmpFilePath <br>";
//         echo "<hr>";
//     }
// } else {
//     echo "No se han enviado archivos.";
// }


print_r($_FILES["inputFiles"]);
for ($i=0; $i<count($_FILES["inputFiles"]["name"]); $i++) {
echo $_FILES["inputFiles"]["tmp_name"][$i] .'<br>';
echo $_FILES["inputFiles"]["name"][$i] .'<br>';
}
?>
