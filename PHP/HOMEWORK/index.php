<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>

<body>
      <div class="container" style="width: 45%; border:1px solid;padding:30px; margin-top: 30px;border-radius: 9px;">
            <form action="result.php" method="post">
                  <div class="row mb-3">
                        <label for="name" class="col-sm-2 col-form-label">Nmae</label>
                        <div class="col-sm-10">
                              <input type="text" name="name" class="form-control" id="inputName" placeholder="Name" required>
                        </div>
                  </div>

                  <div class="row mb-3">
                        <label for="club" class="col-sm-2 col-form-label">
                              Club you want to apply
                        </label>
                        <div class="col">
                              <select class="form-control" name="club">
                                    <option selected disabled>Choose your favorite club</option>
                                    <option value="Robotic club">Robotic club</option>
                                    <option value="Photograpih club">Photograpih club</option>
                                    <option value="Aerobic club">Aerobic club</option>
                                    <option value="Game club">Game club</option>
                              </select>
                        </div>

                  </div>

                  <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">
                              Be time for you
                        </label>
                        <div class="col">

                              <input class="form-check-input" name="time" type="radio" id="checkRemember" value="Saturday mornings">
                              <label class="form-check-label" name="time" for="checkRemember">Saturday mornings</label>

                              <input class="form-check-input" name="time" type="radio" id="checkRemember" value="Saturday affernoon">
                              <label class="form-check-label" for="checkRemember">Saturday affernoon</label>

                              <input class="form-check-input" name="time" type="radio" id="checkRemember" value="Sunday mornings">
                              <label class="form-check-label" for="checkRemember">Sunday mornings</label>

                        </div>
                  </div>
                  <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">
                              Your skill
                        </label>
                        <div class="col">

                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="the best coder">
                              <label class="form-check-label" for="checkRemember">the best coder</label>

                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="good in arts">
                              <label class="form-check-label" for="checkRemember">good in arts</label>


                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="a supper star">
                              <label class="form-check-label" for="checkRemember">a supper star</label>


                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="a crazy dancer">
                              <label class="form-check-label" for="checkRemember">a crazy dancer</label>

                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="singer">
                              <label class="form-check-label" for="checkRemember">singer</label>

                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="good in design">
                              <label class="form-check-label" for="checkRemember">good in design</label>

                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="the best eater">
                              <label class="form-check-label" for="checkRemember">the best eater</label>

                              <input class="form-check-input" name="skill[]" type="checkbox" id="checkRemember" value="good in speeches">
                              <label class="form-check-label" for="checkRemember">good in speeches</label>

                        </div>
                  </div>

                  <div class="row">
                        <div class="d-grid">
                              <button type="submit" class="btn btn-warning">Submit !</button>
                        </div>

                  </div>
            </form>
      </div>
</body>

</html>