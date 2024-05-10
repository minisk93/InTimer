import {fetchUserRequest} from 'shared/api';
import {useUserStore} from 'shared/store';

export const useGetUser = () => {
  const {setUser} = useUserStore(state => ({
    setUser: state.setUser
  }));

  const getUser = async (uid: string) => {
    try {
      const fetchedUser = await fetchUserRequest(uid);
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return getUser;
};
