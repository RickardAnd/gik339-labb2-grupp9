console.log("Vi är igång!");
// Här hämtar vi referenser till DOM-elementen
const colorInput = document.getElementById('color');
        const contentInput = document.getElementById('content');
        const styleCheckbox = document.getElementById('divStyle');
        const button = document.getElementById('button');
        const outputDiv = document.getElementById('outputDiv');

        // Uppdatera div vid ändring av färg, innehåll eller stil
        styleCheckbox.addEventListener('click', () => {
            // Hämta värdena från input-elementen
            // Gör en utskrift i konsolen för att verifiera
            const selectedColor = colorInput.value;
            console.log("Färg vald:", selectedColor);
            const newContent = contentInput.value;
            console.log("Nytt innehåll:", newContent);
            const isStyleApplied = styleCheckbox.checked;
            console.log("Checkbox klickad!");

            // Uppdatera div-innehållet
            outputDiv.textContent = newContent;

            // Uppdatera färg
            outputDiv.style.backgroundColor = selectedColor || ''; // Använd tom sträng om input är tom

            // När checkboxen är iklickad
            if (isStyleApplied) {
                outputDiv.style.fontFamily = 'fantasy';
                outputDiv.style.borderStyle = 'solid';
                outputDiv.style.borderRadius = '2rem';
                outputDiv.style.color = 'white';
                outputDiv.style.padding = '3rem';
                outputDiv.style.boxSizing = 'border-box';
                outputDiv.style.width = '60%';
                outputDiv.style.textAlign = 'center';
                outputDiv.style.margin = '2rem auto';
            } else {
                // När checkboxen inte är iklickad
                outputDiv.style.fontFamily = 'cursive';
                outputDiv.style.borderStyle = 'dashed';
                outputDiv.style.borderRadius = '2rem';
                outputDiv.style.color = 'goldenrod';
            }
        });


        // Ta bort allt vid knapptryckning
        button.addEventListener('click', () => {
            // Återställ alla fält och div
            colorInput.value = '';
            contentInput.value = '';
            styleCheckbox.checked = false;
            outputDiv.textContent = '';
            outputDiv.style.backgroundColor = '';
            outputDiv.style.padding = '';
            outputDiv.style.boxSizing = '';
            outputDiv.style.width = '';
            outputDiv.style.textAlign = '';
            outputDiv.style.margin = '';
            // Utskrift i konsolen vid knapptryckning
            console.log("Allt borta!");
        });
