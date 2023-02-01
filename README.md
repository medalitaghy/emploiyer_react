# emploiyer_react

<?php 
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db   = "gestionEmp";

$cnx = mysqli_connect($host,$user,$pass,$db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'detail':detail();break;
    case 'update':update();break;
    case 'delete':delete();break;
}

function normal(){
    global $cnx;
    $sql1 = "select * from users order by id desc";
    $q1 = mysqli_query($cnx,$sql1);
    while($r1 = mysqli_fetch_array($q1)){
      $hasil[] = array(
        'id' => $r1['id'],
        'username' => $r1['username'],
        'email' => $r1['email'],
        'password' => $r1['password']
    );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $cnx;
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $hasil = "aucun data insere ";
    if($username and $email and $password){
        $sql1 = "insert into users(username,email,password) values ('$username','$email','$password')";
        $q1 = mysqli_query($cnx,$sql1);
        if($q1){
            $hasil = "insertion est succse ";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail(){
    global $cnx;
    $id = $_GET['id'];
    $sql1 = "select * from users where id = '$id'";
    $q1 = mysqli_query($cnx,$sql1);
    while($r1 = mysqli_fetch_array($q1)){
      $hasil[] = array(
        'id' => $r1['id'],
        'username' => $r1['username'],
        'email' => $r1['email'],
        'password' => $r1['password']
    );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update(){
    global $cnx;
    $id = $_GET['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    if($username){
        $set[] = "username='$username'";
    }
    if($email){
        $set[] = "email='$email'";
    }
    if($password){
      $set[] = "password='$password'";
    }
    $hasil = "Gagal melakukan update data";
    if($username or $password or $email ){
        $sql1 = "update users set ".implode(",",$set)." where id = '$id'";
        $q1 = mysqli_query($cnx,$sql1);
        if($q1){
            $hasil = "data est mise a joure ";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $cnx;
    $id = $_GET['id'];
    $sql1 = "delete from users where id = '$id'";
    $q1 = mysqli_query($cnx,$sql1);
    if($q1){
        $hasil = "data est supperimer ";
    }else{
        $hasil = "data est n'est pas sup ";
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

















<?php 
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db   = "gestionEmp";

$cnx = mysqli_connect($host,$user,$pass,$db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'detail':detail();break;
    case 'update':update();break;
    case 'delete':delete();break;
}

function normal(){
    global $cnx;
    $sql1 = "select * from societe order by nom desc";
    $q1 = mysqli_query($cnx,$sql1);
    while($r1 = mysqli_fetch_array($q1)){
      $hasil[] = array(
        'id' => $r1['id'],
        'nom' => $r1['nom'],
        'limite' => $r1['limite'],
        'post' => $r1['post']
    );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $cnx;
    $nom = $_POST['nom'];
    $post = $_POST['post'];
    $limite = $_POST['limite'];
    $hasil = "aucun data insere ";
    if($nom and $limite and $post){
        $sql1 = "insert into societe(nom,limite,post) values ('$nom','$limite','$post')";
        $q1 = mysqli_query($cnx,$sql1);
        if($q1){
            $hasil = "insertion est succse ";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail(){
    global $cnx;
    $id = $_GET['id'];
    $sql1 = "select * from societe where id = '$id'";
    $q1 = mysqli_query($cnx,$sql1);
    while($r1 = mysqli_fetch_array($q1)){
      $hasil[] = array(
        'id' => $r1['id'],
        'nom' => $r1['nom'],
        'post' => $r1['post'],
        'limite' => $r1['limite']
    );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update(){
    global $cnx;
    $id = $_GET['id'];
    $nom = $_POST['nom'];
    $limite = $_POST['limite'];
    $post = $_POST['post'];
    if($nom){
        $set[] = "nom='$nom'";
    }
    if($limite){
        $set[] = "limite='$limite'";
    }
    if($post){
      $set[] = "post='$post'";
    }
    $hasil = "Gagal melakukan update data";
    if($nom or $post or $limite ){
        $sql1 = "update societe set ".implode(",",$set)." where id = '$id'";
        $q1 = mysqli_query($cnx,$sql1);
        if($q1){
            $hasil = "data est mise a joure ";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $cnx;
    $id = $_GET['id'];
    $sql1 = "delete from societe where id = '$id'";
    $q1 = mysqli_query($cnx,$sql1);
    if($q1){
        $hasil = "data est supperimer ";
    }else{
        $hasil = "data est n'est pas sup ";
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

<?php 
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db   = "gestionEmp";

$cnx = mysqli_connect($host,$user,$pass,$db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'detail':detail();break;
    case 'update':update();break;
    case 'delete':delete();break;
}

function normal(){
    global $cnx;
    $sql1 = "select * from societe order by nom desc";
    $q1 = mysqli_query($cnx,$sql1);
    while($r1 = mysqli_fetch_array($q1)){
      $hasil[] = array(
        'id' => $r1['id'],
        'nom' => $r1['nom'],
        'limite' => $r1['limite'],
        'post' => $r1['post']
    );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $cnx;
    $nom = $_POST['nom'];
    $post = $_POST['post'];
    $limite = $_POST['limite'];
    $hasil = "aucun data insere ";
    if($nom and $limite and $post){
        $sql1 = "insert into societe(nom,limite,post) values ('$nom','$limite','$post')";
        $q1 = mysqli_query($cnx,$sql1);
        if($q1){
            $hasil = "insertion est succse ";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail(){
    global $cnx;
    $id = $_GET['id'];
    $sql1 = "select * from societe where id = '$id'";
    $q1 = mysqli_query($cnx,$sql1);
    while($r1 = mysqli_fetch_array($q1)){
      $hasil[] = array(
        'id' => $r1['id'],
        'nom' => $r1['nom'],
        'post' => $r1['post'],
        'limite' => $r1['limite']
    );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update(){
    global $cnx;
    $id = $_GET['id'];
    $nom = $_POST['nom'];
    $limite = $_POST['limite'];
    $post = $_POST['post'];
    if($nom){
        $set[] = "nom='$nom'";
    }
    if($limite){
        $set[] = "limite='$limite'";
    }
    if($post){
      $set[] = "post='$post'";
    }
    $hasil = "Gagal melakukan update data";
    if($nom or $post or $limite ){
        $sql1 = "update societe set ".implode(",",$set)." where id = '$id'";
        $q1 = mysqli_query($cnx,$sql1);
        if($q1){
            $hasil = "data est mise a joure ";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $cnx;
    $id = $_GET['id'];
    $sql1 = "delete from societe where id = '$id'";
    $q1 = mysqli_query($cnx,$sql1);
    if($q1){
        $hasil = "data est supperimer ";
    }else{
        $hasil = "data est n'est pas sup ";
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}
