<!-- WRIRE CODE PHP Submit FORM WITH VALIDATION -->
<?php
require_once 'index.php';
$username = "";
$password = "";

$form_valid = false;


$ragex = "/^[a-zA-Z]+\![a-zA-Z]+\@[a-zA-Z]+\%[a-zA-Z]+\#{6,}$/";
$name = "/^[A-Z][a-z]+\s+\d$/";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $username = htmlspecialchars($_POST['username']);

    $password = htmlspecialchars($_POST['password']);

    if (preg_match($name,$_POST['username'])){
        $user_error = '';
        $form_valid = TRUE;
    }else{
        $user_error= 'your name wrong';
    }

    if (preg_match($name,$_POST['username'])){
        $user_error = "password must contain '@'";
    }
    if (!(validate_password($password))){
        $password_error = "password must contain '@'";
    }
}
?>
<div class="container">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h1>Form</h1>
                </div>
                <div class="card-body">
                    <form action="#" method="post">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                <?php echo 'your name wrong'; ?>
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">password</label>
                            <input type="text" class="form-control" value="" id="password" name="password" value="">
                            <small class="form-text text-danger">
                                <?php echo "password must contain '@'" ?>
                            </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>
<br>
<?php
if ($is_form):
    ?>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <p>
                            username:
                            <?= $values['username'] ?>
                        </p>
                        <p>
                            password:
                            <?= $values['password'] ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <?php
endif;
?>