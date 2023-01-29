import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [cookieImg, setCookieImg] = useState(require("./src/cookie.png"))
  const [phrase, setPhrase] = useState("")
  const [cookieIsOpen, setCookieIsOpen] = useState(false)
  
  const phrases = [
    "You will soon be surrounded by good friends and laughter.",
    "A dream you have will come true.",
    "You will have unexpected great luck.",
    "Your future is as bright as your faith.",
    "The time is right to make new friends.",
    "You will soon be honored by someone you respect.",
    "A new venture is on the horizon, be prepared.",
    "Your life will be happy and peaceful.",
    "You will make a wise decision.",
    "Your talents will be recognized and suitably rewarded.",
    "Your hard work will pay off in the near future.",
    "A pleasant surprise is in store for you.",
    "Your ability to juggle many tasks will take you far.",
    "You will be successful in your work.",
    "You will be blessed with a strong and healthy body.",
    "You will be surrounded by love and warmth.",
    "You will be blessed with good fortune.",
    "You will be blessed with a long and healthy life.",
    "You will be blessed with a loving and caring family.",
    "You will be blessed with many children.",
    "You will be blessed with a strong and prosperous future.",
    "Your future is full of possibilities.",
    "Your life will be full of joy and happiness.",
    "Your financial luck will change for the better.",
    "Your future is looking bright.",
  ]

  const handleOpenCookie = () => {
    if(!cookieIsOpen) {
      setCookieImg(require("./src/openCookie.png"))
      setPhrase(`"${phrases[Math.floor(Math.random() * phrases.length)]}"`)
      setCookieIsOpen(true)
    } else {
      Alert.alert("This cookie is broken", "Don't be shy... grab a new one :)")
    }
  }

  const handleNewCookie = () => {
    if(cookieIsOpen) {
      setCookieImg(require("./src/cookie.png"))
      setPhrase("")
      setCookieIsOpen(false)
    } else {
      Alert.alert("Hmm...", " It looks like this cookie is brand new :)")
    }
    
  }

  return (
    <View style={{flex: 1}}>
      <Header/>
      <View style={styles.container}>

        <Image
          source={cookieImg}
          style={styles.img}
        />

        <Text style={styles.phrase}>
          {phrase}
        </Text>

        <TouchableOpacity onPress={() => {handleOpenCookie()}} style={styles.button}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonText}>Break The Cookie!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {handleNewCookie()}} style={[styles.button, {marginTop: 6, backgroundColor: "#fff"}]}>
          <View style={styles.buttonArea}>
            <Text style={[styles.buttonText, {color: "#000"}]}>New Cookie!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e4e4"
  },
  img: {
    width: 230,
    height: 230
  },
  phrase: {
    fontSize: 20,
    margin: 30,
    textAlign: "center",
    color: "#000"
  }, button: {
    width: 230,
    height: 50,
    borderColor: "#000",
    borderWidth: 1.8,
    borderRadius: 16,
    backgroundColor: "#343434"
  },
  buttonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
})