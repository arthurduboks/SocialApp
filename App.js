/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivia',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Arthur',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nina',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Bob',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'John',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <>
      <SafeAreaView>
        <View style={globalStyle.header}>
          <Title title={"Let's Explore"} />
          <TouchableOpacity
            style={{
              padding: 14,
              borderRadius: 100,
              backgroundColor: '#F9FAFB',
            }}>
            <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
            <View style={globalStyle.messageNumberContainer}>
              <Text style={globalStyle.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
