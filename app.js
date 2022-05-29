// const game = {
//   title: 'Guess the Number!',
//   biggestNum: 100,
//   smallestNum: 1,
//   secretNum: null,
//   prevGuesses: [],
//   play: function() {
//     this.secretNum = Math.floor(Math.random() * 
//    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//     this.getGuess()
//     do{
//       this.prevGuesses.push(this.getGuess())
//       this.render()
//       console.log()
//     } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
//   },
//     getGuess: function(){
//       let guess
//       do {
//       guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
//      } while (guess < this.smallestNum || guess > this.biggestNum)
//       return guess  
//     },
//     render: function(){
//       if([this.prevGuesses.length - 1]=== this.secretNum){
//         alert(`Congrats you guessed the ${this.secretNum}`)
//       } else if ([this.prevGuesses.length - 1] > this.secretNum){
//         alert(`Your guess is too high guess again`)
//       } else if ([this.prevGuesses.length - 1] < this.scretNum){
//         alert(`Your guess is too low guess again`)
//       }    
//     }
//   }
//   game.play()

//   const game = {
//     title: 'Guess the Number!',
//     biggestNum: 100,
//     smallestNum: 1,
//     secretNum: null,
//     play: function() {
//       this.secretNum = Math.floor(Math.random() * 
//         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//     prevGuesses = []
//     this.getGuess()
//     },
//     getGuess: function(){
//         let guess
//         do {
//         guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
//        } while (guess < this.smallestNum || guess > this.biggestNum)
//        return guess  
//     }
// white_check_mark
// eyes
// raised_hands







// Dylan Jones  1:59 PM
// const game = {
//   title: 'Guess the Number!',
//   biggestNum: 100,
//   smallestNum: 1,
//   secretNum: null,
//   play: function() {
//     this.secretNum = Math.floor(Math.random() * 
//    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//     prevGuesses = []
//     this.getGuess()
//     do{
//       this.prevGuesses.push(this.getGuess())
//       this.render()
//     } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
//   },
//     getGuess: function(){
//       let guess
//       do {
//       guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
//      } while (guess < this.smallestNum || guess > this.biggestNum)
//       return guess  
//     },
//     render: function(){
//       if([this.prevGuesses.length - 1]=== this.secretNum){
//         alert(`Congrats you guessed the ${this.secretNum}`)
//       } else if ([this.prevGuesses.length - 1] > this.secretNum){
//         alert(`Your guess is too high guess again`)
//       } else if ([this.prevGuesses.length - 1] < this.scretNum){
//         alert(`Your guess is too low guess again`)
//       }    
//     }
//   }
//   game.play()

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
   (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    do{
      this.prevGuesses.push(this.getGuess())
      console.log(this.prevGuesses)
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },
    getGuess: function(){
      let guess
      do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
     } while (guess < this.smallestNum || guess > this.biggestNum)
      return guess  
    },
    render: function(){
      if(this.prevGuesses[this.prevGuesses.length - 1]=== this.secretNum){
        alert(`Congrats you guessed the ${this.secretNum}`)
      } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){
        alert(`Your guess is too high guess again`)
      } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.scretNum){
        alert(`Your guess is too low guess again`)
      }    
    }
  }
  game.play()