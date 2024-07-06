import { useState } from "react";

function App() {
   const [firstWord,setFirstWord] = useState('');
   const [secondWord,setSecondWord] = useState('');
   const [result,setResult] = useState('');

   function checkAnagram(){
    const firstWordCharArr = new Array(26).fill(0);
    const secondWordCharArr = new Array(26).fill(0);

    for(let i = 0; i < firstWord.length; i++){
      const place = firstWord.charCodeAt(i)-97;
      firstWordCharArr[place]++;
    }
    
    
    for(let i = 0; i < secondWord.length; i++){
      const place = secondWord.charCodeAt(i)-97;
      secondWordCharArr[place]++;
    } 


    for(let i = 0; i < 26; i++){
      if(firstWordCharArr[i] !== secondWordCharArr[i]){
          setResult('The word/phrase are not anagrams 😔');
          return;
      }
    }
       setResult('The word/phrase are anagrams 😁');
  
  }

  return (
    <>
    <h1>Anagram Checker</h1>
    <div className="checker-box">
      <input type="text" placeholder="Enter the first word" value={firstWord} onChange={(e) => setFirstWord(e.target.value)}/>
      <input type="text" placeholder="Enter the second word" value={secondWord} onChange={(e) => setSecondWord(e.target.value)}/>
      <button onClick={checkAnagram}>Check</button>
    </div>
     {
      result && <p>{result}</p>
     }
    </>
  );
}

export default App;
