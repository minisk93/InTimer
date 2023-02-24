import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BaseButton, BaseInput} from './src/shared';
import { sizes } from './src/shared/assets/theme';

function App(): JSX.Element {
  const [text, setText] = useState<string | undefined>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#FFFFFF', flex: 1, padding: 20}}>
        <BaseInput
          value={text}
          label='Email'
          onChangeText={newText => setText(newText)}
          placeholder="mymail@gmail.com"
        />
        <BaseButton text='Sign In' style={{ marginTop: sizes.baseX2 }} onPress={() => console.log('Press')}/>
      </View>
    </SafeAreaView>
  );
}

export default App;
