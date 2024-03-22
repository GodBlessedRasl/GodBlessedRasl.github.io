<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Я - Студент ВШЭ</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
</head>
<body class="index-page">

<header>
    <h1>Я - студент ВШЭ</h1>
    <div class="container">
        <nav>
            <ul class="nav-list">
                <li><a href="index.html#home">Главная и Обо мне</a></li>
                <li><a href="contact.html#contact">Контакты</a></li>
            </ul>
        </nav>
    </div>
</header>


<main>
    <div class="container">

        <section id="home-about" class="centered-section">
            <div class="full-width-text">
                <h2>Главная страница и информация обо мне</h2>
            </div>
            <div class="full-width-text">
                <p>Вы находитесь на основной странице сайта, тут можно найти основную информацию обо мне.</p>
            </div>
            <div class="full-width-text">
                <p>Я являюсь студентом Высшей Школы Экономики, факультета Прикладная Математика.</p>
            </div>
            <div class="full-width-text">
                <p><a class="link" href="Resume.pdf" target="_blank">Тут</a> можно ознакомиться с моей деятельностью за последние несколько лет.</p>
            </div>
        </section>

    </div>

    <div class="container">
        <section id="my-photo-section" class="centered-section">
            <img id="my-photo" src="student.jpg" alt="Моя фотография">
            <p class="photo-caption">Это я - студент факультета Прикладная Математика ВШЭ</p>
        </section>
    </div>

    <div class="container">
        <section id="my-location" class="centered-section">
            <h3>Моё местоположение</h3>
            <div id="map"></div>
        </section>
    </div>
</main>

<footer>
    <p>&copy; 2024 Студент ВШЭ. Все права защищены.</p>
</footer>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="scripts.js"></script>
<script>
    // Создание карты
    var map = L.map('map').setView([55.7558, 37.6173], 10);

    // Добавление слоя OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Добавление маркера
    L.marker([55.7558, 37.6173]).addTo(map)
        .bindPopup('Москва, Россия')
        .openPopup();
</script>

</body>
</html>
