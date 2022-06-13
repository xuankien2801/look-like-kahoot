import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginWithForm, LoginWithSocial } from '../../components';
import { ILoginIllustration } from '../../constants/images';
import './Login.scss';
export const CreateKahootITLogin = () => {
    const history = useHistory();
    const [values, setValues] = React.useState({
        email: '',
        isEmail: true,
        password: '',
        isPassword: true,
        showPassword: false,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.email === '') {
            values.isEmail = false;
            setValues(Object.assign({}, values));
            if (values.password === '') {
                values.isPassword = false;
                setValues(Object.assign({}, values));
                return;
            }
            return;
        }
        if (values.password === '') {
            values.isPassword = false;
            setValues(values);
            return;
        }
        else {
            axios
                .post(`${process.env.URL_MY_API}users/login`, {
                email: values.email,
                password: values.password,
            })
                .then(function (response) {
                console.log(response.data.accessToken);
                if (response.data.accessToken !== '') {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    if (history.action === 'PUSH') {
                        history.goBack();
                    }
                    else {
                        history.push({
                            pathname: `/`,
                        });
                    }
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    const handleChange = (prop) => (event) => {
        setValues(Object.assign(Object.assign({}, values), { [prop]: event.target.value }));
    };
    const handleClickShowPassword = () => {
        setValues(Object.assign(Object.assign({}, values), { showPassword: !values.showPassword }));
    };
    return (React.createElement("div", { className: "login" },
        React.createElement("div", { className: "login__img" },
            React.createElement("img", { src: ILoginIllustration, alt: "Kahoot" })),
        React.createElement("div", { className: "login__wrap" },
            React.createElement("h1", null, "Cha\u0300o m\u01B0\u0300ng quay tr\u01A1\u0309 la\u0323i v\u01A1\u0301i Cambly"),
            React.createElement("h6", { className: "login--mt-15 login--mb-15" }, "\u0110\u0103ng nh\u1EADp v\u1EDBi:"),
            React.createElement(LoginWithSocial, null),
            React.createElement("div", { className: "login__line login--mt-15 login--mb-15" },
                React.createElement("hr", { className: "login--mr-10" }),
                React.createElement("p", null, "ho\u1EB7c"),
                React.createElement("hr", { className: "login--ml-10" })),
            React.createElement("h6", { className: "login--mt-15 login--mb-15" }, "\u0110\u0103ng nh\u00E2\u0323p v\u01A1\u0301i \u0111i\u0323a chi\u0309 email cu\u0309a ba\u0323n:"),
            React.createElement(LoginWithForm, { values: values, handleChange: handleChange, handleClickShowPassword: handleClickShowPassword }),
            React.createElement("h6", { className: "login--mt-15 login--mb-15" },
                React.createElement("span", { className: "login--color-primary" }, "Qu\u00EAn m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n?")),
            React.createElement(Button, { variant: "contained", className: "login--bg-color-primary", onClick: handleSubmit }, "\u0110\u0103ng nh\u1EADp"),
            React.createElement("h6", { className: "login--mt-15 login--mb-15" },
                "M\u1EDBi d\u00F9ng Cambly? ",
                React.createElement("span", { className: "login--color-primary" }, "\u0110\u0103ng k\u00FD")))));
};