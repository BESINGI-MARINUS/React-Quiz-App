import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);

      return () => clearInterval(id);
    },
    [dispatch],
  );
  return (
    <div className="timer">
      {`${mins}`.padStart(2, 0)}:{`${secs}`.padStart(2, 0)}
    </div>
  );
}

export default Timer;
