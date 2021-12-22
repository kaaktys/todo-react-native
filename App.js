import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

const App = () => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/kaaktys/todo-react-native')}>
      <View style={css.container}>
        <Text style={css.text}>'privet, lexus'</Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/9b/b9/ee/9bb9eeadc282d8fb1ad6080b595e22ed.jpg',
          }}
          style={css.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const css = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 100,
    marginTop: 150,
    fontSize: 34,
    color: 'cyan',
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default App;
