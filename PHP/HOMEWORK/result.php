<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>result</title>
      <link rel="stylesheet" href="style/main.css">
</head>

<body>
      <?php
      $club = '';
      $time = '';
      if (isset($_POST["name"])) {
            $name = $_POST["name"];
      }
      if (isset($_POST["club"])) {
            $club = $_POST['club'];
      }
      if (isset($_POST['time'])) {
            $time = $_POST['time'];
      }

      ?>
      <div class="container">
            <img src="achievement.svg" alt="">
            <h1>Thank you <?php echo $name ?>!!</h1>
            <p>We received your application for <?php echo $club ?></p>
            <p>You are <?php
                        if (isset($_POST['skill'])) {
                              $skills = $_POST['skill'];
                              foreach ($skills as $skill) {
                                    echo ' ' . $skill . ' and ';
                              }
                        }
                        ?></p>
            <p>You will be available on <?php echo $time ?></p>
      </div>
</body>

</html>