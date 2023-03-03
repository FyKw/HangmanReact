import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import words from './wordlist.json';
import {HangmanDrawing} from "./HangmanDrawing";
import {HangmanWord} from "./HangmanWord";
import {Keyboard} from "./Keyboard";

function App() {
  const [wordToGuess, SetWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, SetGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    SetGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])

  const isLoser =  inCorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])

  return <div style={{
    maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto", alignItems: "center"}}
  >
    <div style={{fontSize: "2rem", textAlign: "center"}}>
      {isWinner && "Noice! - F5 for another round"}
      {isLoser && "Schade! - F5 for another round"}
    </div>

    <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
    <div style={{ alignSelf: "stretch"}}>
      <Keyboard
      activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter)
      )}
      inactiveLetters={inCorrectLetters}
      addGuessedLetter={addGuessedLetter}
      />
    </div>
  </div>
}

export default App;
