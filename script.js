(function() {
    function Question(question, answers, correct, video) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.video = video;
    }
    
    QuestionPlaceHolder = document.getElementById('Question');
    a0PlaceHolder = document.getElementById('a0');
    a1PlaceHolder = document.getElementById('a1');
    a2PlaceHolder = document.getElementById('a2');
    a3PlaceHolder = document.getElementById('a3');
    a4PlaceHolder = document.getElementById('a4');
    inframeVideo = document.getElementById('inframeVideo');
    
    scoreHolder = document.getElementById('Score');
    
    nextQuestionBtn = document.getElementById('nextQuestion');
    CheckBtn = document.getElementById('Check');
    
        Question.prototype.displayQuestion = function() {
       
        document.getElementById('Question').textContent = this.question;

        for (var i = 0; i < this.answers.length; i++) {
            document.getElementById('a' + i).textContent = i + " : " + this.answers[i];
           
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        var lastOfArray = this.answers.length - 1;
        
     
       
      
        if (ans === this.correct) {
         
            sc = callback(true);
            myFunction("alert-success", "Success! You have been signed in successfully!");
        } 
        else if (lastOfArray === ans){
            
            alert("you closed the game");
        }
        else {
          
            sc = callback(false);
             myFunction("alert-danger", "Wrong! Try out again or check video");
            
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        
        scoreHolder.textContent = "Your score is: " + score;
      
    }
    
    
    var q1 = new Question('3: Ophiocordyceps unilateralis is the fungus which spreads its spores in the very specific way. How?',
                          ['Attract birds with sweet smell ', 'shoots spores on bats', 'shoots spores on bats', 'turns insect into zombies', 'explodes', 'exit'],
                          3,
                          'https://www.youtube.com/embed/XuKjBIBBAL8?start=17');

    var q2 = new Question('1: Why Brazil is called Brazil ?',
                          ['After a tree which grows in Brazil is called pau Brasil', 'Because of the biggest parrot called Brazilian giganteus', 'From the Aztec war cry "Brasil"','Brazil means in Portuguese -New era-', 'Exit'],
                          0,
                          'https://www.youtube.com/embed/YEDxVDHbKHM?start=38');

    var q3 = new Question('2: Samurais from Japan worn something called HORO to be protected against arrows what was it?  ',
                          ['type of cloak or garment attached to the back  ', 'panel of boards laced together with silk and leather cords. ', 'Sunshade from the iron ', 'small identification badges worn on the back of the helmet ', 'Exit'],
                          0,
                          'https://www.youtube.com/embed/8B_6BU7SYf8?start=30');
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
           
            return sc;
        }
    }

    
    var keepScore = score();
    

    function rememberLastIdx(e = 0) {
        var lastIdx = e;
        lastIdx = lastIdx++;
        return lastIdx;
    }

    var previousInx = rememberLastIdx();
     
    function nextQuestion(previousInx) {
        previousInx = previousInx + 1


        if(previousInx === questions.length){
            previousInx = 0;
        };
        var n = previousInx;
       
        console.log(n)
        
        
        if(n === m){

                nextQuestion(previousInx);
            
           }
        
        questions[n].displayQuestion();
      
        var m = n;
        
    
        
       
        
        CheckBtn.addEventListener('click', function(){
            
            var answer = document.getElementById('answerHere').value;

        
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
          
          
            
            inframeVideo.src=questions[n].video;
            
            
            
            QuestionPlaceHolder.textContent = null;
            a0PlaceHolder.textContent = null;
            a1PlaceHolder.textContent = null;
            a2PlaceHolder.textContent = null;
            a3PlaceHolder.textContent = null;
            a4PlaceHolder.textContent = null;
            
            n = null;
            
            nextQuestion(previousInx);
        
        
        })
        
       
       
    }

    nextQuestion(previousInx);
    
    function myFunction(style, normalText) {
        var element = document.getElementById("test");
        var alertText = document.getElementById("alertText");
        element.classList.remove("alert-success");
        element.classList.remove("alert-danger");
        
        element.classList.add(style);
        alertText.textContent = normalText;
        /*document.getElementById("myWish").addEventListener('click', function()*/
            element.classList.toggle("mystyle");
                setTimeout(function (){
                     element.classList.toggle("mystyle");
                },3000);
       
    }
    
})();
