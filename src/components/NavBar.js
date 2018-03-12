
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 20,
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default class CustomNavBar extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  _renderLeft() {
      return (
        <TouchableOpacity
          onPress={() => console.log('Hamburger button pressed')}
          style={[styles.navBarItem, { paddingLeft: 20}]}>
          <Icon name="bars" size={18} color="#fff" />
        </TouchableOpacity>
      )
  
  }

  _renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text>{ this.props.title }</Text>
      </View>
    )
  }

  _renderRight() {
    return (
      <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
      <TouchableOpacity
      onPress={() => alert('grid')}
      style={{ paddingRight: 30 , paddingTop: 8 }}>
      <Icon name="th" size={18} color="#fff" />
    </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Search')}
          style={{ paddingRight: 20, paddingTop: 7 }}>
          <Icon name="search" size={18} color="#fff" />
        </TouchableOpacity>

      </View>
    )
  }

  render() {
    let dinamicStyle = {}
      dinamicStyle = { backgroundColor: '#696969'}


    return (
        <View style={[styles.container, dinamicStyle]}>
          { this._renderLeft() }
          { this._renderMiddle() }
          { this._renderRight() }
        </View>
    )
  }
}