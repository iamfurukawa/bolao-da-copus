import React, { useState } from "react"

import {
    Link,
    useNavigate
} from "react-router-dom"

import TableComponent from "../../components/table"
import GuessComponent from "../../components/guess"

import styles from './home.module.scss'

const HomePage = () => {

    return (
        <main className={styles.main}>
            <TableComponent />
            <GuessComponent />
        </main>
    )
}

export default HomePage