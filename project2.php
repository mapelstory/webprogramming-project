

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>purchase</title>
    <style>
        .start{
            margin-left:10%;
        }
        h1{
            color:limegreen;
        }
        .container{
            display:grid;
            grid-template-columns: 10em 35em;
        }
        .container1{
            display:grid;
            grid-template-rows: 3em 3em 3em 3em; 
        }
        .container1 > p{
            text-align:right;
        }
        .container2{
            display:grid;
            height:12em; 
        }
        .info{
            border: 2px solid limegreen;
            border-radius: 5px;
            width:35em;
            margin:0.2em;
        }

        .logo{
            height:15%;
            margin-bottom: 0em;
            text-align:center;
        }
        .logo_img{
            display:inline-block;
            width:10em;
            height:8em;
        }
        .logo_name{
            display:inline-block;
            font-size:3em;
            text-align:center;
            font-style: italic;
            font-weight: 650;
            color:limegreen;
        }

        .link{
            text-align: center;
            margin-bottom:1em;
        }
        .link > a{
            color:limegreen;
            text-decoration: none;
            font-style: italic;
            font-size:1.5em;
            font-weight:500;
        }
        .submit{
            margin-top:1em;
        }
    </style>
</head>
<body>
    <header class="logo">
        <a href="project0.html">
            <img  class="logo_img" src="https://img.freepik.com/free-vector/isolated-tree-on-white-background_1308-26130.jpg?w=2000">
            <br><p class="logo_name">TREE</p>
        </a>
    </header>

    <div class="link">
        <a href="project0.php">Log out</a>
    </div>

    <?php
        echo '
        <form class="start" action="project3.php">
            <h1>User information</h1>
            <div class="container">
                <div class="container1">
                    <p>Name</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                    <p>Card number</p>
                </div>
                <div class="container2" >
                    <input class="info" tpye="text" placeholder="name" required>
                    <input class="info" type="text" placeholder="phone number" required>
                    <input class="info" type = "text" placeholder="email" required>
                    <input class="info" type = "password" placeholder="card number" required>
                </div>
             </div>

             <input class="submit" type="submit" value="purchase">
        </form>';
    ?>

    



</body>
</html>