import React from "react";
import './LoginWithForm.css';
import { 
  FormControl, 
  FormHelperText, 
  IconButton, 
  InputAdornment, 
  InputLabel, 
  OutlinedInput, 
  TextField, 
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export const LoginWithForm = ({ values, handleChange, handleClickShowPassword, }) => {
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        React.createElement(
            "div", 
            { className: "login-with-form" },
            React.createElement(
                FormControl, 
                { sx: { width: '350px' } },
                React.createElement(
                    TextField, 
                    {   id: "outlined-name", 
                        label: "Email", 
                        value: values.email, 
                        defaultValue: values.email, 
                        onChange: handleChange('email'), 
                        error: values.isEmail === false && values.email === '', 
                        helperText: values.isEmail === false && values.email === '' ? 'Vui lòng nhập email đã đăng ký' : ' ' 
                    }
                ),
                
                values.errorMessage && (
                    React.createElement(
                        FormHelperText, 
                        {   error: true, 
                            id: "outlined-name" 
                        }, values.errorMessage)
                ),
            
                React.createElement(
                    "div", 
                    { className: "login-with-form--mt-15" }
                )
            ),
        
            React.createElement(
                FormControl, 
                { sx: { width: '350px' } },

                React.createElement(
                    InputLabel, 
                    {   htmlFor: "outlined-adornment-password", 
                        error: !values.isPassword && values.password === '' }, 
                        "M\u1EADt kh\u1EA9u"),
            
                React.createElement(
                    OutlinedInput, 
                    {   id: "outlined-adornment-password", 
                        type: values.showPassword ? 'text' : 'password', 
                        value: values.password, onChange: handleChange('password'), 
                        error: values.isPassword === false && values.password === '', 
                        endAdornment: React.createElement(
                            InputAdornment, { position: "end" },
                            React.createElement(
                                IconButton, 
                                { "aria-label": "toggle password visibility", 
                                onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: "end" }, values.showPassword ? React.createElement(VisibilityOff, null) : React.createElement(Visibility, null))), label: "Password" }),
            !values.isPassword && values.password === '' && (React.createElement(FormHelperText, { error: true, id: "outlined-adornment-password" }, "Vui l\u00F2ng nh\u1EADp m\u1EADt kh\u1EA9u")))));
};