let string = 'The quick brown fox jumped over the lazy dog';
let result = smallestWord(string);
console.log("Result: " + result);
function smallestWord(string){
        let words = string.split(' ');
        let smallestStr = words[0];
        words.forEach(word=>{
            if(word.length < smallestStr.length){
                smallestStr = word;
            }
        });
        return smallestStr;
}