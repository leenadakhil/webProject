# webProject
//HTML 
//Login Page - Html - By leena 

<!DOCTYPE html>
<html>
<meta charset="utf-8">
<title>Login Page</title>
<link rel="stylesheet" href="css/login.css">
<script type= "text/javascript" src="JS/Login.js" ></script>


</html>

<body>
    <div class="img">
        <div class="content">
            <h1>Login Page</h1>
            <h4>Welcome Back, our elegant client!</h4>
            <form action="#">
                <div class="filed">
                    <label for="email">Email </label>
                    <input id="email" type="email" required placeholder="...@gmail.com" autofocus>
                </div>
                <br>
                <div class="filed pass">
                    <label for="Pass">Password </label>
                    <input id="Pass" type="password" required placeholder="write a strong password" minlength="10"
                        maxlength="25">

                </div>
                <br>
                <div class="filedDone">
                    <input type="submit" value="Done">
                </div>


            </form>
            <div class="Signup"> New to our site?
                <a href="Signup.Html">Create an account</a>

            </div>


            </form>
            <div class="Repassword">
                <a href="#">Forgot password?</a>

            </div>

        </div>


    </div>
</body>

//Signup Page - Html - By leena 

<!DOCTYPE html>
<html>
<meta charset="utf-8">
<title>SignUp Page</title>
<link rel="stylesheet" href="css/Signup.css">
<script type="text/javascript" src="JS/Signup.js"></script>


</html>

<body>
    <div class="img">
        <div class="content">
            <h1>Create Account</h1>
            <h3>Welcome to our website!</h3>
            <form action="#">
                <div class="filed">
                    <br>
                    <p><strong>*First Name</strong></p>
                    <input type="text" required placeholder="Enter First Name">

                </div>

                <div class="filed">
                    <br>
                    <p><strong>*Last Name</strong></p>
                    <input type="text" required placeholder="Enter Last Name">

                </div>

                <div class="filed">
                    <br>
                    <p><strong> *Email</strong></p>
                    <input type="email" required placeholder="Enter Email">
                </div>

                <div class="filed pass">
                    <br>
                    <input type="password" required placeholder="Enter Password">
                    <span class="show">Show</span>
                </div>

                <div class="filedDone">
                    <input type="submit" value="Done" onclick="location.href= 'HomePage.Html'">
                </div>


        </div>
    </div>
</body>


//CSS
//Login Page - CSS - By leena 
body {
    background-image: url(Backgroundimg.jpg);
    background-size: cover;
    font-family: 'Roboto', sans-serif;


}


.content {
    width: 450px;
    height: 500px;
    background: rgb(121 103 103 / 60%);
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0px 50px;
    border-radius: 40px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.45);

}

.content h1 {
    margin: 0;
    padding: 20px 20px;
    text-align: center;
    color: #512f2f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content h4 {
    margin: 0;
    padding: 20px 20px;
    text-align: center;
    color: #645857;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content label {
    color: #fff;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;

}

.content input {
    width: 100%;
    margin: 10px 0px;

}

.content input[type="email"],
.content input[type="password"] {
    border: none;
    outline: none;
    height: 40px;
    background: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 16px;
}

.content input[type="submit"] {
    border: none;
    outline: none;
    color: #d3d3d3;
    height: 40px;
    font-size: 20px;
    background: #7b5852;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: .5s ease;
}

.content input[type="submit"]:hover {
    transform: scale(1.1);
}

.Signup {
    color: #2b3940;
    font-weight: bold;
    font-size: 16px;
}

.content a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
}


//Signup Page - CSS - By leena 
body {
    background-image: url(Backgroundimg.jpg);
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    background-repeat: repeat;
    background-attachment: scroll;
}


.content {
    width: 450px;
    height: 730px;
    margin-top: 75px;
    /* margin-bottom: 100px; */
    background: rgb(121 103 103 / 60%);
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0px 50px;
    border-radius: 40px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.45);

}

.content h1 {
    margin: 0;
    padding: 20px 20px;
    text-align: center;
    color: #512f2f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content h3 {
    margin: 0;
    padding: 20px 20px;
    text-align: center;
    color: #645857;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content p {
    color: #fff;
    font-size: 16px;
}

.content input {
    width: 100%;
    margin: 10px 0px;

}

.content input[type="text"],
.content input[type="email"],
.content input[type="password"] {
    border: none;
    outline: none;
    height: 40px;
    background: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 16px;
}

.content input[type="submit"] {
    border: none;
    outline: none;
    color: #d3d3d3;
    height: 40px;
    font-size: 20px;
    background: #7b5852;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: .5s ease;
}

.content input[type="submit"]:hover {
    transform: scale(1.1);
}


//JAVASCRIPT
//Login Page - JS - By leena 

//JAVASCRIPT
//Signup Page - JS - By leena 

--soon--







