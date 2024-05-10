# webProject
//HTML 
//Home Page - Html - Javascript - By leena 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/Home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <title>Home Page</title>
</head>

<body>

    <header id="header">

        <nav>

            <!-- <img src="css/LOGOL.png" alt="Site Logo"> -->

            <div class="dropdown">
                <button class="dropbtn">MENU</button>
                <div class="dropdown-content">
                    <a href="#">HOME</a>
                    <a href="#">ALL DRESSES</a>
                    <a href="Requests.Html">REQUESTS</a>
                    <a href="Login.Html">LOGIN</a>
                    <a href="#">CONTACT US!</a>
                </div>
            </div>


            <!-- New search field -->
            <div class="search-container">
                <form id="search-form">
                    <input type="text" id="search-input" placeholder="Search products...">
                    <button type="submit">SEARCH</button>
                </form>
            </div>

        </nav>
    </header>
    <div id="search-results"></div>


    <main>
        <div class="container">
            <div class="header">
                <h1>Welcome to the fashion design site</h1>
                <p>Find your perfect dress today!</p>
            </div>
            <div class="main">
                <div class="product">
                    <img src="css/One.jpg" alt="Dress 1">
                    <h2>Fashion Designer Leena</h2>
                    <p>$50</p>
                    <a href="Requests.html" class="request-button">Request</a> <!-- Updated button with href attribute -->
                </div>
                
                <div class="product">
                    <img src="css/2.jpeg" alt="Dress 2">
                    <h2>Fashion Designer Ghaida</h2>
                    <p>$60</p>
                    <a href="Requests.html" class="request-button">Request</a> <!-- Updated button with href attribute -->
                </div>

                <div class="product">
                    <img src="css/3.jpg" alt="Dress 3">
                    <h2>Fashion Designer Reem</h2>
                    <p>$60</p>
                    <a href="Requests.html" class="request-button">Request</a> <!-- Updated button with href attribute -->
                </div>

            </div>
            <div class="footer">
                <div class="about-us">
                    <h2>About Us</h2>
                    <p>Welcome to Our Store! We are passionate about fashion design and committed to providing you with
                        the perfect dress for any occasion. With our talented designers and high-quality materials, we
                        aim to exceed your expectations and make your fashion dreams a reality. Explore our collection
                        and discover the perfect dress for you!</p>
                </div>
                <div class="bottom-content">
                    <div class="rights">
                        <p>&copy; 2024 Our Store. All rights reserved.</p>
                        <p>LEENA & GHAIDA</p>
                    </div>
                    <div class="contact-us">
                        <p>Contact Us:</p>
                        <div class="contact-links">
                            <a href="https://wa.me/yourwhatsappnumber" target="_blank"><i
                                    class="fab fa-whatsapp"></i></a>
                            <a href="https://twitter.com/yourtwitterhandle" target="_blank"><i
                                    class="fab fa-twitter"></i></a>
                            <a href="mailto:youremail@example.com"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>




            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>Welcome to Our Store!</h2>
                    <p>We are excited to have you here, explore our made-for-you dresses, otherwise we will definitely
                        make them for you!
                    </p>
                </div>
            </div>

        </div>
    </main>


    <!-- <style>
        body {
            font-family: serif;
            margin: 0;
            padding: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%230abab5;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff99c8;stop-opacity:1" /></linearGradient></defs><path d="M0,50 C30,80 70,20 100,50 L100,100 L0,100 Z" fill="url(%23grad1)" /></svg>') repeat-x;
            background-size: cover;
        }
    </style> -->


    <script>
        window.onscroll = function () { myFunction() };

        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }


        // Sample array of products (you'll replace this with your actual product data)
        var products = [
            { name: "Order Now!", designer: "Fashion Designer Leena" },
            { name: "Order Now!", designer: "Fashion Designer Ghaida" },
            { name: "Order Now!", designer: "Fashion Designer Reem" }
        ];

        // Function to filter products based on search query
        function searchProducts(query) {
            query = query.toLowerCase();
            return products.filter(function (product) {
                return product.name.toLowerCase().includes(query) || product.designer.toLowerCase().includes(query);
            });
        }

        function displaySearchResults(results) {
            var resultContainer = document.getElementById("search-results");
            resultContainer.innerHTML = ""; // Clear previous results
            results.forEach(function (product) {
                var productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = "<h2>" + product.name + "</h2><p>" + product.designer + "</p>";

                // Create "Request" button with link to Requests page
                var requestButton = document.createElement("button");
                requestButton.textContent = "Request";
                requestButton.addEventListener("click", function () {
                    window.location.href = "Requests.html"; // Link to Requests page
                });
                productElement.appendChild(requestButton);

                resultContainer.appendChild(productElement);
            });
        }



        // Handle form submission
        document.getElementById("search-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            var searchInput = document.getElementById("search-input").value;
            var searchResults = searchProducts(searchInput);
            displaySearchResults(searchResults);
        });


        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the page loads, display the modal
        window.onload = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


    </script>
