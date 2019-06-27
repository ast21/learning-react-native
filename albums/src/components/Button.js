import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {
  const {TextStyle, ButtonStyle} = styles;

  return (
    <TouchableOpacity style={ButtonStyle} onPress={onPress}>
      <Text style={TextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  TextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
