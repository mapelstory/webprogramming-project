<?php
    session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check login</title>
    <style>
        body{
            text-align:center;
        }
        div{
            display:inline-block;
            font-size:1em;
            margin-top:1em;
            padding:1em;
            border-radius: 8px;
            width:9em;
            border:2px solid limegreen;
            color:limegreen;
            font-size:1.5em;
            font-weight:650;
        }
        h1{
            display:inline-block;
            font-style: italic;
            font-size:5em;
            margin-top:1em;
            color:limegreen;

        }
    </style>
</head>
<body>
    <h1>TREE</h1><br>
    <div>   
        <?php
            $id = 0;
            $password = 0;
            if ($_POST['id'] != '20011266'){
                echo "<p>Wrong ID!</p>";
                $id = 0;
            }
            else{
                $id = 1;
            }
            if($_POST['password'] != '20011266'){
                echo "<p>Wrong Password!</p>";
                $password = 0;
            }
            else{
                $password = 1;
            }
            if($id == 0){
                echo 
                '<form action = "project0.php">
                    <input type = "submit" value="login again">
                </form>';
            }
            else if($password == 0){
                echo 
                '<form action = "project0.php">
                    <input type = "submit" value="login again">
                </form>';
            }
            else if(($id == 0) && ($password == 0)){
                echo 
                '<form action = "project0.php">
                    <input type = "submit" value="login again">
                </form>';
            }
            if (($id == 1) && ($password == 1)){
                echo "<p>Login Complete!</p>";
                echo 
                '<form action = "project0.html">
                    <input type = "submit" value="GO TO HOMEPAGE">
                </form>';
                echo 
                '<form action = "project0.php">
                    <input type = "submit" value="logout">
                </form>';
            }
        ?>
    </div>
   
</body>
</html>