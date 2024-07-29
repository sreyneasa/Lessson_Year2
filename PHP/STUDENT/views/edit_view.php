<?php require_once '../templates/header.php'; ?>
<div class="container p-4">
    <?php
    require_once '../models/student.php';
    $studentId = $_GET['id'];
    $student = getStudentById($studentId);
    ?>
    <form action="../controllers/edit_controller.php" method="post">
        <input type="hidden" name="student_id" value="<?= $student['id'] ?>">
        <div class="form-group">
            <input type="text" value="<?= $student['name'] ?>" class="form-control" placeholder="Name" name="name">
        </div>
        <div class="form-group">
            <input type="number" value="<?= $student['age'] ?>" class="form-control" placeholder="Age" name="age">
        </div>
        <div class="form-group">
            <input type="text" value="<?= $student['province'] ?>" class="form-control" placeholder="Province" name="province">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-warning btn-block">Update</button>
        </div>
    </form>
</div>
<?php require_once '../templates/footer.php'; ?>