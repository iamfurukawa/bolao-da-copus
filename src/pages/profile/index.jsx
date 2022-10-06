import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BolopusApi from '../../services/api'

import {
    useParams
} from "react-router-dom"

const ProfilePage = () => {
    const navigate = useNavigate()
    let { userId } = useParams();

    const [bets, setBets] = useState([])

    const fetchData = async () => {
        try {
            const data = await BolopusApi.retrieveAllBetsByUser(userId)
            setBets(data)
        } catch (e) {
            console.error('Falha ao recuperar profile e=', e)
            setClassification([])
        }
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])

    const back = () => {
        navigate('/')
    }

    return (
        <div>
            <div>profile {userId}</div>
            <div>{JSON.stringify(bets)}</div>
            <button onClick={back}>Voltar</button>
        </div>
    )
}

export default ProfilePage