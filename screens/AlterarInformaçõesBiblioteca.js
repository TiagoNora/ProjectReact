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

class AlterarInformacoesBiblioteca extends React.Component {
  state = {
    name: '',
    address: '',
    openDays: '',
    openTime: '',
    closeTime: '',
  };

  async componentDidMount() {
    const response = await api.get(
      'library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187',
    );
    this.setState({
      name: response.data.name,
      address: response.data.address,
      openTime: response.data.openTime,
      closeTime: response.data.closeTime,
      openDays: response.data.openDays,
    });
  }

  handleClick = async () => {
    await api
      .put('library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187', {
        name: this.state.name,
        address: this.state.address,
        openTime: this.state.openTime,
        closeTime: this.state.closeTime,
        openDays: this.state.openDays,
      })
      .catch(error => Alert.alert(error.message));
    Alert.alert('Editado com sucesso');
  };

  handleOpenTime = text => {
    this.setState({openTime: text});
  };
  handleCloseTime = text => {
    this.setState({closeTime: text});
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.letras}>Hora de abertura:</Text>
        <TextInput
          style={styles.input}
          placeholder="Data de abertura ('00:00:00')"
          placeholderTextColor="black"
          onChangeText={this.handleOpenTime}
          keyboardType="numeric"
        />
        <Text style={styles.letras}>Hora de fecho:</Text>
        <TextInput
          style={styles.input}
          placeholder="Hora de fecho ('23:59:59')"
          placeholderTextColor="black"
          onChangeText={this.handleCloseTime}
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

export default AlterarInformacoesBiblioteca;
