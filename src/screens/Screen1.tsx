import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'


interface Props extends StackScreenProps<any,any>{}

export const Screen1 = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

        <Image style={styles.image}
        source={{
          uri: 'https://iconecta.es/blog/wp-content/uploads/2019/12/2.jpg',
        }}/>
        
        <Button 
    title='Acceder'
    onPress={()=>navigation.navigate('creen2')}/>
      
    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
      },

    image: {
        width: 400,
        height: 400,
        marginBottom: 20,
      },
})