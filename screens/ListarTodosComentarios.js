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
    listarComentarios: [],
  };

  async componentDidMount() {
    const isbn = this.props.route.params.isbn;

    console.log(this.state.isbn);
    const response = await api
      .get('book/' + isbn + '/review')
      .catch(error => Alert.alert(error.message));
    this.setState({
      listarComentarios: response.data,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.listarComentarios}
          keyExtractor={comentario => comentario.id}
          renderItem={ComentariosShow}
        />
      </SafeAreaView>
    );
  }
}

function ComentariosShow(item) {
  const {reviewer, recommended, review} = item.item;
  return (
    <View>
      <Text style={styles.letrasLivros}>User: {reviewer}</Text>
      <Text style={styles.letrasLivros}>Review: {review}</Text>
      <Text style={styles.letrasLivros}>
        Recomendação: {recommended ? 'Recomendado' : 'Não Recomendado'}
      </Text>
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
});
