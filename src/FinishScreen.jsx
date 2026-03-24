function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  let emoji;
  const percentage = Math.ceil((points / totalPoints) * 100);

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😎";
  if (percentage >= 20 && percentage < 50) emoji = "🥲";
  if (percentage < 20) emoji = "🤦‍♀️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored {points} points out of {totalPoints} (
        {percentage}%)
      </p>
      <p className="highscore">(HighScore: {highScore}) points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
