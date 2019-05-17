import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Link, Nav, TouchableHighlight} from 'react-native';
import { WebView, Linking, ScrollView } from 'react-native';

const myObj = {
  name: '',
  age: '',
  favoriteFood: ''
};

var array = new Array();

export default class App extends React.Component {
  state = {
      data: array
   }
   componentDidMount = () => {
      //fetch('https://jsonplaceholder.typicode.com/posts/1', {
        fetch('https://delovoe-tv.ru/wp-json/wp/v2/posts/', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         
         global.SampleVar = JSON.stringify(responseJson);
         
         global.Var = JSON.parse(SampleVar);
      
         Var.forEach(function(item, i, arr) {
              var arr = new Array();
              arr.push(i,item['title']['rendered']);
            
              global.arr;
            });

         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }

   render() {
  
   
    const uri = 'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
    const handlePress = () => false
    return (

<ScrollView>
  
      <View style={styles.container}>
         <Image
          style={{width: 300, height: 100,paddingTop:0,marginTop:5,marginBottom:10}}
          source={{uri: 'http://delovoe-tv.ru/wp-content/uploads/2018/07/DTV_Logo.png'}}
        />
     
        {this.state.data.map((item) =>
  <Text key={item.id} style={{width: 250, paddingTop:0, paddingBottom:0,}}>
    
    <TouchableHighlight onPress={() => Linking.openURL(item.link)}>
        <Image
          style={{width: 250, height: 90,paddingTop:120,marginTop:20,paddingLeft:0,marginBottom:0}}
          source={{uri: item.better_featured_image.source_url}}
        />
     </TouchableHighlight>   
   
    
    
    <Text style={{color: 'black', backgroundColor: '#F0F8FF', fontSize: 20, margin: 0, width: 200}}
      onPress={() => Linking.openURL(item.link)}>
         {item.title.rendered}
     </Text>
   
     
   </Text> 

)}

      </View>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    top:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

