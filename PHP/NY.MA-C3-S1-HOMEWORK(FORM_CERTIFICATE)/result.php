<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/result.css">
</head>
<body>
    <div class="contant">
        <?php require_once('templete/header.php'); 
        require_once('templete/navbar.php');
        ?>

        <h2>
        <?php if (isset($_POST['name'])) {
            echo "Thank you " .$_POST["name"] ."<br>"; 
        }
        ?>
        </h2>
        <?php
        if (isset($_POST['club'])) {
            echo "We received you application for the  " .$_POST["club"]."<br>";
        }
        if (isset($_POST['day'])) {
            echo "You will be available on  " .$_POST["day"]."<br>";
        }
        if (isset($_POST["skill"])) {
            $skills = $_POST["skill"];
            $skillText = "You are  "; 
            if ((count($skills)) > 1) {
                    for ($i = 0; $i < count($skills); $i++) {
                        if (count($skills) - 1 == $i) { 
                            $skillText = $skillText." and ";
                        }elseif ($i != 0) {
                            $skillText = $skillText.",";
                        };
                        $skillText = $skillText. $skills[$i];

                    }
                    echo $skillText;
                    echo "<br>";
            } else {
                foreach ($skills as $skill) {
                $skillText = $skillText. $skill;
                }
                echo $skillText;
            }
        }


    require_once('templete/footer.php');
    ?>
    </div>
    
</body>
</html>

  