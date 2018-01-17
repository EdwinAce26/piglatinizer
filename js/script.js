// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
    $("#latinize").click(function(){
       
        var vowel = ["a","e","i","o","u","y"]
            function translate (words){
                
                words = $("#input").val();
                    console.log(words);
                
                var splitWords = words.split("");
                    console.log(splitWords);
                
                var include = splitWords.includes(vowel);    
                    console.log(include);
                    
               if(include === true){
                    
                    $("#results").text(words + "ay");
                    console.log()
                }
            }
            
        var response = translate();
        
        //console.log(response);
    // Create the sentenceToPigLatin function that takes a sentence as a parameter
    	//Loops through all the words in the sentence and transforms each word
    	//It should return a transfromed sentance
    
    });
});