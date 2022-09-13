function removeDuplicates(obj) {

    // declare a variable and store a parameter Object.keys
        let objKeys = Object.keys(obj)
        // sort the objKeys and assign it to a new variable
        let sortedKeys = objKeys.sort((a,b) => b-a);
        // declare an empty object variable 
        let removeDuplicates = {};
        let passedLetter = {};
        //This loop through the input object using for loop
        for(let i =0; i < sortedKeys.length; i++) {
            let element = [];
            // This loops through the value of the object i.e arrays
            for(let j=0; j < obj[sortedKeys[i]].length; j++) {
            // using a conditional statement if the passedLetters is empty return true, 
            // then push the looped array into the declared empty object.
             if(!passedLetter[obj[sortedKeys[i]][j]]){
             passedLetter[obj[sortedKeys[i]][j]] = true;
            element.push(obj[sortedKeys[i]][j])
             }
            }
            removeDuplicates[sortedKeys[i]] = element;
        }
    
        return removeDuplicates;
    }

module.exports = removeDuplicates;
