import Dice from "./Dice";
import "./App.css";

import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import { Tooltip, IconButton } from '@mui/material';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';


export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(dice => dice.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(dice => dice.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDice() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDice())
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(dice => {
                return dice.isHeld ?
                    dice :
                    generateNewDice()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(dice => {
            return dice.id === id ?
                { ...dice, isHeld: !dice.isHeld } :
                dice
        }))
    }

    const diceElements = dice.map(dice => (
        <Dice
            key={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            holdDice={() => holdDice(dice.id)}
        />
    ))

    return (
        <main>
            {tenzies && <Confetti />}

            <div className="help-badge">
                <Tooltip
                    title="Klicke auf einen Würfel um ihn zu halten. Klicke ihn wieder um ihn loszulassen. 
                            Würfel erneut bis deine gewünschte Zahl erscheint. Ziel des Spiels ist es, dass alle Würfel die gleiche Zahl 
                            anzeigen."
                >
                    <IconButton>
                        <HelpCenterIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <h1 className="title">TENZI</h1>
            <p className="instructions">Mische und halte Würfel, bis alle Würfel die gleiche Zahl anzeigen!
            </p>

            <div className="dice-container">
                {diceElements}
            </div>
            <button
                className="roll-dice-btn"
                onClick={rollDice}
            >
                {tenzies ? "Neues Spiel" : "Würfeln"}
            </button>
        </main>
    )
}