import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, Button, Alert} from 'react-native';
import api from '../service/api';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bibliotecaInfo: {},
    };
  }

  handleClick = async () => {
    const response = await api.get(
      'library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187',
    );

    this.setState({
      bibliotecaInfo: response.data,
    });
    console.log(this.state);
    Alert.alert('Atualizado');
  };
  async componentDidMount() {
    const response = await api
      .get('library/1bbb3c13-e83f-4ea8-886e-5dd7c5feb187')
      .catch(error => Alert.alert(error.message));

    this.setState({
      bibliotecaInfo: response.data,
    });
  }
  render() {
    const {bibliotecaInfo} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Button
          style={styles.butao}
          title={'Atualizar'}
          onPress={this.handleClick}
        />
        <Text style={styles.letras}>Nome: {bibliotecaInfo.name}</Text>
        <Text style={styles.letras}>Morada:{bibliotecaInfo.address}</Text>
        <Text style={styles.letras}>
          Hora de abertura:{bibliotecaInfo.openTime}
        </Text>
        <Text style={styles.letras}>
          Hora de fecho:{bibliotecaInfo.closeTime}
        </Text>
        <Text style={styles.letras}>
          Dias abertos:{bibliotecaInfo.openDays}
        </Text>
        <Button
          style={styles.butao}
          title={'Utilizadores'}
          onPress={() => navigation.navigate('Utilizadores Menu')}
        />
        <Button
          style={styles.butao}
          title={'Fucionarios'}
          onPress={() => navigation.navigate('Funcionarios Menu')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  letras: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  butao: {
    top: 300,
  },
});
