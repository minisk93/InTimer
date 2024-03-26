import firestore from '@react-native-firebase/firestore';
import { collections, USER_NAMES_DOC } from './constants';
import { User, UserNames } from "../types";

export const fetchUserRequest = async (
  uid: string,
): Promise<User | undefined> => {
  const userDocument = await firestore()
    .collection<User>(collections.Users)
    .doc(uid)
    .get();

  if (!userDocument.exists) {
    return undefined;
  }

  return userDocument.data();
};

export const fetchUsersNamesRequest = async (): Promise<
  [string] | undefined
> => {
  const usersNamesDocument = await firestore()
    .collection<UserNames>(collections.UsersNames)
    .doc(USER_NAMES_DOC)
    .get();

  if (!usersNamesDocument.exists) {
    console.log("do not exist");
    return undefined;
  }

  return usersNamesDocument.data()?.names || undefined;
};

export const createOrUpdateUserRequest = async (user: User): Promise<void> =>
  firestore().collection<User>(collections.Users).doc(user.id).set(user);

export const updateUserNamesRequest = async (userName: string): Promise<void> => {
  const usersNamesDocumentRef = firestore()
    .collection<UserNames>(collections.UsersNames)
    .doc(USER_NAMES_DOC);

  if ((await usersNamesDocumentRef.get()).exists) {
    await usersNamesDocumentRef.update({
      names: firestore.FieldValue.arrayUnion(userName),
    });
  } else {
    await usersNamesDocumentRef.set({
      names: [userName],
    });
  }
};
