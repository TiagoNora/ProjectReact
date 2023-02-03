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

class QuantidadeOpinioesPositivas extends React.Component {
  state = {
    number: '',
    isbn: '',
  };

  handleClick = async () => {
    const response = await api
      .get('book/' + this.state.isbn + '/review/recommended-count', {
        'Content-Type': 'text/plain',
      })
      .catch(error => Alert.alert(error.message));
    this.setState({
      number: response.data,
    });
    Alert.alert('Opiniões Positivas: ' + this.state.number);
  };

  handleIsbn = text => {
    this.setState({isbn: text});
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

export default QuantidadeOpinioesPositivas;
