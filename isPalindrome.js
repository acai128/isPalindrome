function isPalindrome(string) {

    let newString= string.replace(/\s/g, '').toLowerCase().split('');
  
    for(var i=0; i < (newString.length)/2; i++){ 
      if(newString[i] !== newString[newString.length-i-1]){ 
        return false; 
      }  
    }
   return true;
  }
  console.log(isPalindrome('Tacocat'))
  console.log(isPalindrome('A nut for a jar of tuna'))
  console.log(isPalindrome('Never odd or even'))
  console.log(isPalindrome('hello'))