<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$data = array();

// Ambil data dari tabel mahasiswa
$query = mysqli_query($kon, "SELECT * FROM tbl_mhs_adit ORDER BY id");

if ($query) {
    while ($rows = mysqli_fetch_array($query)) {
        $data[] = array(
            'no' => $rows['id'], // Assuming 'id' is the column for No
            'reg_id' => $rows['reg_id'],
            'password' => $rows['password'],
            'email' => $rows['email'],
            'nama_lengkap' => $rows['nama_lengkap'],
            'status' => $rows['status']
        );
    }

    $result = json_encode(array('success' => true, 'result' => $data));
    echo $result;
} else {
    $error_message = mysqli_error($kon);
    $result = json_encode(array('success' => false, 'error' => $error_message));
    echo $result;
}
?>
