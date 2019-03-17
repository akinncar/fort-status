import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProfileActions } from '../../store/ducks/profile';

import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import ProfileItem from './components/ProfileItem';

import styles from './styles';
import { colors } from '../../styles'

class Profile extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.username,
      title: null,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }  
  }

  componentDidMount() {
    this.props.searchProfileRequest(this.props.navigation.state.params.username);
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.profile.loading
            ? <ActivityIndicator size="small" color={styles.loading.color} style={styles.loadContainer}/>
            : <ProfileItem profile={this.props.profile.data} loading={this.props.profile.loading} stats={this.props.stats} />
          } 
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  stats: state.profile.data.stats,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProfileActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
