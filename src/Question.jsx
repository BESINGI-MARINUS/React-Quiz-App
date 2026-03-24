function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((ans, i) => (
        <button
          className={`btn btn-option ${answer === i ? "answer" : ""} ${hasAnswered && (i === question.correctOption ? "correct" : "wrong")}`}
          key={ans}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {ans}
        </button>
      ))}
    </div>
  );
}

export default Question;
