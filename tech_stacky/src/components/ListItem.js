import React, { Component } from 'react';
import {
  Text, View, Image,
  TouchableWithoutFeedback,
  UIManager, LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from "./common";
import * as actions from './actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <Card>
          <CardSection>
            <Text style={{ flex: 1 }}>{library.description}</Text>
          </CardSection>
          <CardSection>
            <Image style={{ height: 200, flex: 1, width: null }} source={{ uri: "http://lorempixel.com/640/360/city/" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }} />
          </CardSection>
        </Card>
      )
    }
  }

  render() {
    console.log('ListItem', this.props);
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (store, ownProps) => {
  const expanded = ownProps.library.id === store.selectedLibraryId;
  return { expanded };
};

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default connect(mapStateToProps, actions)(ListItem);
