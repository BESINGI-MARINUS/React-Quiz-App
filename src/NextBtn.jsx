function NextBtn({ dispatch, answer, numOfQuestions, index }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        index + 1 === numOfQuestions
          ? dispatch({ type: "finishQuestions" })
          : dispatch({ type: "nextQuestion" })
      }
    >
      Next
    </button>
  );
}

export default NextBtn;
