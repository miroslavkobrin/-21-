let userName = prompt("Введіть ваше ім'я:");
if (!userName || userName.trim() === "") {
    userName = "Гравець";
}
document.getElementById("username").textContent = userName;
let attempt = 0;
let U = 0;  
let C = 0;  
const cardValues = [6, 7, 8, 9, 10, 2, 3, 4, 11];
const cardImages = [
    "https://media.istockphoto.com/id/657381818/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-6-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%86%D1%8C.jpg?s=612x612&w=0&k=20&c=ZEBLOH1dl2Z1myN4omuKEnff21v3kPPWlMX7F4gQIQM=", 
    "https://media.istockphoto.com/id/657384992/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-7-%D0%BA%D0%BB%D1%83%D0%B1%D1%96%D0%B2.jpg?s=612x612&w=0&k=20&c=tfUnAXYqBHJrJrJIXur5m5-BTs3gLgj-DS40hVActR8=", 
    "https://media.istockphoto.com/id/657386028/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-8-%D0%B4%D1%96%D0%B0%D0%BC%D0%B0%D0%BD%D1%82%D1%96%D0%B2.jpg?s=612x612&w=0&k=20&c=TscUvRiu2yHtD8JlAMp8-ZY-2ZKAzGf49oL1I2-yXiU=", 
    "https://media.istockphoto.com/id/1306851813/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=qJ4izlXKr5omgxIUxhSala2siwUoOMhjjG95WGlDyh8=", 
    "https://media.istockphoto.com/id/1306851168/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%BD%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=z2UbA283cw3nV41mxKCbogyQMWUCvKe3TO-UNjHr-p8=", 
    "https://media.istockphoto.com/id/657377982/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%96%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-%D1%80%D0%BE%D0%B7%D1%94%D0%BC-%D0%BF%D1%96%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=mYuNQFHJPDOOZVwqvNKYzN704b5MKR-J9HylBIDBQsg=", 
    "https://media.istockphoto.com/id/657381466/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%86%D1%8C.jpg?s=612x612&w=0&k=20&c=uqDUmda-_7N6pVtsQIcbVbK3frP75BX4dJRqVzJWXGY=", 
    "https://media.istockphoto.com/id/124676512/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%96%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9-%D1%86%D0%B0%D1%80.jpg?s=612x612&w=0&k=20&c=_tp0vFGm1SkM1yS48vjZfRkd5ZKYuTQ8kB9gWbPf2u8=", 
    "https://media.istockphoto.com/id/657378866/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D1%96%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D1%80%D1%82%D0%B8-%D1%82%D1%83%D0%B7-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%86%D1%8C.jpg?s=612x612&w=0&k=20&c=mrSJET2Ki-_Jpx5ndJtxp8TW_0l_WeGYn36mbYynV9g="
];
document.getElementById("userCard").src = cardImages[0];
document.getElementById("compCard").src = cardImages[0];
function play() {
    if (attempt >= 3) return;
    attempt++;
    const userIdx = Math.floor(Math.random() * 9);
    const compIdx = Math.floor(Math.random() * 9);
    U += cardValues[userIdx];
    C += cardValues[compIdx];
    document.getElementById("userCard").src = cardImages[userIdx];
    document.getElementById("compCard").src = cardImages[compIdx];
    document.getElementById("userO").textContent = U;
    document.getElementById("computerO").textContent = C;
    document.getElementById("attemptText").textContent = `Спроба ${attempt} з 3`;
    if (attempt === 3) {
        document.getElementById("genBtn").disabled = true;

        if (U > C) {
            document.getElementById("userO").style.background = "#2ed573";
            setTimeout(() => alert(`${userName} переміг! 🏆`), 300);
        } else if (C > U) {
            document.getElementById("computerO").style.background = "#2ed573";
            setTimeout(() => alert("Computer переміг! 🤖"), 300);
        } else {
            alert("Нічия! 🤝");
        }
    }
}
document.getElementById("genBtn").addEventListener("click", play);