import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>App Name</Header>
      <Paragraph>
        Aadhaar Made Easy.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        User Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
       Agent Login
      </Button>
    </Background>
  )
}
