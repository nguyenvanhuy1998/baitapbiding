import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
const dataEmoji = [
  {
    icon: require('../../assets/angry.png'),
  },
  {
    icon: require('../../assets/care.png'),
  },
  {
    icon: require('../../assets/haha.png'),
  },
  {
    icon: require('../../assets/like.png'),
  },
  {
    icon: require('../../assets/love.png'),
  },
  {
    icon: require('../../assets/sad.png'),
  },
];
export default class Emoji extends Component {
  state = {
    icon: require('../../assets/haha.png'),
  };
  handleIcon = icon => {
    this.setState({
      icon,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container__title}>
          Bạn đang cảm thấy như thế nào?
        </Text>
        <Image source={this.state.icon} style={styles.container__icon} />
        <View style={styles.container_listIcon}>
          {dataEmoji.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => this.handleIcon(item.icon)}>
                <Image
                  key={index}
                  source={item.icon}
                  style={styles.container_listIcon__icon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
