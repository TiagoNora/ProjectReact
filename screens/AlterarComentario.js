import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Switch,
} from 'react-native';
import api from '../service/api';

class AlterarComentario extends Component {
  state = {
    isbn: '',
    review: '',
    userId: '',
    id: '',
    recommended: false,
  };
  handleClick = async () => {
    const response = await api
      .get(
        'book/' + this.state.isbn + '/review/self?userId=' + this.state.userId,
      )
      .catch(error => Alert.alert(error.message));
    this.setState({
      id: response.data.id,
    });
    console.log(this.state.id);
    await api
      .put(
        'book/' +
          this.state.isbn +
          '/review/' +
          this.state.id +
          '?userId=' +
          this.state.userId,
        {
          recommended: this.state.recommended,
          review: this.state.review,
        },
      )
      .catch(error => Alert.alert(error.message));

    this.props.navigation.goBack();
    Alert.alert('Editado com sucesso');
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleReview = text => {
    this.setState({review: text});
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
          onChangeText={this.handleUserId}
        />
        <Text style={styles.letras}>
          {this.state.recommended ? 'Recomendado' : 'Não Recomendado'}
        </Text>
        <Switch
          style={styles.swicth}
          value={this.state.recommended}
          onValueChange={recommended => this.setState({recommended})}
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

export default AlterarComentario;
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
