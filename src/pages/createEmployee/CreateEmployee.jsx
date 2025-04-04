import './createEmployee.css'
import { Link } from 'react-dom'

export default function CreateEmployee() {

    const onSubmit = () => { }

    return (
        <div className="createEmployee">

            <h1 className="title">HRnet</h1>

            <p className="view-employees">View Current Employees</p>

            <form onSubmit={onSubmit} className="form">

                <h2>Create Employee</h2>


                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' name="firstName" className='input' />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' name="lastName" className='input' />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="text" id='dateOfBirth' name="dateOfBirth" className='input' />     {/* datepicker */}

                <label htmlFor="startDate">Start Date</label>
                <input type="text" id='startDate' name="startDate" className='input' />     {/* datepicker */}


                <fieldset className="address">
                    <legend>Address</legend>

                    <div className="adress-item-box">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="state">State</label>
                        <select name="state" id="state" className='drop-down-menu'></select>           {/* drop-down menu */}
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </div>
                </fieldset>


                <label htmlFor="department">Department</label>
                <select name="department" id="department" className='drop-down-menu'>              {/* drop-down menu */}
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>


                <button type="submit" className="saveButton">Save</button>

            </form>

            <div id="confirmation" className="modal">Employee Created!</div>            {/* modal */}

        </div>
    )
}