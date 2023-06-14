<?php
    session_unset();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
    <style>
        body{
            text-align:center;
        }

        h1{
            display:inline-block;
            font-style: italic;
            font-size:5em;
            margin-top:1em;
            color:limegreen;

        }
        .login0{
            display:inline-block;
        }
        .form{
            display:inline-block;
            font-size:1em;
            margin-top:1em;
            border-radius: 9px;
            width:15em;
            border:2px solid limegreen;
        }
        
    </style>
</head>
<body  >
    <h1>TREE</h1><br>

    <form class="form" method="POST" action="project1.php">
        <p class="login0"  >ID : <br><input type="text" name="id"></p><br>
        <p class="login0">PASSWORD : <input type="password" name="password"></p><br>
        <p class="login0"><input type="submit" value="LOGIN"></p>
    </form>
</body>
</html>