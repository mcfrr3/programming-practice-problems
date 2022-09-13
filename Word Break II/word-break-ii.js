const s = "pineapplepenapple";
const wordDict = ["apple","pen","applepen","pine","pineapple"];

console.log("Works")
// const matches = s.matchAll(//g);

const tempSolution = [];
let tempString = s;

for (let i = 0; i < wordDict.length; i++) {
  for (const searchWord of wordDict) {

    const hits = new RegExp(searchWord, 'g');
    s.match(hits);
    
    // if matches were found
    if (hits.length > 0) {
      // add result to temp solution array
      tempSolution.push(hits[0]);
      // remove all instances of pattern from the base string
      tempString = replaceAll(searchWord, '');
      console.log(tempString, tempSolution);
    }
  }

}