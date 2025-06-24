import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     employees: []
// };

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(
                {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    birthDate: action.payload.birthDate,
                    startDate: action.payload.startDate,
                    street: action.payload.street,
                    city: action.payload.city,
                    state: action.payload.state,
                    zipCode: action.payload.zipCode,
                    department: action.payload.department
                }
            )
        }
    },
});

export const { addEmployee } = employeeSlice.actions;

export const getEmployees = (state) => state?.employees;

export default employeeSlice.reducer;