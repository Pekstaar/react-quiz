import React from "react";
import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}{" "}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer, i) => (
          <ButtonWrapper
            userClicked={userAnswer?.answer === answer}
            correct={userAnswer?.correctAnswer === answer}
            key={i}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
