import React from "react"
import Flags from "./flags"

import styles from './game.module.scss'

const GameComponent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.box}>
                <Flags.AGR className={styles.icon}></Flags.AGR>
                <input type={'text'}></input>
            </div>
            <div className={styles.text}>X</div>
            <div className={styles.box}>
                <input type={'text'}></input>
                <Flags.AGR className={styles.icon}></Flags.AGR>
            </div>
        </div>
    )
}

export default GameComponent