// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
    
  
    
    
    $("#latinize").click(function(){
       
      var words = $("#input").val();
            console.log(words);
            var response = translate(words);
    var audio = new Audio("wreee.mp3" ) ;
   
    audio.oncanplaythrough = function(){
        audio.play();
        
    }
        


    });  
    
    $("#delatinize").click(function(){
        var words1 = $("#input").val();
        $("#results").text(words1);
        console.log(words1);
            
    });
    
    $("#clear").click(function(){
        $("#results").text("");
        console.log();
            
    });
    
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