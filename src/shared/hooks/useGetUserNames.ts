import {fetchUsersNamesRequest} from 'shared/api';
import {useUserStore} from 'shared/store';

export const useGetUserNames = () => {
  const {setUserNames} = useUserStore(state => ({
    setUserNames: state.setUserNames
  }));

  const fetchUserNames = async () => {
    try {
      const fetchedUserNames = await fetchUsersNamesRequest();
      if (fetchedUserNames) {
        setUserNames(fetchedUserNames);
      }
    } catch (error) {
      console.log('Fetch user names error: ', error);
    }
  };

  return fetchUserNames;
};
