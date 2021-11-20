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

    //   let displayProblem;
    //   let displayAnswers;
    //   let problemNumber = 1;
    //   let 

     buildNewProblem();

      /** Functions called above
       * 
       * 
       */

      let problemNumber = 1;
      let numberCorrect = 0;
    

       function buildNewProblem() {
        let operatorClicked = false;
      
        //Create element to house expression in div
        // let expression = document.createElement('p');


        //Create random numbers to act as left and right sides of multiplication problem
        let left = Math.floor((Math.random() * (9 - 0) + 0));
        let right = Math.floor((Math.random() * (9 - 0) + 0));

        //Set correct answer equal to random numbers product
        const correctAnswer = left * right;

        //Write problem to created element in string format
        expression =  left + " * " + right;
        let parent = document.getElementById('problem').querySelector('.expression');
        parent.innerText = expression;

        //Initialize array containing correct answers and 3 wrong answers
        let answers = [correctAnswer, getRandomNumber(), getRandomNumber(), getRandomNumber()];

        //Randomize order of possible answers in array
        let array = shuffleArray(answers);

        //Write answers from array to four li elements which IDs were created for
        for (let i=0; i<array.length; i++){
    
            while(array[i] === array[i+1] || array[i] === array[i+2] || array[i] === array[i+3]){
                //Do something (this is a stupid way to do this)
                array = createAnswerArray();
            }
            if (i === 0){
                let firstLi = document.getElementById('one');
                firstLi.innerText = array[0]; 
            } else if (i === 1){
                let secondLi = document.getElementById('two');
                secondLi.innerText = array[1]; 
            } else if (i === 2){
                let thirdLi = document.getElementById('three');
                thirdLi.innerText = array[2]; 
            } else if (i === 3){
                let fourthLi = document.getElementById('four');
                fourthLi.innerText = array[3]; 
            } else return null;
        }

            let listOfAnswers = document.getElementById('answers').querySelector('ul').querySelectorAll('li');
            listOfAnswers.forEach(element => element.addEventListener('click', (event) => {
                console.log(event.target.innerText)
                console.log(correctAnswer);
                // operatorClicked = true;
                if(event.target.innerText == correctAnswer){
                    event.target.setAttribute('class', 'correct-answer');
                    numberCorrect += 1;
                    problemNumber += 1;
                    let problem = document.querySelector('.currentProblem');
                    problem.innerText = problemNumber;
                    let number = document.querySelector('.currentScore');
                    number.innerText = numberCorrect;
                    // operatorClicked = false;
                    // document.getElementById('problem').querySelector('.expression').remove('p');
                    buildNewProblem();
                }
                else{
                    problemNumber+=1;
                    let problem = document.getElementById('currentProblem').innerText;
                    problem = problemNumber.toString;
                    buildNewProblem();
                    }
                
            }))
            
        }

        /**
         *  @param {Event} event 
         * */
function clickNumber(event) {
    event.target.setAttribute('class', 'correct-answer');
  if( operatorClicked ) {
    display.value = val;
    operatorClicked = false;
  } else {
    display.value == 0 ? display.value = val : display.value += val;
  }
}

    // function gamePlay(){
    //     let problemNumber = 1;
    //     let numberCorrect = 0;
    //     for(let i = 0; i<10; i++){
    //         buildNewProblem();
    //         let listOfAnswers = document.getElementById('answers').querySelector('ul').querySelectorAll('li');
    //         listOfAnswers.forEach(element => element.addEventListener('click', (event) => {
    //             console.log(event.target.innerText)
    //             if(event.target.innerText == correctAnswer){
    //                 event.target.setAttribute('class', 'correct-answer');
    //                 numberCorrect += 1;
    //                 problemNumber += 1;
    //             }
    //             else {
    //                 problemNumber+=1;
    //             }
    //         }))
    //     }
    // }



       function getRandomNumber() {
        return  Math.floor((Math.random() * (81 - 0) + 0));
       }

       function shuffleArray(arr) {
        return arr.sort(function (a, b) { return Math.random() - 0.5 })
      }

      function createAnswerArray(){
           //Initialize array containing correct answers and 3 wrong answers
        let answers = [correctAnswer, getRandomNumber(), getRandomNumber(), getRandomNumber()];

        //Randomize order of possible answers in array
        let array = shuffleArray(answers);
        return array;
      }

    //   function displayAnswer(answer) {
    //     let li = document.getElementById('answers').querySelector()
    //   }