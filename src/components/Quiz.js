import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [activeLink, setActiveLink] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setActiveLink('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button style={{ backgroundColor: activeLink === 'optionA' ? 'red' : 'white' }}
          onClick={() => {
            chooseOption("optionA");
            setActiveLink('optionA');
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button style={{ backgroundColor: activeLink === 'optionB' ? 'red' : 'white' }}
          onClick={() => {
            chooseOption("optionB");
            setActiveLink('optionB');
            
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button style={{ backgroundColor: activeLink === 'optionC' ? 'red' : 'white' }}
          onClick={() => {
            chooseOption("optionC");
            setActiveLink('optionC');
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button style={{ backgroundColor: activeLink === 'optionD' ? 'red' : 'white' }}
          onClick={() => {
            chooseOption("optionD");
            setActiveLink('optionD');
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
