
//algorith to find the number of vowels, the numbers of words, and the length of a sentence.

function myFunction (str){

  const strLength = (str) =>{const length = str.length 
  return length
  };
  const strNumber = (str) => {
 let words = str.split(" ");
 let wordCount = 0;
 for (let element of words){
  wordCount++
 }
 return wordCount
  }


const vowelCount = (str) => {
  const vowels = ["A" , "E", "I", "O", "U"];
  let count = 0;
 for (let element of str.toUpperCase()){
  if (vowels.includes(element))
  count++
 }
 return count

}
return `${ "vowels" + ":" + " " + vowelCount(str)}, ${ "words" + ":" + " " + strNumber(str)}, ${"length" + ":" + " " + strLength(str)}`
}
 

console.log(myFunction("i am the greatest")) // returns vowels : 6 , words: 4, length: 18;
