import React, { useState, useEffect } from "react"
import moment from 'moment'

import BolopusApi from '../../services/api'
import LocalStorageService from '../../services/local-storage'

import GameComponent from "../game"

import styles from './guess.module.scss'

const GuessComponent = () => {
    moment.updateLocale('pt', {
        months: [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
            "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ]
    });
    
    let title = 'Jogos de ' + moment().locale('pt-br').format('DD [de] MMMM')

    const [matches, setMatches] = useState([])
    const [bets, setBets] = useState([])

    const fetchData = async () => {
        try {
            const userId = JSON.parse(LocalStorageService.getUserId()).uuid
            let data = await BolopusApi.retrieveAllBetsByUser(userId)
            setBets(data)
        } catch (e) {
            console.error('Falha ao recuperar bets e=', e)
            setBets([])
        }

        try {
            const data = await BolopusApi.retrieveMatches()
            //console.log(data.filter(match => moment().startOf('day').isSame(moment(match.horario).startOf('day'))))
            const matchesOfDay = data.filter(match => moment().startOf('day').isSame(moment(match.horario).startOf('day')))
            const sortedMatches = matchesOfDay.sort((a, b) => moment(a.horario).unix() - moment(b.horario).unix())
            setMatches(sortedMatches)
        } catch (e) {
            console.error('Falha ao recuperar matches e=', e)
            setMatches([])
        }
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])

    return (
        <div className={styles.content}>
            <h1>{title}</h1>
            {
                matches.length === 0
                    ? <h2>Não há jogos hoje!</h2>
                    : matches.map(match => {
                        return (
                            <GameComponent key={match.id} match={match} bets={bets} />
                        )
                    })
            }
        </div>
    )
}

export default GuessComponent