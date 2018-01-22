// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  
    $("#latinize").click(function(){
       
    //   var words = $("#input").val();
    //         console.log(words);
    //     var vowel = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
            
            // function translate (words){
                // // 
                
            //     var splitWords = words.split("");
            //         console.log(splitWords);
                
            //     var include = vowel.includes(splitWords[0]);    
            //         console.log(include);
                    
            //   if(include === true){
                    
            //         $("#results").text(words + "ay");
            //         console.log();
                    
            //     }
            //     else{
                   
            //     //   alternate way 1
            //         var con = splitWords.shift();
            //         // console.log(con);
                    
            //         var con1 = splitWords.push(con);
            //         // console.log(splitWords);
            //         // console.log(con1);
                    
            //         var con2 = splitWords.join('')
            //         console.log(con2);
                
                    
            //         $("#results").text(con2 + "ay");
            //         console.log();
            //     }
            // }
            var response = translate();
    // Create the sentenceToPigLatin function that takes a sentence as a parameter
    	//Loops through all the words in the sentence and transforms each word
    	//It should return a transfromed sentance
    
    });  
    
    
    var words = $("#input").val();
        console.log(words); 
    
    function translate (words){
            var vowel = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
               
                
                var splitWords = words.split("");
                    console.log(splitWords);
                
                var include = vowel.includes(splitWords[0]);    
                    console.log(include);
                    
               if(include === true){
                    
                    $("#results").text(words + "ay");
                    console.log();
                    
                }
                else{
                   
                //   alternate way 1
                    var con = splitWords.shift();
                    // console.log(con);
                    
                    var con1 = splitWords.push(con);
                    // console.log(splitWords);
                    // console.log(con1);
                    
                    var con2 = splitWords.join('')
                    console.log(con2);
                
                    
                    $("#results").text(con2 + "ay");
                    console.log();
                }
            }
});