<?php
require_once 'templates/header.php';
require_once 'index.php';
?>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = htmlspecialchars($_POST['username']);

    $email = htmlspecialchars($_POST['email']);

    $gender = htmlspecialchars($_POST['gender']);
    if ($gender == 'female'){
        $gender == 'male';
    }
    $subjects = htmlspecialchars($_POST['subjects']);
    foreach ($subjects as $subject){
        if ($subject == "php"){
            ($subject == "js");
        }elseif ($subject == "vue.js"){
            ($subject == "laravel");
        }
    }
    $birth_day = htmlspecialchars($_POST['birth_day']);

    $password = htmlspecialchars($_POST['password']);

    $province= htmlspecialchars($_POST['province']);

    $comment= htmlspecialchars($_POST['comment']);
}
    
?>
<div class="container mt-3">
    <div class="card">
        <div class="card-header text-center">
            <p>RESULT</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <p>Username is:
                        <?php echo $username;?>
                    </p>
                </div>
                <div class="col">
                    <p>Your birth day is:
                        <?php echo $birth_day;?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your email address is:
                        <?php echo $email;?>
                    </p>
                </div>
                <div class="col">
                    <p>Your password is:
                        <?php echo $password;?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your gender is:
                        <?php echo $gender;?>
                    </p>
                </div>
                <div class="col">
                    <p>Your province is:
                        <?php echo $province; ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your subjects are:
                        <?php echo $subjects; ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your comment is:
                        <?php echo $comment;?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<?php
require_once 'templates/header.php';
?>