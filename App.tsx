import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {BaseButton, BaseInput, Header} from './src/shared';
import {EyeCrossedIcon, EyeIcon, LogoIcon} from './src/shared/assets/icons';
import {sizes} from './src/shared/assets/theme';
import Icon from './src/shared/ui/Icon';

function App(): JSX.Element {
  const [text, setText] = useState<string | undefined>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#FFFFFF', flex: 1, padding: 20}}>
        <Icon
          icon={LogoIcon}
          style={{width: 170, height: 170, marginLeft: 50}}
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
          trailingIcon={isPasswordVisible ? EyeIcon : EyeCrossedIcon}
          trailingIconOnPress={() => setIsPasswordVisible(!isPasswordVisible)}
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
