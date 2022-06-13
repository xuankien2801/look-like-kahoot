import React from 'react';
import './CreateKahootITRegister.css';

import {
    RegisterAccTeacher,
    RegisterAccStudent,
    RegisterAccPersonal,
    RegisterAccProfessional,
} from '../../components';

export const CreateKahootITRegister = () => {
    return(
        <div>
            <h1>Choose your account type</h1>
            <ul>
                <li><button onClick={RegisterAccTeacher}>Teacher</button></li>
                <li><button onClick={RegisterAccStudent}>Student</button></li>
                <li><button onClick={RegisterAccPersonal}>Personal</button></li>
                <li><button onClick={RegisterAccProfessional}>Professional</button></li>
            </ul>
        </div>
    );
}
