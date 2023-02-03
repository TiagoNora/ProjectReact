import React, {Component} from 'react';
import api from '../service/api';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  FlatList,
  View,
  Image,
} from 'react-native';

class ListarLivros extends Component {
  state = {
    listarLivros: [],
  };

  async componentDidMount() {
    const response = await api
      .get('library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187/book')
      .catch(error => Alert.alert(error.message));
    this.setState({
      listarLivros: response.data,
    });
    console.log(this.state.listarLivros);
    console.log(this.state.listarLivros[0].isbn);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.listarLivros}
          keyExtractor={livro => livro.isbn}
          renderItem={LivrosShow}
        />
      </SafeAreaView>
    );
  }
}

function LivrosShow(item) {
  const {isbn, stock, available, book} = item.item;
  return (
    <View>
      <Text style={styles.letrasLivros}>Isbn: {isbn}</Text>
      <Text style={styles.letrasLivros}>Stock: {stock}</Text>
      <Text style={styles.letrasLivros}>Available: {available}</Text>
      <Text style={styles.letrasLivros}>Titulo: {book.title}</Text>
      <Text style={styles.letrasLivros}>Autor: {book.authors[0].name}</Text>
      <Image
        style={styles.photo}
        source={{
          uri: 'http://193.136.62.24/v1/assets/cover/' + isbn + '-M.jpg',
        }}
      />
      <Text style={styles.letrasLivros}>---------------------------------</Text>
    </View>
  );
}

export default ListarLivros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  letrasLivros: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  photo: {
    width: 80,
    height: 120,
    alignSelf: 'center',
  },
});
