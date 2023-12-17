// Triggers after clicking "shake the magic 8ball".
function shake8Ball() {
    // Captures the users question
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!';
        document.getElementById('response-text').classList = 'text-danger';
        document.getElementById('response-image').src = 'imgs/Red_X.svg.png';
        return;
    }
    // Response if no question answered
    if (!question.trim()) {
        alert('Please enter a valid question!');
        return;
    }
    let answer, image, color, alt;
    // Generates a whole number 0-10
    const randNum = Math.floor(Math.random() * 11);
    // Generates one of 11 responses based off of randNum
    switch (randNum) {
        case 0:
            answer = "Yes";
            image = "imgs/green-check.png";
            color = "text-success";
            alt = "Green checkmark"
            break;
        case 1:
            answer = "No";
            image = "imgs/Red_X.svg.png";
            color = "text-danger";
            alt = "Red x"
            break;
        case 2:
            answer = "Ask again later";
            image = "imgs/greygray-dot.png";
            color = "text-muted";
            alt = "Gray dot";
            break;
        case 3:
            answer = "Maybe";
            image = "imgs/da-yellow-question.png";
            color = "text-secondary";
            alt = "Yellow questionmark"
            break;
        case 4:
            answer = "Cannot predict now";
            image = "imgs/greygray-dot.png";
            color = "text-muted";
            alt = "Gray dot";
            break;
        case 5:
            answer = "Don't count on it";
            image = "imgs/da-yellow-question.png";
            color = "text-secondary";
            alt = "Yellow questionmark"
            break;
        case 6:
            answer = "Most likely";
            image = "imgs/da-yellow-question.png";
            color = "text-primary";
            alt = "Yellow questionmark"
            break;
        case 7:
            answer = "Outlook not so good";
            image = "imgs/da-yellow-question.png";
            color = "text-warning";
            alt = "Yellow questionmark"
            break;
        case 8:
            answer = "Most definetly";
            image = "imgs/green-check.png";
            color = "text-success";
            alt = "Green checkmark"
            break;
        case 9:
            answer = "NEVER";
            image = "imgs/Red_X.svg.png";
            color = "text-danger";
            alt = "Red x"
            break;
        case 10:
            answer = "Always";
            image = "imgs/green-check.png";
            color = "text-success";
            alt = "Green checkmark"
            break;
        default:
            answer = "Something went wrong, please try again.";
            break;
}
const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;

// Create a new image element
const newImage = new Image();
newImage.onload = function() {
    // Set the image dimensions after it has loaded
    newImage.width = 200;
    newImage.height = 200;

    // Replace the existing image with the new one
    const responseImage = document.getElementById('response-image');
    responseImage.parentNode.replaceChild(newImage, responseImage);
    newImage.className = 'mb-4 short';

    const respQues = document.getElementById('resp-ques');
    respQues.innerText = question;
}

// Set the source of the new image
newImage.src = image;
newImage.alt = alt;
}