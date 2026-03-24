# React Quiz App

A functional quiz application built with React and `useReducer` state management. Questions are fetched from a local JSON API powered by `json-server`, with timer and scoring features.

##  App Overview

- Loads question data from `http://localhost:8000/questions` (via `data/questions.json`).
- Handles states: `loading`, `error`, `ready`, `active`, `finished`.
- Includes:
  - start screen
  - question + multiple-choice answer buttons
  - immediate feedback (correct/wrong)
  - next question flow
  - progress bar
  - countdown timer (30s per question)
  - points + high score tracking

##  Component Breakdown

- `src/App.js`
  - `useReducer` for app state
  - fetches questions using `useEffect`
  - renders screens based on `status`

- `src/Header.js`
  - static header and app title

- `src/Loader.js`
  - shows loading UI while questions load

- `src/Error.js`
  - shows fetch error message

- `src/StartScreen.jsx`
  - displays question count and start button

- `src/Question.jsx`
  - renders current question text
  - `Options` handles choice buttons and styling states

- `src/NextBtn.jsx`
  - visible after answer selected
  - dispatches `nextQuestion` or `finishQuestions`

- `src/Progress.jsx`
  - progress bar and points scoreboard

- `src/Timer.jsx`
  - counts down seconds with `setInterval`
  - dispatches `tick`

- `src/FinishScreen.jsx`
  - final score and high score
  - restart button dispatches `restart`

- `src/Main.jsx` and `src/Footer.jsx`
  - simple layout wrappers

##  Data Source

`data/questions.json` includes a question set with:
- `question` (string)
- `options` (array)
- `correctOption` (index of correct answer)
- `points` (int)

`json-server` exposes this as `/questions`.

##  Scripts

In `package.json`:

- `npm start`  run React app at `http://localhost:3000`
- `npm run server`  run API server at `http://localhost:8000` (json-server)
- `npm test`  run test watcher
- `npm run build`  production bundle

##  Setup & Run

1. Install dependencies:

```bash
npm install
```

2. Start the mock API server:

```bash
npm run server
```

3. In a separate terminal, start React:

```bash
npm start
```

4. Open: `http://localhost:3000`

##  Game Flow

1. Load app (status `loading`)
2. fetch questions  `ready`
3. click "Let't Start"  `active`
4. Timer starts with `questions.length * 30`
5. Choose an answer:
   - correct = add question points
   - wrong = keep points
6. click `Next` until final question
7. `finished` screen: score + high score
8. `Restart` resets progress and keeps highs

##  Notes / Troubleshooting

- If questions fail to load, ensure `npm run server` is running and port 8000 is free.
- `Error` screen is shown when fetch fails.
- The timer runs on `active` and ends quiz when it hits `0`.

##  Extension ideas

- Add categories and difficulty levels
- Add local storage for high score + answered history
- Add Progressive Enhancement for keyboard controls
- Add animation and transitions
- Add per-question time bonus/penalty

---

> Built as part of React learning projects to demonstrate hooks, reducer patterns, and data-driven UI.
