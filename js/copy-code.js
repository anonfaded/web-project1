document.addEventListener('DOMContentLoaded', function() {
    // Function to copy code to clipboard
    function copyCodeToClipboard(event) {
        const codeBlock = event.target.nextElementSibling.querySelector('code');
        const codeText = codeBlock.textContent;

        // Create a temporary textarea element to store the code
        const textarea = document.createElement('textarea');
        textarea.value = codeText;
        document.body.appendChild(textarea);

        // Select the code and copy it to the clipboard
        textarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(textarea);

        // Provide visual feedback to the user (optional)
        event.target.textContent = 'Code Copied!';
        setTimeout(() => {
            event.target.textContent = 'Copy Code';
        }, 1500); // Reset the button text after a delay
    }

    // Attach the copyCodeToClipboard function to the button click event
    const copyButtons = document.querySelectorAll('.copy-code-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', copyCodeToClipboard);
    });
});

