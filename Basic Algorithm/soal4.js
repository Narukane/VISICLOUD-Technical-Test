const axios = require('axios');
//URL
const url = 'https://storage.googleapis.com/asset-visicloud/public/test/bidang.json';

//Function reverse Word
function reverseWord(sentence) {
    const wordsArray  = sentence.split(' ');
    const reversedArray = wordsArray.reverse();
    const reversedString = reversedArray.join(' ');
    return reversedString;
}

axios.get(url)
    .then(response => {
        const sentence = response.data.kalimat;
        const reversedSentence = reverseWord(sentence);
        
        // Result
        console.log(`Sentence: ${sentence}`);
        console.log(`Reversed Sentence: ${reversedSentence}`);
        
    }).catch(error => {
        console.error('Error Fetching :',error.message);
    });