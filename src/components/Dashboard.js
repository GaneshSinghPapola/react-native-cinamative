import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> Dashboard </Text>
      </View>
    );
  }
}

export default Dashboard;