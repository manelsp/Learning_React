import React, { Component } from 'react';

class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayNumber: [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
        }
    }
    render(){
        return(
            <tbody>{
                this.state.arrayNumber.map((row, i) => {
                return(
                    <tr>
                        {row.map((cellValue, j) => {
                        <td>
                            {cellValue}
                        </td>
                        })}
                    </tr>
                )})
            }
            </tbody>
        )
    }
}

export default Table;