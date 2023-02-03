import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import api from '../service/api';

class EditarLivro extends Component {
  state = {
    isbn: '',
    stock: '',
  };
  handleClick = async () => {
    await api
      .put(
        'library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book/' + this.state.isbn,
        {stock: this.state.stock},
      )
      .catch(error => Alert.alert(error.message));
    this.props.navigation.goBack();
    Alert.alert('Editado com sucesso');
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
        />
        <Text style={styles.letras}>Stock:</Text>
        <TextInput
          style={styles.input}
          placeholder="Stock"
          placeholderTextColor="black"
          onChangeText={this.handleStock}
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

export default EditarLivro;
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
