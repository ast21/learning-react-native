import React from 'react';
import {Text, View} from 'react-native';

const Header = ({headerText}) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    // ios
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    // android
    elevation: 3,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;
