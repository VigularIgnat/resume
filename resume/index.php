<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    
</head>
<body>
    <div class="resume_tittle">
       <p>Моє резюме</p>
    </div>
    <div class="main_content">
        <div class="left_container">
            <div class="photo_resume"></div>
            <div class="name_area">
                    <h2 id="main_name">Ігнат Вигуляр  <span data-tooltip="Ihnat Vihulyar" id="hesh">#</span> <br> 14 років </h2>
            </div>
        </div>
       
       
        <div class="divided_block">
            <div class="main_skills_section">
            <h3 id="title_skills"> Мої навички </h3>
            <div id="carousel_global_container"></div>
            <div id="carousel_buttons_container"></div>
            <div id="info"></div>
        </div>
        
    </div>
    
    <div class="footer">
        <div>
            
            Контакти:
            <button id="button_num">
            <a class='numbers_a' href=”tel:+480692652864”>+48 692 652 864</a>
            <img src="img/copy1.svg" title="copy to clipboard" onclick="copy('+480692652864')">
            </button><br>
            Email:
            <a class='numbers_a' target="_blank" href="mailto:ignatvigular@gmail.com">ignatvigular@gmail.com</a>
            <img src="img/copy1.svg" title="copy to clipboard" onclick="copy('ignatvigular@gmail.com')">
            <p class="source_code">Source code: <a href="https://github.com/VigularIgnat/" target="_blank">https://github.com/VigularIgnat/</a></p>
        </div>
    </div>
    <script src="index.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>