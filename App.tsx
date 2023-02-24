import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {BaseButton, BaseInput, Header} from './src/shared';
import {LogoIcon} from './src/shared/assets/icons';
import {sizes} from './src/shared/assets/theme';
import Icon from './src/shared/ui/Icon';

function App(): JSX.Element {
  const [text, setText] = useState<string | undefined>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#FFFFFF', flex: 1, padding: 20}}>
        {/* <LogoIcon width={170} height={170} /> */}
        <Icon
          icon={LogoIcon}
          style={{width: 170, height: 170, marginLeft: 50}}
          //onPress={() => console.log('sfsdf')}
        />
        <Header text="Sign in to your account" size="huge" />
        <BaseInput
          value={text}
          label="Email"
          style={{marginTop: sizes.baseX2}}
          onChangeText={newText => setText(newText)}
          placeholder="mymail@gmail.com"
        />
        <BaseInput
          value={text}
          label="Password"
          style={{marginTop: sizes.base}}
          onChangeText={newText => setText(newText)}
          placeholder="At least 8 charecters"
        />
        <BaseButton
          text="Sign In"
          style={{marginTop: sizes.baseX3}}
          onPress={() => console.log('Press')}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
