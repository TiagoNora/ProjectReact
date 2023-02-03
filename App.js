import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './screens/Menu.js';
import UtilizadoresMenu from './screens/UtilizadoresMenu';
import FuncionariosMenu from './screens/FuncionariosMenu';
import CriarLivro from './screens/CriarLivro';
import EditarLivro from './screens/EditarLivro';
import ListarLivros from './screens/ListarLivros';
import ListarLivrosRetiradosPeloUtilizador from './screens/ListarLivrosRetiradosPeloUtilizador';
import ListarComentarioNumLivro from './screens/ListarComentarioNumLivro';
import AlterarComentario from './screens/AlterarComentario';
import CriarComentario from './screens/CriarComentario';
import QuantidadeOpinioesPositivas from './screens/QuantidadeOpinioesPositivas';
import ListarComentariosLivro from './screens/ListarComentariosLivro';
import EstenderPrazoLivro from './screens/EstenderPrazoLivro';
import CheckIn from './screens/CheckIn';
import CheckOut from './screens/CheckOut';
import AlterarInformacoesBiblioteca from './screens/AlterarInformaçõesBiblioteca';
import ListarTodosComentarios from './screens/ListarTodosComentarios';
import ListarLivrosRetirados from './screens/ListarLivrosRetirados';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name={'Menu'} component={Menu} />
        <Stack.Screen name={'Utilizadores Menu'} component={UtilizadoresMenu} />
        <Stack.Screen name={'Funcionarios Menu'} component={FuncionariosMenu} />
        <Stack.Screen name={'Criar Livro'} component={CriarLivro} />
        <Stack.Screen name={'Editar Livro'} component={EditarLivro} />
        <Stack.Screen name={'Listar Livros'} component={ListarLivros} />
        <Stack.Screen name={'Alterar Informacoes Biblioteca'} component={AlterarInformacoesBiblioteca} />
        <Stack.Screen name={'Check Out'} component={CheckOut} />
        <Stack.Screen name={'Check In'} component={CheckIn} />
        <Stack.Screen name={'Estender Prazo'} component={EstenderPrazoLivro} />
        <Stack.Screen name={'Listar todos os comentarios'} component={ListarComentariosLivro} />
        <Stack.Screen name={'Quantidade de opinioes positivas'} component={QuantidadeOpinioesPositivas} />
        <Stack.Screen name={'Criar comentario'} component={CriarComentario} />
        <Stack.Screen name={'Alterar comentario'} component={AlterarComentario} />
        <Stack.Screen name={'Listar a opiniao num dado livro'} component={ListarComentarioNumLivro} />
        <Stack.Screen name={'Listar comentarios'} component={ListarTodosComentarios} />
        <Stack.Screen name={'Listar livros retirados pelo utilizador'} component={ListarLivrosRetiradosPeloUtilizador} />
        <Stack.Screen name={'Listar livros retirados'} component={ListarLivrosRetirados} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
