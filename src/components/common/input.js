import React from 'react';
import ReactNative from 'react-native';

//functional component //reusable component with login form user data
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {  //props list from parent component
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <ReactNative.View style={containerStyle}>
            <ReactNative.Text style={labelStyle}>{label}</ReactNative.Text>
            <ReactNative.TextInput
                secureTextEntry={secureTextEntry} // for password ***
                placeholder={placeholder} //email hint  
                autoCorrect={false}
                style={inputStyle}
                value={value} //dont use the hard code bcoz we need to reuse the component 
                onChangeText={onChangeText}
            />
        </ReactNative.View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 //flex-grow is 2/3 coz labelStyle 1+2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 5,
        color: '#000',
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };