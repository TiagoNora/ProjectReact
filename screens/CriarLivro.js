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

class CriarLivro extends React.Component {
  state = {
    isbn: '',
    stock: '',
  };

  handleClick = async () => {
    api
      .get('book/' + this.state.isbn)
      .catch(error => Alert.alert(error.message));
    api
      .post(
        'library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book/' + this.state.isbn,
        {stock: this.state.stock},
      )
      .catch(error => Alert.alert(error.message));
    this.props.navigation.goBack();
    Alert.alert('Criado com sucesso');
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleStock = text => {
    this.setState({stock: text});
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
        <Text style={styles.letras}>Stock:</Text>
        <TextInput
          style={styles.input}
          placeholder="Stock"
          placeholderTextColor="black"
          onChangeText={this.handleStock}
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

export default CriarLivro;
