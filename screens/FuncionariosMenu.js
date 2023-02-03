import * as React from 'react';
import {
  SafeAreaViewView,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
function FuncionariosMenu(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.letras}>Funcionarios</Text>
      <Button
        title="Criar livro"
        color="gray"
        onPress={() => props.navigation.navigate('Criar Livro')}
      />
      <Button title="Editar livro" color="gray" onPress={() => props.navigation.navigate('Editar Livro')}/>
      <Button title="Listar todos os livros" color="gray" onPress={() => props.navigation.navigate('Listar Livros')} />
      <Button title="Alterar informações da biblioteca" color="gray" onPress={() => props.navigation.navigate('Alterar Informacoes Biblioteca')} />
      <Button title="CheckOut" color="gray" onPress={() =>props.navigation.navigate('Check Out')}/>
      <Button title="CheckIn" color="gray" onPress={() => props.navigation.navigate('Check In')}/>
      <Button title="Estender o prazo do livro" color="gray" onPress={() => props.navigation.navigate('Estender Prazo')} />
      <Button title="Listar comentários sobre os livros" color="gray" onPress={()=>props.navigation.navigate('Listar todos os comentarios')}/>
      <Button title="Quantidade de opiniões sobre um livro" color="gray" onPress={() => props.navigation.navigate('Quantidade de opinioes positivas')}/>
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
    top: 10,
  },
});

export default FuncionariosMenu;
