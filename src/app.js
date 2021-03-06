import React from "react";
import ReactNative from "react-native";
import { Header, Button, Spinner, CardSection } from "./components/common";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA67tldB4HckUdl6pRUrKzQyVefyVMAMKw",
      authDomain: "authentication-fdd09.firebaseapp.com",
      databaseURL: "https://authentication-fdd09.firebaseio.com",
      projectId: "authentication-fdd09",
      storageBucket: "authentication-fdd09.appspot.com",
      messagingSenderId: "663484179801"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <ReactNative.View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </ReactNative.View>
    );
  }
}

export default App;
