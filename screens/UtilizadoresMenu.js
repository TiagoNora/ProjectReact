import * as React from 'react';
import {SafeAreaView, Text, Button, StyleSheet, View} from 'react-native';

function UtilizadoresMenu(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.letras}>Utilizadores</Text>
      <Button title="Criar comentário" color="gray" onPress={() => props.navigation.navigate('Criar comentario')}/>
      <Button title="Alterar comentário de um livro" color="gray" onPress={() => props.navigation.navigate('Alterar comentario')}/>
      <Button title="Listar todos os comentários" color="gray" onPress={() => props.navigation.navigate('Listar todos os comentarios')}/>
      <Button title="Quantidade de opiniões positivas" color="gray" onPress={() => props.navigation.navigate('Quantidade de opinioes positivas')}/>
      <Button title="Listar a opinião num dado livro" color="gray" onPress={() => props.navigation.navigate('Listar a opiniao num dado livro')}/>
      <Button title="Listar livros retirados pelo utilizador" color="gray" onPress={() => props.navigation.navigate('Listar livros retirados')}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  butao: {
    fontSize: 10,
  },
  letras: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    top: 20,
  },
});

export default UtilizadoresMenu;
