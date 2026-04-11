# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**"よむ、2分。"** — A 2-minute Japanese reading comprehension quiz app. Users read a passage, select a multiple-choice answer, and receive feedback (evidence quote + reading tip). Built as a vanilla JS MVP with no dependencies.

## Running the App

Open `index.html` directly in a browser. No build step, server, or package manager required.

## Architecture

Three files only:

- **[script.js](script.js)** — All application logic
- **[style.css](style.css)** — All styles (dark theme, glassmorphism)
- **[index.html](index.html)** — Shell with DOM structure; no logic

### script.js structure

| Lines | Purpose |
|-------|---------|
| 1–97 | `quizData` array — quiz content (passage, question, choices, answer, evidence, tip) |
| 99–103 | `state` object — `currentIndex`, `isAnswered` |
| 105–114 | Cached DOM element references |
| 116+ | Functions: `init()`, `renderQuestion()`, `handleSelect(index)`, `handleNext()` |

### Quiz data shape

```js
{
  id: string,
  genre: string,       // e.g. "申込書・規約"
  skillTag: string,    // e.g. "数量・条件"
  passage: string,
  question: string,
  choices: string[],   // 3 options
  answerIndex: number, // 0-indexed correct answer
  evidence: string,    // quote from passage proving the answer
  tip: string          // reading technique tip shown after answering
}
```

## Key Design Decisions

- **No framework** — deliberately minimal; keep it vanilla JS
- **State is a plain object** — `state.currentIndex` and `state.isAnswered` are the only mutable state
- **Explanation area is hidden by default** — revealed via class toggle after answer selection
- **Quiz loops** — after the last question, wraps back to index 0
- **Dark glassmorphism theme** — slate-blue background (#0f172a → #1e293b), cyan accent (#38bdf8)
