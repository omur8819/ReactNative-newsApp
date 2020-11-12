import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = () => {

  const pressFunction = () =>{

    // Spread Operator

    // const user = {
    //   name: "omur",
    //   age: 32,
    //   isAdmin: false
    // }

    // const member = {
    //   ...user,
    //   password: "12345",
    //   type: null
    // }
    // console.log(user);
    // console.log(member);

    //Destructor Operator

  //   const myObj = {
  //     url: "www.google.com",
  //     data: [1, 2, 3],
  //     config: "EMPTY"
  //   }

    
  //   console.log(myObj.config);
  //   const {config, url} = myObj;
  //   console.log(config, url);


  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello React Native</Text>
        <Button title="Log" onPress={pressFunction} />
      </View>
    </SafeAreaView>
  )
}

export default App;