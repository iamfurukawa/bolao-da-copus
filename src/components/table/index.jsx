import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import BolopusApi from '../../services/api'

import styles from './table.module.scss'

const TableComponent = () => {

    const navigate = useNavigate()

    const [classification, setClassification] = useState([])

    const fetchData = async () => {
        try {
            const data = await BolopusApi.retrieveClassification()
            setClassification(data.classification)
        } catch (e) {
            console.error('Falha ao recuperar classificação e=', e)
            setClassification([])
        }
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])

    return (
        <div className={styles.content}>
            <h1>Tabela</h1>
            <table>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>PTS</th>
                        <th>AC</th>
                        <th>GV</th>
                        <th>SG</th>
                        <th>GP</th>
                        <th>AV</th>
                        <th>EG</th>
                        <th>ER</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        classification.length === 0
                            ? (
                                <tr>
                                    <td>Nenhuma pontuação encontrada</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                            : classification.map((row, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td className={styles.clickable} onClick={() => navigate('/profile/' + row.userId)}>{row.name}</td>
                                        <td>{row.pts}</td>
                                        <td>{row.ac}</td>
                                        <td>{row.gv}</td>
                                        <td>{row.sg}</td>
                                        <td>{row.gp}</td>
                                        <td>{row.av}</td>
                                        <td>{row.eg}</td>
                                        <td>{row.er}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default TableComponent