// eslint-disable-next-line
import firebase from 'firebase'
import FirebaseService from './firebase-service'

const FirebaseFirestoreService = () => {

    const PEOPLE = 'people'

    const GUESS = 'guess'

    const RESULT = 'result'

    const GAME = 'game'

    const init = () => FirebaseService.app().firestore()

    const register = async (data) => {
        await init().collection(BOARD).doc(BOARD).set(data)
    }

    const signIn = async (data) => {
        await init().collection(BOARD).doc(BOARD).set(data)
    }

    const setResultForGame = async () => init().collection(BOARD).doc(BOARD).get()

    const setGame = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

    const setGuess = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

    const getAllGame = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

    const getAllGuess = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

    const getGuessByUser = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

    const getUser = async (cpf) => init().collection(PESSOAS).doc(cpf).get()

    return {
        setGame,
        setResultForGame,
        register,
        signIn,
        setGuess,
        getAllGame,
        getAllGuess,
        getGuessByUser,
        getUser,
    }
}

export default FirebaseFirestoreService()