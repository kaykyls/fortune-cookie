import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>FortuneCookie</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#343434",
    padding: 14
  },
  headerText: {
    fontSize: 20,
    color: "#fff"
  }
})