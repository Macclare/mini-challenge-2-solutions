function isolateDuplicates(text) {
    // make a conditional statement, if type of string is not a string, throw an error
        if(arguments.length < 1 || typeof(text) != "string"){
          throw "Please enter a valid string"
        }
      // declare a variable of empty array
      // declare a variable dupCount and finalCount and sum to 0
        let result = [];
        let dupCount = 0;
        let finalCount = 0;
     // split the text and store in a variable text
        text = text.split('');
     //use a for loop to loop through the text and push into the result
        for (let i = 0; i < text.length; i++) {
          result.push(text[i])
      // using a conditional statement, moving from the front if text[i + 1} is defined, and 
      //first and second text is the same, push into dupCount. then if dupCount text is equal to 2, push the square bracket '[' 
      // count the pushed result and store number in finalCount.
          if (text[i + 1] != undefined && text[i].toLowerCase() == text[i + 1].toLowerCase()) {
            dupCount++;
            if(dupCount == 2){
              result.push('[')
              finalCount++;
            }
      //an else if statement moving from the back, if the text[i + 1] is defined and text[i] is not equal to the text[i + 1],
      // and the dupCount > 1, push the square bracket ']' into result
      // join the result, then return result and finalCount.
          } else if (text[i + 1] != undefined && text[i].toLowerCase() !== text[i + 1].toLowerCase() || i == text.length - 1) {
            if (dupCount > 1){
              result.push(']')
            }
            dupCount = 0;
          }
        }
      
        return [result.join(''), finalCount]
    } 

module.exports = isolateDuplicates;
