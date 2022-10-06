import axios from 'axios'

//https://react-hot-toast.com/docs/toast
//https://react-hot-toast.com/

import LocalStorageService from '../local-storage';

const BolopusApi = () => {

    //const BASE_URL = 'https://bolao-da-copus-api.vercel.app/api'
    const BASE_URL = 'http://localhost:3000/api'

    const signIn = async (document, password) => {
        const res = await axios.get(BASE_URL + '/auth', {
            headers: {
                document,
                password
            }
        })
        LocalStorageService.saveToken(res.data['access_token'])
    }

    const register = async (user) => {
        await axios.post(BASE_URL + '/auth', user)
    }

    const retrieveMatches = async () => {
        const res = await axios.get(BASE_URL + '/games/matches', {
            headers: {
                Authorization: 'Bearer ' + LocalStorageService.getToken()
            }
        })
        return res.data
    }

    const saveBet = async (bet) => {
        await axios.post(BASE_URL + '/bet', bet,
            {
                headers: {
                    Authorization: 'Bearer ' + LocalStorageService.getToken()
                }
            })
    }

    const retrieveAllBets = async () => {
        try {
            const res = await axios.get(BASE_URL + '/bet', {
                headers: {
                    Authorization: 'Bearer ' + LocalStorageService.getToken()
                }
            })
            return res.data
        } catch (e) {
            console.error('Erro ao recuperar apostas: ', e)
            toast.error("Erro ao recuperar apostas.", { position: "top-right" })
        }
    }

    const retrieveAllBetsByUser = async (userId) => {
        const res = await axios.get(BASE_URL + '/bet/' + userId, {
            headers: {
                Authorization: 'Bearer ' + LocalStorageService.getToken()
            }
        })
        return res.data
    }

    const retrieveClassification = async () => {
        const res = await axios.get(BASE_URL + '/classification', {
            headers: {
                Authorization: 'Bearer ' + LocalStorageService.getToken()
            }
        })
        return res.data
    }

    return {
        signIn,
        register,
        retrieveMatches,
        saveBet,
        retrieveAllBets,
        retrieveAllBetsByUser,
        retrieveClassification
    }
}

export default BolopusApi()