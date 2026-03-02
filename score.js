function finalScore (omr) {
          if(typeof omr !=="object"){
            return "Invalid";
          }
          let {right, wrong, skip}= omr;
          if(typeof right !== "number"|| typeof wrong !=="number"|| typeof skip !=="number"){
            return "Invalid";
          }
          const totalQuestions = right + wrong + skip;
          if(totalQuestions!== 100){
            return "Invalid";
          }
          let score= (right*1)-(wrong*0.5);
          return Math.round(score);

}
console.log(finalScore({right:80,wrong:25,skip:0}));