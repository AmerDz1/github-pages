document.getElementById("check-btn").addEventListener("click", function() {
    let inputText = document.getElementById("card-input").value;
    let cards = inputText.split("\n");

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // مسح النتائج السابقة

    cards.forEach(card => {
        let trimmedCard = card.trim();
        if (trimmedCard) {
            let isValid = Math.random() < 0.5; // فحص عشوائي (يجب استبداله بفحص حقيقي)
            let resultText = isValid 
                ? `<p class="approved">${trimmedCard} - Approved</p>` 
                : `<p class="declined">${trimmedCard} - Declined</p>`;
            
            resultDiv.innerHTML += resultText;
        }
    });
});