</body>

</html>


//Login Page - Html - By leena 

<!DOCTYPE html>
<html>
<meta charset="utf-8">
<title>Login Page</title>
<link rel="stylesheet" href="css/login.css">
<!-- <script type="text/javascript" src="JS/Login.js"></script> -->


<body>
    <div class="img">
        <div class="content">
            <h1>Login</h1>
            <h4>Welcome Back, our elegant client!</h4>
            <form action="#">
                <div class="filed">
                    <label for="email">Email </label>
                    <input id="email" type="email" required placeholder="Moneca@gmail.com" autofocus>
                </div>
                <br>
                <div class="filedpass">
                    <label for="Pass">Password </label>
                    <input id="Pass" type="password" required placeholder="write a strong password" minlength="10"
                        maxlength="25">
                    <span class="show">Show</span>


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

    <script type="text/javascript" src="Login.js"></script>

</body>
</html>



//Signup Page - Html - By leena 

<!DOCTYPE html>
<html>
<meta charset="utf-8">
<title>SignUp Page</title>
<link rel="stylesheet" href="css/Signup.css">


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
                    <input type="submit" value="Done" onclick="location.href= 'Home.Html'">
                </div>


        </div>
    </div>
</body>
</html>




//CSS
//Home Page - CSS - BY leena
body {
    font-family: serif;
    margin: 0;
    padding: 0;
    background-color: #6d7b7a;
    background-image: repeating-radial-gradient(circle at 100% 130%, hsl(0, 29%, 68%) 10% 15%, #b1e1e0 10% 20%);
}

.container {
    max-width: 1200px;
    /* Adjust as needed */
    margin: -5px auto;
    /* Center horizontally */
    padding: 0 20px;
    /* Add some padding */
}

#search-results {
    margin: 0 600px;
    /* Center horizontally */
    width: 50%;
    /* Adjust width as needed */
    max-width: 800px;
    /* Adjust max-width as needed */
}


header {
    background-color: #333;
    color: #fff;
    padding: 3px 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    min-width: 160px;
    z-index: 1;
}

.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #555;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #555;
}

.dropbtn {
    background-color: #333;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* Add this new style for sticky header */
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    /* Ensure it's above other elements */
}


.header {
    text-align: center;
    margin-bottom: 50px;
}

.header h1 {
    font-size: 35px;
    color: #333;
}

.header p {
    font-size: 21px;
    color: #5a5656;
}


.search-container {
    float: right;
    margin-top: 10px;
}

.search-container input[type=text] {
    padding: 6px;
    border-radius: 4px;
    margin-right: 10px;
    border: none;
    width: 300px;
}

.search-container button {
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: white;
}

#search-results {
    margin-top: 20px;
}

.request-button {
    background-color: #0ABAB5;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.request-button:hover {
    background-color: #077b78;
}


.product {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}


.main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.product {
    width: 250px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.product img {
    width: 100%;
    border-radius: 5px;
}

.product h2 {
    font-size: 20px;
    color: #333;
    margin-top: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.product p {
    font-size: 16px;
    color: #666;
    margin-top: 5px;
}

.product a {
    background-color: #0ABAB5;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 7px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: none;
    font-size: 14px;
}

.product button:hover {
    background-color: #077b78;
}

/* .footer {
    text-align: center;
    margin-top: 80px;
    padding-top: 20px;
    border-top: 1px solid #ebddddcf;
    background-color: #ebddddcf;
    width: 100%;


} */

.footer {
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid #ccc;
    background-color: #ebddddcf;
    width: 100%;
    margin-top: 100px;
}

.about-us {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.about-us h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
}

.about-us p {
    font-size: 16px;
    color: #666;
}

.bottom-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.rights,
.contact-us {
    flex-basis: 45%;
    /* Adjust the width of each section */
    text-align: center;
}

.rights p,
.contact-us p {
    margin: 10px 0;
    /* Adjust spacing around paragraphs */
}

.contact-us {
    margin-top: 25px;
    /* Add some space between the content and the "Contact Us" section */
}

.contact-links {
    display: flex;
    justify-content: center;
}

.contact-links a {
    margin: 10px 10px;
}


.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #7a6767;
    width: 60%;
    /* Could be more or less, depending on screen size */
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: rgb(21, 19, 19);
    text-decoration: none;
    cursor: pointer;
}


/*  Style for the logo
#header img {
    float: left;
    /* Float the logo to the left */
/*  margin-right: 0;/*
    margin-top: -5px;
    /* Add some margin to separate it from other header content */

/*} /*





//Login Page - CSS - By leena 
body {
    background-color: rgb(218, 205, 195);
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    margin: 10px; /* Add margin reset */
    padding: 0; /* Add padding reset */
}

