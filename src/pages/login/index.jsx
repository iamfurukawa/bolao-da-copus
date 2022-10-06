import React, { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import {
    Link,
    useNavigate
} from "react-router-dom"

import BolopusApi from '../../services/api'
import styles from './login.module.scss'

const LoginPage = () => {

    const navigate = useNavigate()

    const [document, setDocument] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        const toastLoading = toast.loading('Logando...');
        try {
            await BolopusApi.signIn(document, password)
            toast.dismiss(toastLoading);
            navigate('/')
        } catch (e) {
            console.error('Erro ao logar: ', e)
            toast.error("Erro ao logar.", { position: "top-right" })
        }
    }

    return (
        <>
            <Toaster />
            <main className={styles.main}>
                <h1>Entrar</h1>
                <h2>CPF</h2>
                <input type={'text'} onChange={(evt) => setDocument(evt.target.value)} />

                <h2>Senha</h2>
                <input type={'password'} onChange={(evt) => setPassword(evt.target.value)} />

                <button onClick={async () => await signIn()}>Login</button>
                <Link to="/register">Não tenho cadastro</Link>
            </main>
        </>
    )
}

export default LoginPage