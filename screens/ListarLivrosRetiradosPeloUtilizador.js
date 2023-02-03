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

class ListarTodosComentarios extends Component {
  state = {
    listarLivros: [],
  };

  async componentDidMount() {
    const userId = this.props.route.params.userId;

    const response = await api
      .get('user/checked-out?userId=' + userId)
      .catch(error => Alert.alert(error.message));
    this.setState({
      listarLivros: response.data,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.listarLivros}
          keyExtractor={livro => livro.id}
          renderItem={LivrosShow}
        />
      </SafeAreaView>
    );
  }
}

function LivrosShow(item) {
  const {active, dueDate, book, bookId} = item.item;
  return (
    <View>
      <Text style={styles.letrasLivros}>
        User: {active ? 'Ativo' : 'Não Recomendado'}
      </Text>
      <Text style={styles.letrasLivros}>
        Data de entrega: {dueDate.substring(0, 10)}
      </Text>
      <Text style={styles.letrasLivros}>Isbn: {book.isbn}</Text>
      <Text style={styles.letrasLivros}>Titulo: {book.title}</Text>
      <Text style={styles.letrasLivros}>Autor: {book.authors[0].name}</Text>
      <Image
        style={styles.photo}
        source={{
          uri: 'http://193.136.62.24/v1/assets/cover/' + bookId + '-M.jpg',
        }}
      />
      <Text style={styles.letrasLivros}>---------------------------------</Text>
    </View>
  );
}

export default ListarTodosComentarios;

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
