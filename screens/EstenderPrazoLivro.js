import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {useState} from 'react';
import api from '../service/api.js';

class EstenderPrazoLivro extends React.Component {
  state = {
    isbn: '',
    userId: '',
    lista: [],
    id: '',
  };

  handleClick = async () => {
    const response = await api
      .get('user/checked-out?userId=' + this.state.userId)
      .catch(error => Alert.alert(error.message));
    this.setState({
      lista: response.data,
    });

    const lista = this.state.lista;

    lista.map(item => {
      if (item.bookId === this.state.isbn) {
        this.setState({
          id: item.id,
        });
      }
    });
    console.log(this.state.id);
    await api.post('checkout/' + this.state.id + '/extend');
    Alert.alert('Prazo extendido');
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleUserId = text => {
    this.setState({userId: text});
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.letras}>Isbn:</Text>
        <TextInput
          style={styles.input}
          placeholder="Isbn"
          placeholderTextColor="black"
          onChangeText={this.handleIsbn}
          keyboardType="numeric"
        />
        <Text style={styles.letras}>UserId:</Text>
        <TextInput
          style={styles.input}
          placeholder="UserId"
          placeholderTextColor="black"
          onChangeText={this.handleUserId}
          keyboardType="numeric"
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
});

export default EstenderPrazoLivro;
