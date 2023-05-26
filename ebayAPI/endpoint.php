<?php
header('HTTP/1.1 200 OK');
header("Content-Type: application/json; charset=utf-8");
$verificationToken = 'R6z3GpKvE3qaTy29pX2D8ekZbR8PxkFqJn4RqPYs';
$endpoint = 'https://https://taisei-shirai.github.io//ebayApi/endpoint.php';

if(isset($_GET['challenge_code'])){
    $challengeCode = $_GET['challenge_code'];
    $hash = hash_init('sha256');

    hash_update($hash, $challengeCode);
    hash_update($hash, $verificationToken);
    hash_update($hash, $endpoint);

    $responseHash = hash_final($hash);
    echo json_encode(array("challengeResponse"=>$responseHash));
}
?>
