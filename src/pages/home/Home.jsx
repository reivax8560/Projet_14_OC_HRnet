import './home.css'
import states from '../../datas/states';
import departments from '../../datas/departments';
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../app/employeeSlice'
import { NavLink } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// import Select from "react-dropdown-select";
import Modal from '../../components/modal_v2/Modal';
// import Modal from 'react-modal-xm';
// import * as Modal from "react-modal-xm";


export default function Home() {

    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [birthDate, setBirthDate] = useState('');
    const [startDate, setStartDate] = useState(new Date());


    const submitForm = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const newEmployee = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            birthDate: new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(birthDate),
            startDate: new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(startDate),
            street: formData.get('street'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipCode: formData.get('zipCode'),
            departments: formData.get('departments')
        };

        dispatch(addEmployee(newEmployee))
        setIsModalOpen(true)
    }


    return (
        <div className="home-page">
            <h1 className="title">HRnet</h1>

            <NavLink to="/employee-list" className="navLink" >
                <p className="view-employees">View Current Employees</p>
            </NavLink>

            <form onSubmit={submitForm} className="form">
                <h2 className='form-title'>Create Employee</h2>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' name="firstName" className='default-input' />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' name="lastName" className='default-input' />

                <label htmlFor="birthDate">Date of Birth</label>
                <DatePicker
                    onChange={(date) => setBirthDate(date)}
                    value={birthDate}
                    format="MM/dd/y"
                    minDate={new Date(1950, 0, 1)}
                    maxDate={new Date()}
                />

                <label htmlFor="startDate">Start Date</label>
                <DatePicker
                    onChange={(date) => setStartDate(date)}
                    value={startDate}
                    format="MM/dd/y"
                    minDate={new Date(1950, 0, 1)}
                    maxDate={new Date()}
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <div className="adress-item-box">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name='street' className='default-input adress-input' />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name='city' className='default-input adress-input' />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="state">State</label>
                        <DropDownMenu datas={states} name='state' />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" name='zipCode' className='default-input adress-input' />
                    </div>
                </fieldset>


                <label htmlFor="department">Department</label>
                <DropDownMenu datas={departments} name='departments' />

                <button type="submit" className="saveButton">Save</button>

            </form>

            {/* {isModalOpen && (
                <Modal
                    screenBg={true}
                    title={'Titre'}
                    message={'Employee Created !'}
                    closureFunction={() => { setIsModalOpen(!isModalOpen) }}
                />
            )} */}

            {isModalOpen && (
                <Modal
                    screenBg={true}
                    title={'Information'}
                    message={'Employee Created !'}
                    closureFunction={() => { setIsModalOpen(!isModalOpen) }}
                    classModal={"classModal-HRnet"}
                    classTitle={"classTitle-HRnet"}
                    classMessage={"classMessage-HRnet"}
                // classScreenBgColor={'blue'}
                // closureIconSize={'80px'}
                />
            )}

        </div>

    )
}






// format sortie datePicker => 2025-04-24T17:48:38.893Z
// date.toJSON()                "2025-04-09T22:00:00.000Z"
// date.toISOString()           "2025-04-09T22:00:00.000Z"
// Date.parse(date)             1744236000000
// date.toGMTString()           "Tue, 29 Apr 2025 22:00:00 GMT"
// date.toUTCString()           "Tue, 29 Apr 2025 22:00:00 GMT"
// date.toLocaleDateString()    "17/04/2025"
// new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(date)        "04/17/2025" (format anglais)

// tests react-datepicker
// import ReactDatePicker from '../../components/datePicker/ReactDatePicker'
// <DatePicker
//     id='birthDate'
//     value={birthDate}
//     selected={birthDate}
//     onChange={(date) => setBirthDate(date)}
// />
// <ReactDatePicker state={birthDate} setState={setBirthDate} />

// tests react-dropdown-select
// <Select
//     options={states}
//     labelField="name"
//     valueField="abbreviation"
//     onChange={(values) => this.setValues(values)}
// />