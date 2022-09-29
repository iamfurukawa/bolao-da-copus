import React from "react"

import styles from './table.module.scss'

const TableComponent = () => {
    return (
        <div class={styles.content}>
            <h1>Tabela</h1>
            <table>
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
                <tr>
                    <td>Gabriel Alves Ferra</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Mariana Pereira Dias</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Vinícius Furukawa Carvalho</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Pedro Henrique Braz</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Sarah Cardoso de Caralho</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Diego Cardoso Meruoca de Souza</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>

                <tr>
                    <td>Arthur</td>
                    <td>500</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
            </table>
        </div>
    )
}

export default TableComponent