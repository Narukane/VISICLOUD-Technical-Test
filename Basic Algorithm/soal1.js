const axios = require('axios');
//URL
const url = 'https://storage.googleapis.com/asset-visicloud/public/test/bidang.json';

//Function Count Word
function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
}

axios.get(url)
    .then(response => {
        const sentence = response.data.kalimat;
        const wordCount = countWords(sentence);
        
        // Result
        console.log(`Sentence: ${sentence}`);
        console.log(`Word Count: ${wordCount}`);
        
    }).catch(error => {
        console.error('Error Fetching :',error.message);
    });