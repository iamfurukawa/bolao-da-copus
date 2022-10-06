import React, { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import BolopusApi from '../../services/api'

import styles from './register.module.scss'

const RegisterPage = () => {

    const navigate = useNavigate()

    const [document, setDocument] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const register = async () => {
        console.table(document, email, password, confirmPassword, name)
        if (document === '' || email === '' || password === '' || confirmPassword === '' || name === '') {
            console.log('Preencha todos os campos')
            toast.error("Preencha todos os campos.", { position: "top-right" })
            return
        }

        if (password !== confirmPassword) {
            console.log('As senhas não são idênticas')
            toast.error("As senhas não são idênticas.", { position: "top-right" })
            return
        }

        const toastLoading = toast.loading('Registrando...');

        try {
            await BolopusApi.register({ name, document, email, password })
            toast.dismiss(toastLoading);
            toast.success('Usuário registrado com sucesso.')
            setTimeout(function () {
                navigate('/login')
            }, 3000);
        } catch (e) {
            toast.dismiss(toastLoading);
            toast.error('Erro ao registrar usuário.')
        }
    }

    return (
        <>
            <Toaster />
            <main className={styles.main}>
                <h1>Cadastre-se</h1>
                <h2>CPF</h2>
                <input type={'text'} onChange={(evt) => setDocument(evt.target.value)} />

                <h2>Nome</h2>
                <input type={'text'} onChange={(evt) => setName(evt.target.value)} />

                <h2>Email</h2>
                <input type={'text'} onChange={(evt) => setEmail(evt.target.value)} />

                <h2>Senha</h2>
                <input type={'password'} onChange={(evt) => setPassword(evt.target.value)} />

                <h2>Repita a senha</h2>
                <input type={'password'} onChange={(evt) => setConfirmPassword(evt.target.value)} />

                <button onClick={async () => await register()}>Cadastrar</button>
            </main>
        </>
    )
}

export default RegisterPage