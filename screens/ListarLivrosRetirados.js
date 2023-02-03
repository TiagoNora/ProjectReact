import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  Switch,
} from 'react-native';
import api from '../service/api.js';

class ListarLivrosRetirados extends React.Component {
  state = {
    userId: '',
  };

  handleClick = async () => {
    this.props.navigation.navigate('Listar livros retirados pelo utilizador', {
      userId: this.state.userId,
    });
  };

  handleUserId = text => {
    this.setState({userId: text});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.letras}>UserId:</Text>
        <TextInput
          style={styles.input}
          placeholder="UserId"
          placeholderTextColor="black"
          onChangeText={this.handleUserId}

        />
        <Button
          style={styles.submitButton}
          title={'Enviar'}
          onPress={this.handleClick}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  letras: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  swicth: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default ListarLivrosRetirados;
