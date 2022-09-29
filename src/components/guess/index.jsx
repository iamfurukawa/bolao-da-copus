import React from "react"

import moment from 'moment'

import styles from './guess.module.scss'
import GameComponent from "../game"

const GuessComponent = () => {

    let title = 'Jogos de ' + moment().locale('pt-br').format('DD [de] MMMM')

    return (
        <div class={styles.content}>
            <h1>{title}</h1>
            <GameComponent />
            <GameComponent />
            <GameComponent />
            <button>Palpitar</button>
        </div>
    )
}

export default GuessComponent