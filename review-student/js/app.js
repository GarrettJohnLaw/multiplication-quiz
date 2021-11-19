


    let randomProblem = [
        {
            left: Math.random() * (9 - 0) + 0,
            right: Math.random() * (9 - 0) + 0
        }
    ]


     /**
      * todo make an array for 10 multiplication problems
    random number generation for problem Math.random(10) twice

   -  display 1 correct answer with id="correct"
   - randomly display 3 false options, but use forEach to check for false positives
    - click on card to select answer
    - keep track of how many questions correct, increment if correct
    - 
    random order each time the problem is displayed
       - Array.sort()
      */

    buildNewProblem();


      /** Functions called above
       * 
       * 
       */


       function buildNewProblem() {
      

        let expression = document.createElement('p');
        let left = Math.floor((Math.random() * (9 - 0) + 0));
        let right = Math.floor((Math.random() * (9 - 0) + 0));
        let correctAnswer = left * right;
        expression.innerText =  left + " * " + right;
        let parent = document.getElementById('problem').querySelector('.expression');
        parent.insertAdjacentElement('beforeend', expression);

        let answers = [correctAnswer, getRandomNumber(), getRandomNumber(), getRandomNumber()];

        let shuffledArrayOfAnswers = shuffleArray(answers);
      

        for (let i=0; i<shuffledArrayOfAnswers.length; i++){
            
            if (i === 0){
                let firstLi = document.getElementById('one');
                firstLi.innerText = shuffledArrayOfAnswers[0]; 
            } else if (i === 1){
                let secondLi = document.getElementById('two');
                secondLi.innerText = shuffledArrayOfAnswers[1]; 
            } else if (i === 2){
                let thirdLi = document.getElementById('three');
                thirdLi.innerText = shuffledArrayOfAnswers[2]; 
            } else if (i === 3){
                let fourthLi = document.getElementById('four');
                fourthLi.innerText = shuffledArrayOfAnswers[3]; 
            } else {
                return null;
            }
        }

        // shuffledArrayOfAnswers.forEach((answer) =>{
        //     displayAnswer(answer);
        // } ) 

        }


       function getRandomNumber() {
        return  Math.floor((Math.random() * (81 - 0) + 0));
       }

       function shuffleArray(arr) {
        return arr.sort(function (a, b) { return Math.random() - 0.5 })
      }

    //   function displayAnswer(answer) {
    //     let li = document.getElementById('answers').querySelector()
    //   }