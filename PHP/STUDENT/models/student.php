<?php
// database connection
$connection = new PDO("mysql:host=localhost;dbname=student_db","root","");
/**
 * Get all students from the database
 
 * @return array of students 
 */
function getStudents()
{
    global $connection;
    $statement = $connection ->prepare('SELECT*FROM students;');
    $statement ->execute();
    $students = $statement ->fetchAll(); error_log('Yes');
    return $students;
}

/**
 * Get single student from the database
 * @param integer $id : the student id
 
 * @return associative_array: the student related to given id
 */
function getStudentById($id)
{
    global $connection;
    $query = "SELECT * FROM students WHERE id = :id";
    $values = [":id" => $id];
    $statement = $connection->prepare($query);
    $statement->execute($values);

    return $statement->fetch();
}

/**
 * Remove single student from the database
 * @param integer $id : the id of the student to delete
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function deleteStudent($id)
{
    global $connection;

    $statement=$connection->prepare( "DELETE FROM students WHERE id = :id;");
    $statement->execute([':id'=>$id]);
    
    // $query = "DELETE FROM students WHERE id = :id";
    // $values = [":id" => $connection];
    // $statement = $connection->prepare($query);
    // return $statement->execute($values);
}

/**
 * Update single student from the database
 * @param integer $id :  		the id of the student to update
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if deletion was successful, false otherwise
 */
function updateStudent($id, $name, $age, $province)
{
    global $connection;
    $query = "UPDATE students SET name = :name ,age = :age , province = :province  WHERE id = :id";
    $values = [':name' => $name, ':age' => $age, ':province' => $province, ':id' =>$id];
    $statement = $connection ->prepare($query);
    return $statement ->execute($values);

}

/**
 * Create single student from the database
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if create was successful, false otherwise */
function createStudent($name, $age, $province)
{
    global $connection;
    $statement ->prepare('INSERT INTO students(name,age,province) VALUES(:name, :age,:province)');
    $statement ->execute([
        ':name' => $name,
        ':age' => $age,
        ':province' => $province
    ]);
    return $statement ->rowCount() > 0;
}
