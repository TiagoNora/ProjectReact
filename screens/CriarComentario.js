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

class CriarComentario extends React.Component {
  state = {
    isbn: '',
    review: '',
    user: '',
    checkBox: false,
  };

  handleClick = async () => {
    api
      .post('book/' + this.state.isbn + '/review?userId=' + this.state.user, {
        recommended: this.state.checkBox,
        review: this.state.review,
      })
      .catch(error => Alert.alert(error.message));
    console.log(this.state);
    this.props.navigation.goBack();
    Alert.alert('Criado com sucesso');
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleReview = text => {
    this.setState({review: text});
  };
  handleUser = text => {
    this.setState({user: text});
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
        <Text style={styles.letras}>Review:</Text>
        <TextInput
          style={styles.input}
          placeholder="Review"
          placeholderTextColor="black"
          onChangeText={this.handleReview}
        />
        <Text style={styles.letras}>User:</Text>
        <TextInput
          style={styles.input}
          placeholder="User"
          placeholderTextColor="black"
          onChangeText={this.handleUser}
        />
        <Text style={styles.letras}>
          {this.state.checkBox ? 'Recomendado' : 'Não Recomendado'}
        </Text>
        <Switch
          style={styles.swicth}
          value={this.state.checkBox}
          onValueChange={checkBox => this.setState({checkBox})}
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

export default CriarComentario;
