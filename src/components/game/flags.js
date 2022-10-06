import ALE from "../../assets/flags/Alemanha.svg";
import ARA from "../../assets/flags/ArabiaSaudita.svg";
import ARG from "../../assets/flags/Argentina.svg";
import AUS from "../../assets/flags/Australia.svg";
import BEL from "../../assets/flags/Belgica.svg";
import BRA from "../../assets/flags/Brasil.svg";
import CAM from "../../assets/flags/Camaroes.svg";
import CAN from "../../assets/flags/Canada.svg";
import CAT from "../../assets/flags/Catar.svg";
import COR from "../../assets/flags/CoreiaDoSul.svg";
import CRC from "../../assets/flags/CostaRica.svg";
import CRO from "../../assets/flags/Croacia.svg";
import DIN from "../../assets/flags/Dinamarca.svg";
import ESP from "../../assets/flags/Espanha.svg";
import EQU from "../../assets/flags/Equador.svg";
import EUA from "../../assets/flags/EstadosUnidos.svg";
import FRA from "../../assets/flags/Franca.svg";
import GAL from "../../assets/flags/Gales.svg";
import GAN from "../../assets/flags/Gana.svg";
import HOL from "../../assets/flags/Holanda.svg";
import ING from "../../assets/flags/Inglaterra.svg";
import IRA from "../../assets/flags/Ira.svg";
import JAP from "../../assets/flags/Japao.svg";
import MAR from "../../assets/flags/Marrocos.svg";
import MEX from "../../assets/flags/Mexico.svg";
import POL from "../../assets/flags/Polonia.svg";
import POR from "../../assets/flags/Portugal.svg";
import SEN from "../../assets/flags/Senegal.svg";
import SER from "../../assets/flags/Servia.svg";
import SUI from "../../assets/flags/Suica.svg";
import TUN from "../../assets/flags/Tunisia.svg";
import URU from "../../assets/flags/Uruguai.svg";

const Teams = () => {

    const Alemanha = 'ALEMANHA'
    const ArabiaSaudita = 'ARABIA_SAUDITA'
    const Argentina = 'ARGENTINA'
    const Australia = 'AUSTRALIA'
    const Belgica = 'BELGICA'
    const Brasil = 'BRASIL'
    const Camaroes = 'CAMAROES'
    const Canada = 'CANADA'
    const Catar = 'CATAR'
    const CoreiaDoSul = 'COREIA_DO_SUL'
    const CostaRica = 'COSTA_RICA'
    const Croacia = 'CROACIA'
    const Dinamarca = 'DINAMARCA'
    const Equador = 'EQUADOR'
    const Espanha = 'ESPANHA'
    const EstadosUnidos = 'ESTADOS_UNIDOS'
    const Franca = 'FRANCA'
    const Gales = 'GALES'
    const Gana = 'GANA'
    const Holanda = 'HOLANDA'
    const Inglaterra = 'INGLATERRA'
    const Ira = 'IRA'
    const Japao = 'JAPAO'
    const Marrocos = 'MARROCOS'
    const Mexico = 'MEXICO'
    const Polonia = 'POLONIA'
    const Portugal = 'PORTUGAL'
    const Senegal = 'SENEGAL'
    const Servia = 'SERVIA'
    const Suica = 'SUICA'
    const Tunisia = 'TUNISIA'
    const Uruguai = 'URUGUAI'

    return {
        Alemanha,
        ArabiaSaudita,
        Argentina,
        Australia,
        Belgica,
        Brasil,
        Camaroes,
        Canada,
        Catar,
        CoreiaDoSul,
        CostaRica,
        Croacia,
        Dinamarca,
        Equador,
        Espanha,
        EstadosUnidos,
        Franca,
        Gales,
        Gana,
        Holanda,
        Inglaterra,
        Ira,
        Japao,
        Marrocos,
        Mexico,
        Polonia,
        Portugal,
        Senegal,
        Servia,
        Suica,
        Tunisia,
        Uruguai,
    }
}

const Flag = () => {
    const teams = Teams()
    const converterFlag = (team) => {
        switch (team) {
            case teams.Alemanha:
                return ALE
            case teams.ArabiaSaudita:
                return ARA
            case teams.Argentina:
                return ARG
            case teams.Australia:
                return AUS
            case teams.Belgica:
                return BEL
            case teams.Brasil:
                return BRA
            case teams.Camaroes:
                return CAM
            case teams.Canada:
                return CAN
            case teams.Catar:
                return CAT
            case teams.CoreiaDoSul:
                return COR
            case teams.CostaRica:
                return CRC
            case teams.Croacia:
                return CRO
            case teams.Dinamarca:
                return DIN
            case teams.Equador:
                return EQU
            case teams.Espanha:
                return ESP
            case teams.EstadosUnidos:
                return EUA
            case teams.Franca:
                return FRA
            case teams.Gales:
                return GAL
            case teams.Gana:
                return GAN
            case teams.Holanda:
                return HOL
            case teams.Inglaterra:
                return ING
            case teams.Ira:
                return IRA
            case teams.Japao:
                return JAP
            case teams.Marrocos:
                return MAR
            case teams.Mexico:
                return MEX
            case teams.Polonia:
                return POL
            case teams.Portugal:
                return POR
            case teams.Senegal:
                return SEN
            case teams.Servia:
                return SER
            case teams.Suica:
                return SUI
            case teams.Tunisia:
                return TUN
            case teams.Uruguai:
                return URU
        }
    }

    return {
        converterFlag,
        ALE,
        ARA,
        ARG,
        AUS,
        BEL,
        BRA,
        CAM,
        CAN,
        CAT,
        COR,
        CRC,
        CRO,
        DIN,
        ESP,
        EUA,
        FRA,
        GAL,
        GAN,
        HOL,
        ING,
        IRA,
        JAP,
        MAR,
        MEX,
        POL,
        POR,
        SEN,
        SER,
        SUI,
        TUN,
        URU,
    }
}

export default Flag()