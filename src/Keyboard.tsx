import styles from "./Keyboard.module.css";

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const KEYS = alpha.map((x) => String.fromCharCode(x));

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter}:KeyboardProps) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gap: "1rem",
            }}
        >
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                    onClick={() => addGuessedLetter(key)}
                    className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                    disabled={isActive || isInactive}
                    key={key}>{key}</button>
                )
            })}
        </div>
    )

}