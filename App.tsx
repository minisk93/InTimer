import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStack, HomeStack} from './src/processes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type State = {
  isLoading: boolean;
  isSignout: boolean;
  user: FirebaseAuthTypes.User | null;
};

type Action =
  | {type: 'SIGN_IN'; user: FirebaseAuthTypes.User | null}
  | {type: 'LOAD_FINISHED'}
  | {type: 'SIGN_OUT'};

type Reducer = (state: State, action: Action) => State;

type AuthContextType = {
  signIn: (user: FirebaseAuthTypes.User) => void;
  signOut: () => void;
  signUp: (user: FirebaseAuthTypes.User) => void;
};

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);

function App(): JSX.Element | null {
  const [state, dispatch] = React.useReducer<Reducer>(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'LOAD_FINISHED': {
          return {
            ...prevState,
            isLoading: false,
          };
        }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: true,
      user: null,
    },
  );

  const _handleAuthStateChanged = React.useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      console.log('USER: ', user);
      if (user) {
        dispatch({type: 'SIGN_IN', user});
      } else {
        dispatch({type: 'SIGN_OUT'});
      }
      dispatch({type: 'LOAD_FINISHED'});
    },
    [],
  );

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(_handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const authContext = React.useMemo<AuthContextType>(
    () => ({
      signIn: (user: FirebaseAuthTypes.User) => {
        dispatch({type: 'SIGN_IN', user});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: (user: FirebaseAuthTypes.User) => {
        dispatch({type: 'SIGN_IN', user});
      },
    }),
    [],
  );

  if (state.isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isSignout ? <AuthStack /> : <HomeStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
