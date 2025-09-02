import './home.css'
import states from '../../datas/states';
import departments from '../../datas/departments';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../app/employeeSlice'
import { NavLink } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Modal from "@reivax8560/react-modal-xm";
import '@reivax8560/react-modal-xm/dist/react-modal-xm.css';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';


export default function Home() {

    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [birthDate, setBirthDate] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');



    const submitForm = (e) => {
        e.preventDefault()

        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            birthDate: new Intl.DateTimeFormat('en-US').format(birthDate),
            startDate: new Intl.DateTimeFormat('en-US').format(startDate),
            street: street,
            city: city,
            zipCode: zipCode,
            state: selectedState,
            department: selectedDepartment
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

            <form onSubmit={submitForm} className="form">                           {/* FORMULAIRE */}
                <h2 className='form-title'>Create Employee</h2>

                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id='firstName' 
                    name="firstName" 
                    className='default-input' 
                    value={firstName}
                    onChange={(e)=> {setFirstName(e.target.value)}}
                />

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id='lastName' 
                    name="lastName" 
                    className='default-input' 
                    value={lastName}
                    onChange={(e)=> {setLastName(e.target.value)}}
                />

                <label htmlFor="birthDate">Date of Birth</label>                   {/* DATE PICKER */}
                <DatePicker
                    onChange={(date) => setBirthDate(date)}
                    value={birthDate}
                    format="MM/dd/y"
                    minDate={new Date(1950, 0, 1)}
                    maxDate={new Date()}
                />

                <label htmlFor="startDate">Start Date</label>                       {/* DATE PICKER */}
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
                        <input 
                            id="street" 
                            type="text" 
                            name='street' 
                            className='default-input adress-input' 
                            value={street}
                            onChange={(e)=> {setStreet(e.target.value)}}
                        />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="city">City</label>
                        <input 
                            id="city" 
                            type="text" 
                            name='city' 
                            className='default-input adress-input' 
                            value={city}
                            onChange={(e)=> {setCity(e.target.value)}}
                        />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="state">State</label>                   {/* DROP DOWN MENU */}
                        <DropDownMenu 
                            datas={states} 
                            title="Select a state"
                            name='state' 
                            state={selectedState}
                            setState={setSelectedState}
                            listStyle={{overflow: "scroll"}}
                        />
                    </div>

                    <div className="adress-item-box">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input 
                            id="zip-code" 
                            type="number" 
                            name='zipCode' 
                            className='default-input adress-input' 
                            value={zipCode}
                            onChange={(e)=> {setZipCode(e.target.value)}}
                        />
                    </div>
                </fieldset>


                <label htmlFor="department">Department</label>                 {/* DROP DOWN MENU */}
                <DropDownMenu  
                    datas={departments} 
                    title="Select a department"
                    name='departments' 
                    state={selectedDepartment}
                    setState={setSelectedDepartment}
                />

                <button type="submit" className="saveButton">Save</button>

            </form>


            {isModalOpen && (                                                   /* MODALE */
                <Modal
                    isBackgroundDisplayed={true}
                    title='Information'
                    message='Employee Created !'
                    closureFunction={() => { setIsModalOpen(!isModalOpen) }}
                    classModal="classModal-HRnet"
                    classTitle="classTitle-HRnet"
                    classMessage="classMessage-HRnet"
                    // backgroundColor="blue"
                    // closureIconSize="60px"
                />
            )}

        </div>
    )
}
