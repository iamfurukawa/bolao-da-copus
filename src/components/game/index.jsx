import React, { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import moment from 'moment'

import BolopusApi from '../../services/api'
import Flags from "./flags"

import styles from './game.module.scss'

const GameComponent = ({ match, bets }) => {
    const [time1, setTime1] = useState(null)
    const [time2, setTime2] = useState(null)
    const active = moment().isBefore(moment(match.horario).add(1, 'minute'))

    useEffect(() => {
        const betFounded = bets.find(b => b.gameId == match.id) || null
        if (betFounded) {
            setTime1(betFounded.time1.gols)
            setTime2(betFounded.time2.gols)
        }

    }, [])

    const save = async () => {
        const toastLoading = toast.loading('Salvando aposta...');
        try {
            await BolopusApi.saveBet({
                "gameId": match.id,
                "time1": {
                    "gols": time1
                },
                "time2": {
                    "gols": time2
                }
            })

            toast.dismiss(toastLoading);
            toast.success('Aposta registrada!')
        } catch (e) {
            toast.dismiss(toastLoading);
            toast.error('Erro ao registrar aposta, recarregue a página.')
        }
    }

    return (
        <>
            <Toaster />
            <h2>Jogão às {match.horario}</h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <img src={Flags.converterFlag(match.time1.nome)} className={styles.icon}></img>
                    <input type={'text'} value={time1 || ''} onChange={(evt) => setTime1(evt.target.value)} disabled={!active} />
                </div>
                <div className={styles.text}>X</div>
                <div className={styles.box}>
                    <input type={'text'} value={time2 || ''} onChange={(evt) => setTime2(evt.target.value)} disabled={!active} />
                    <img src={Flags.converterFlag(match.time2.nome)} className={styles.icon}></img>
                </div>
            </div>
            <button onClick={save} disabled={!active || time1 === null || time2 === null || time1 === '' || time2 === ''}>Salvar aposta</button>
        </>
    )
}

export default GameComponent