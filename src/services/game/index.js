//https://www.maisbolao.com.br/regulamento
//https://www.bolaofutebol.com.br/rules.html

const GameManager = () => {

    const AC = 'AC' // Acertou o placar
    const GV = 'GV' // Gols do time vencedor
    const SG = 'SG' // Saldo de gols
    const GP = 'GP' // Gols do time perdedor
    const AV = 'AV' // Acertou o vencedor
    const EG = 'EG' // Empate garantido
    const ER = 'ER' // Errou

    const acertouOPlacar = (game, guess) => {
        return game.time1.gols === guess.time1.gols && game.time2.gols === guess.time2.gols
    }

    const golsDoTimeVencedor = (game, guess) => {
        if (game.time1.gols > game.time2.gols) {
            return game.time1.gols === guess.time1.gols
        }

        if (game.time2.gols > game.time1.gols) {
            return game.time2.gols === guess.time2.gols
        }

        return false
    }

    const saldoDeGols = (game, guess) => {
        let sgGameResult = game.time1.gols - game.time2.gols
        let sgGuess = guess.time1.gols - guess.time2.gols

        return (sgGameResult - sgGuess) === 0
    }

    const golsdoTimePerdedor = (game, guess) => {
        if (game.time1.gols < game.time2.gols) {
            return game.time1.gols === guess.time1.gols
        }

        if (game.time2.gols < game.time1.gols) {
            return game.time2.gols === guess.time2.gols
        }

        return false
    }

    const acertouOVencedor = (game, guess) => {
        if (game.time1.gols > game.time2.gols) {
            return guess.time1.gols > guess.time2.gols
        }

        if (game.time2.gols > game.time1.gols) {
            return guess.time2.gols > guess.time1.gols
        }

        return false
    }

    const empateGarantido = (guess) => {
        return guess.time1.gols === guess.time2.gols
    }

    const getScore = (type) => {
        switch (type) {
            case AC:
                return 25
            case GV:
                return 18
            case SG:
                return 15
            case GP:
                return 12
            case AV:
                return 10
            case EG:
                return 4
            case ER:
                return 0
            default:
                return 0
        }
    }

    const getScoreType = (game, guess) => {
        //Acertou o placar
        let result = acertouOPlacar(game, guess)
        if (result) {
            return AC
        }

        //Gols do time vencedor
        result = golsDoTimeVencedor(game, guess)
        if (result) {
            return GV
        }

        //Saldo de gols
        result = saldoDeGols(game, guess)
        if (result) {
            return SG
        }

        //Gols do time perdedor
        result = golsdoTimePerdedor(game, guess)
        if (result) {
            return GP
        }

        //Acertou o vencedor
        result = acertouOVencedor(game, guess)
        if (result) {
            return AV
        }

        //Empate garantido
        result = empateGarantido(game, guess)
        if (result) {
            return EG
        }

        return ER
    }

    return {
        getScore,
        getScoreType,
    }
}

export default GameManager()