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
    const randNum = Math.floor(Math.random()*8);
    switch(randNum) {
        case 0:
            answer = "Yes";
            image = "#YESIMAGE";
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "#NOIMAGE";
            color = "text-success";
            break;
        case 2:
            answer = "Ask again later";
            image = "#LATERIMAGE";
            color = "text-success";
            break;
        case 3:
            answer = "Maybe";
            image = "#MAYBEIMAGE";
            color = "text-success";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "#CANTIMAGE";
            color = "text-success";
            break;
        case 5:
            answer = "Don't count on it";
            image = "#UNSUREIMAGE";
            color = "text-success";
            break;
        case 6:
            answer = "Most likely";
            image = "#LIKELYIMAGE";
            color = "text-success";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "#NOTLIKELYIMAGE";
            color = "text-danger";
            break;
        default:
            break;
    }
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-text').src = image;
}