import React from 'react';
import ReactNative from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';



class LoginForm extends React.Component {

    state = { email: '', password: '', error: '', loading: false }; //text is empty for initial

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)  //i create email & password sign-in method in firebase 
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));

            });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;

        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} // onPress is call back function
            >
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection >

                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} //event handler
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} //event handler
                    />
                </CardSection>

                <ReactNative.Text style={styles.errorTextStyle}>
                    {this.state.error}
                </ReactNative.Text>

                <CardSection>

                    {this.renderButton()}
                </CardSection>
            </Card >
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;