.content {
    width: 450px;
    height: 500px;
    background: #fff;
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
    color: #333; /* Match the color of headings on the home page */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content h4 {
    margin: 0;
    padding: 20px 20px;
    text-align: center;
    color: #5a5656; /* Match the color of paragraph text on the home page */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content label {
    color: #5f5c5c; /* Change the color to match the background of the form fields */
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

.content input {
    width: 100%;
    margin: 10px 0px;
    border: none;
    outline: none;
    height: 40px;
    background: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 16px;
}

.content input[type="submit"] {
    color: #fff;
    background: #333; /* Match the background color of buttons on the home page */
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 25px;
    transition: .5s ease;
}

.content input[type="submit"]:hover {
    transform: scale(1.1);
}

.Signup {
    color: #333; /* Match the color of links on the home page */
    font-weight: bold;
    font-size: 16px;
}

.content a {
    text-decoration: none;
    color: #7d5959; /* Match the color of links on the home page */
    font-weight: bold;
    font-size: 16px;
}


.content input[type="email"],
.content input[type="password"] {
    border: none;
    outline: none;
    height: 40px;
    background: transparent;
    border-bottom: 1px solid #786a6a;
    color: #827272;
    font-size: 16px;
}

.show {
    position: absolute;
    right: 50px;
    top: 280px;
    font-size: 13px;
    color: #8d8585;
    font-weight: 700;
    cursor: pointer;
}

.show:hover {
    color: #ccc; /* Change the color on hover for better visibility */
}



//Signup Page - CSS - By leena 

body {
    background-color: rgb(218, 205, 195);
    background-size: cover;
    font-family: 'Roboto', sans-serif;
    background-repeat: repeat;
    background-attachment: scroll;
}


.content {
    width: 450px;
    height: 730px;
    margin-top: 150px;
    background: #fff;
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
    color: #333; /* Match the color of headings on the home page */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content h3 {
    margin: 0;
    padding: 10px 10px;
    text-align: center;
    color: #5a5656; /* Match the color of paragraph text on the home page */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.content p {
    color: #5f5c5c; /* Change the color to match the background of the form fields */
    font-size: 16px;
}

.content input {
    /* width: 100%;
    margin: 10px 0px; */

    width: 100%;
    margin: 10px 0px;
    border: none;
    outline: none;
    height: 40px;
    background: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 16px;

}

.content input[type="text"],
.content input[type="email"],
.content input[type="password"] {
    border: none;
    outline: none;
    height: 40px;
    background: transparent;
    border-bottom: 1px solid #786a6a;
    color: #827272;
    font-size: 16px;
}

.content input[type="submit"] {
    border: none;
    outline: none;
    color: #fff;
    height: 40px;
    font-size: 20px;
    background: #333; /* Match the background color of buttons on the home page */
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: .5s ease;
}

.content input[type="submit"]:hover {
    transform: scale(1.1);
}

.show {
    position: absolute;
    right: 50px;
    top: 560px;
    font-size: 13px;
    color: #8d8585;
    font-weight: 700;
    cursor: pointer;
}

.show:hover {
    color: #ccc;
}


//JAVASCRIPT
//Login Page - JS - By leena 
const pass_fill = document.querySelector('#Pass');
const showButton = document.querySelector('.show');
showButton.addEventListener('click', function () {
    if (pass_fill.type = "password") {
        pass_fill.type = "text";
        showButton.textContent = "Remove";
        showButton.style.color = "#3498db";

    } else {
        pass_fill.type = "password";
        showButton.textContent = "Show";
        showButton.style.color = "#fff";

    }
});




//JAVASCRIPT
//Signup Page - JS - By leena 

--soon--







# Index page
//HTML 
//Index(home) Page - Html - By Ghaida



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web project</title>
    <style>
        body {
            background-color: beige;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        .hero {
            text-align: center;
            padding: 50px 0;
        }
        .products {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .product-item {
            text-align: center;
            margin-bottom: 30px;
        }
        .product-item img {
            width: 400px;
            height: auto;
        }

    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="Home.html">Home</a></li>
                <li><a href="fashion-designer.html">Fashion Designer</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h1>A fashion design site - your first choice for designing your clothes</h1>
            <h2>Welcome to the fashion design site</h2>
        </section>
        <section class="products">
            <article class="product-item">
                <img src="C:\Users\ghaid\OneDrive\Desktop\web\1.jpg" alt="The designer">
                <h3>Fashion Designer Sara</h3>
                <p></p>
                <button type="button">Request</button>
            </article>
            <article class="product-item">
                <img src="C:\Users\ghaid\OneDrive\Desktop\web\2.jpeg" alt="The designer">
                <h3>Fashion Designer Fatima</h3>
                <p></p>
                <button type="button">Request</button>
            </article>
            <article class="product-item">
                <img src="C:\Users\ghaid\OneDrive\Desktop\web\3.jpg" alt="The designer">
                <h3>Fashion Designer Noura</h3>
                <p></p>
                <button type="button">Request</button>
            </article>
        </section>
    </main>
    <footer>
    </footer>
</body>
</html>


























