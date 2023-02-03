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

class CheckIn extends React.Component {
  state = {
    isbn: '',
    userId: '',
  };

  handleClick = async () => {
    await api
      .post(
        'library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book/' +
          this.state.isbn +
          '/checkin?userId=' +
          this.state.userId,
      )
      .catch(error => Alert.alert(error.message));

    Alert.alert('Sucesso');
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

export default CheckIn;
