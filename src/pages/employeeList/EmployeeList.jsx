import { useSelector } from 'react-redux'
import { getEmployees } from '../../app/employeeSlice'
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import './employeeList.css'
import { NavLink } from 'react-router-dom'


export default function EmployeeList() {

    return (
        <>
            <div className='employee-list-page'>

                <h1 className='employee-list-title'>Current employees</h1>

                <Grid
                    data={useSelector(getEmployees)}
                    columns={['First name', 'Last name', 'Birth date', 'Start date', 'Street', 'City', 'State', 'Zip code', 'Department']}
                    search={true}
                    sort={true}
                    pagination={{ limit: 8, summary: true, }}
                    style={{
                        container: {},
                        header: {},
                        table: {},
                        td: { color: '#482697' },
                        th: {
                            color: 'black',
                            background: '#d9d9d9',
                            fontSize: '0.9rem'
                        },
                        footer: { background: '#d9d9d9' }
                    }}
                    className={{
                        container: 'container',
                        table: 'table',
                        td: 'td',
                        th: 'th',
                        header: 'header',
                        footer: 'footer'
                    }}
                />

                <NavLink to="/" className='home-link' >
                    Home
                </NavLink>

            </div>
        </>
    )

}

