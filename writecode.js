//1

// O(n) time complexity
function sumFinder(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
  
  console.log(sumFinder([6, 4, 3,-4, 2], 0))

//2

// O(n)
function is_unique(str) {
    let obj = {}
    for (let i = 0; i < str.length; ++i) {
      var ch = str[i]
      if (obj[ch]) return false
      obj[ch] = true
    }
    return true
  }
  
  console.log(is_unique("abcdefdgh"))
  

//3

// O(n) time complexity
function isPangram(string){
    let strArr = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false
      }
    }
    return true
  }
  
  console.log(isPangram('I like chicken nuggets that are spicy'))

//4

// O(n) time complexity
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))