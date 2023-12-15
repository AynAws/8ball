function shake8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!';
        document.getElementById('response-text').classList = 'text-danger';
        document.getElementById('response-image').src = '#BADIMAGE';
        return
    }
    if (!question.trim()) {
        alert('Please enter a valid question!');
        return
    }
    const randNum = Math.floor(Math.random()*11);
    switch(randNum) {
        case 0:
            answer = "Yes";
            image = "imgs/green-check.png";
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "imgs/Red_X.svg.png";
            color = "text-danger";
            break;
        case 2:
            answer = "Ask again later";
            image = "greygray-dot.png";
            color = "text-muted";
            break;
        case 3:
            answer = "Maybe";
            image = "#MAYBEIMAGE";
            color = "text-secondary";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "#CANTIMAGE";
            color = "text-muted";
            break;
        case 5:
            answer = "Don't count on it";
            image = "#UNSUREIMAGE";
            color = "text-secondary";
            break;
        case 6:
            answer = "Most likely";
            image = "#LIKELYIMAGE";
            color = "text-primary";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "#NOTLIKELYIMAGE";
            color = "text-warning";
            break;
        case 8:
            answer = "Most definetly";
            image = "#NOTLIKELYIMAGE";
            color = "text-success";
            break;
        case 9:
            answer = "NEVER";
            image = "#NOTLIKELYIMAGE";
            color = "text-danger";
            break;
        case 10:
            answer = "Always";
            image = "#NOTLIKELYIMAGE";
            color = "text-success";
            break;
        default:
            break;
    }
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-text').src = image;
}