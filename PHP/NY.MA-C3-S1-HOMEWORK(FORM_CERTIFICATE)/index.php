<?php
require_once('templete/header.php');
?>

<form action="result.php"method = "Post">
    <h1>PNC Club</h1>
    <div>
        Name: <input type="text" name="name">
    </div>

    <div>
        Gender:
        <input type="radio" id="false" name="gender" value="false">
        <label for="false">False</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </div>

    <div>
        Club you want to apply:
        <select name="club" id="club">
            <option value="Robotic Club">Robotic Club</option>
            <option value="Cooking Club">Cooking Club</option>
            <option value="Aerobic Club">Aerobic Club</option>
            <option value="Band Club">Band Club</option>
            <option value="Library Club">Library Club</option>
            <option value="Photography Club">Photography Club</option>
        </select>
    </div>

    <div>
        Best time for you:
        <input type="radio" id="day" name="day" value="saturday" checked>
        <label for="saturday">saturday</label>

        <input type="radio" id="day" name="day" value="sunday">
        <label for="sunday">sunday</label>
    </div>

    <div>
        Your skills:
        <input type="checkbox" id="skill" name="skill[]" value="the best coder" checked>
        <label for="the-best-coder">The Best Coder</label>

        <input type="checkbox" id="skill" name="skill[]" value="super star">
        <label for="super-star">Super Star</label>

        <input type="checkbox" id="skill" name="skill[]" value="good in arts">
        <label for="good-in-arts">Good in Arts</label>

        <input type="checkbox" id="skill" name="skill[]" value="the best eater">
        <label for="the-best-eater">The Best Eater</label>

        <input type="checkbox" id="skill" name="skill[]" value="crazy dance">
        <label for="crazy-dance">Crazy Dance</label>

        <input type="checkbox" id="skill" name="skill[]" value="good in design">
        <label for="good-in-design">Good in Design</label>

        <input type="checkbox" id="skill" name="skill[]" value="good in speeches">
        <label for="good-in-speeches">Good in Speeches</label>
    </div>

    <div>
        <button type="submit">Submit</button>
    </div>
</form>