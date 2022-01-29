import React from 'react'
import { Text, View, StyleSheet, Image, Linking} from 'react-native'

import image1 from './assets/coderhouse.jpg'
import image2 from './assets/Grade Grey.png'

const url="https://plataforma.coderhouse.com/"

const App =() => {

  return (
  <View  style={styles.container} >
    
      <Image 
      source={image1} 
      style={styles.image}    
      >
      </Image>
      <Text style={styles.title} 
            onPress={() => Linking.openURL(url)}

      >Hola, Coder!!!
      </Text>
       
  </View>
  );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#94b8b8",
    
   },
   title: { fontSize: 30, color: '#fff' },
   image: { height:230, width: 230, borderRadius:155 },
   image2: { height: 800, width: 500 }

 });

export default App;