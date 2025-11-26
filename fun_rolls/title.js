//////////////////////////////////////////////////
// TITLE
document.addEventListener("DOMContentLoaded", function() {
    function updateTitle() {
        const title = document.querySelector("#main h1");
        const text = "★ 천.하.제.일. 뿌.직(부직). 추.첨.대.회. ★";
        // const text = "★천하제일뿌직(부직)추첨대회★";
        title.innerHTML = "";
        text.split("").forEach(char => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            title.appendChild(span);
        });
    }
    updateTitle();
    setInterval(updateTitle, 800);
});