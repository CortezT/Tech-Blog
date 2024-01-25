document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.getElementById('changeColorButton');
    const targetParagraph = document.getElementById('targetParagraph');

    // Check if both the button and target paragraph exist
    if (changeColorButton && targetParagraph) {
        // Add click event listener to the button
        changeColorButton.addEventListener('click', handleColorChange);
    }

    // Function to handle color change
    function handleColorChange() {
        targetParagraph.style.color = getRandomColor();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});