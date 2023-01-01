import { useFieldArray, useFormContext } from 'react-hook-form';
import { FriendsFormValues } from './interfaces';

function useFriendsFormField() {
  const { control } = useFormContext<FriendsFormValues>();

  const { fields, append, remove } = useFieldArray<FriendsFormValues>({
    control,
    name: 'friends',
  });

  const addNewFriend = () => {
    append({
      firstName: '',
      age: '',
      country: null,
    });
  };

  const removeFriend = (friendIndex: number) => () => {
    remove(friendIndex);
  };

  return {
    fields,
    addNewFriend,
    removeFriend,
  };
}

export default useFriendsFormField;
