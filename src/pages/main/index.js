import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
} from 'react-native';

import styles from './styles'



class Main extends Component  {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  }


  // this.props.navigation.navigate('Favorites');


  state = {
    username: '',
  };



  search = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {      
      navigation.navigate('Profile',{ username })
    } catch (err) {
      console.tron.log('Erro save user')
    }
  };

  render () {
    
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
       
        <View style={styles.content}>
          <Text style={styles.title}>FortStatus</Text>
          <Text style={styles.description}>
            Procure por um nome de usuário
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder=""
              underlineColorAndroid="transparent"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />

            <TouchableOpacity style={styles.button}
              actuiveOpacity={0.6}
              onPress={this.search}
            >

              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    )
  }
}

// const mapStateToProps = state => ({
//   favorites: state.favorites,
// })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(FavoriteActions, dispatch);

export default (Main);

