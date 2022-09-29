import React, { useState } from "react"

import { useNavigate } from 'react-router-dom'

import styles from './register.module.scss'

const RegisterPage = () => {

    const navigate = useNavigate()

    const [document, setDocument] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const register = () => {
        console.table(document, email, password, confirmPassword)
        navigate('/login')
    }

    return (
        <main className={styles.main}>
            <h1>Cadastre-se</h1>
            <h2>CPF</h2>
            <input type={'text'} onChange={(evt) => setDocument(evt.target.value)}/>

            <h2>Email</h2>
            <input type={'text'} onChange={(evt) => setEmail(evt.target.value)}/>

            <h2>Senha</h2>
            <input type={'password'} onChange={(evt) => setPassword(evt.target.value)}/>

            <h2>Repita a senha</h2>
            <input type={'password'} onChange={(evt) => setConfirmPassword(evt.target.value)}/>

            <button onClick={register}>Cadastrar</button>
        </main>
    )
}

export default RegisterPage