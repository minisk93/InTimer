import {FirebaseFirestoreTypes as Fs} from '@react-native-firebase/firestore';

export interface User extends Fs.DocumentData {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string | null;
}

export interface UserNames extends Fs.DocumentData {
  names: [string];
}
