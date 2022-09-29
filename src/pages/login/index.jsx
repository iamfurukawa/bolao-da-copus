import React, { useState } from "react"

import {
    Link,
    useNavigate
} from "react-router-dom"

import styles from './login.module.scss'

const LoginPage = () => {

    const navigate = useNavigate()

    const [document, setDocument] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        console.table(document, password)
        navigate('/')
    }

    return (
        <main className={styles.main}>
            <h1>Entrar</h1>
            <h2>CPF</h2>
            <input type={'text'} onChange={(evt) => setDocument(evt.target.value)}/>

            <h2>Senha</h2>
            <input type={'password'} onChange={(evt) => setPassword(evt.target.value)}/>

            <button onClick={signIn}>Login</button>
            <Link to="/register">Não tenho cadastro</Link>
        </main>
    )
}

export default LoginPage