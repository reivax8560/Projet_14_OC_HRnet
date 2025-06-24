import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import { employees } from '../datas/employees';

let state = { employees };


export const store = configureStore({
    preloadedState: state,
    reducer: {
        employees: employeeReducer,
    }
});