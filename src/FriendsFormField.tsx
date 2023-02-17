import React, { FC } from 'react';
import { Grid, Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import useFriendsFormField from './useFriendsFormField';
import MuiTextField from './components/MuiTextField';
import MuiAutocomplete from './components/MuiAutocomplete';

const FriendsFormField: FC<{}> = () => {
  const { fields, addNewFriend, removeFriend } = useFriendsFormField();

  return (
    <Grid container spacing={2}>
      <Grid container item spacing={2} alignItems='start'>
        <Grid item>
          <MuiTextField label='Name' name='firstName' />
        </Grid>
        <Grid item>
          <Button
            variant='outlined'
            type='button'
            onClick={addNewFriend}
            startIcon={<PersonAddIcon />}
          >
            Add friend
          </Button>
        </Grid>
      </Grid>
      {fields.map((field, index) => {
        return (
          <Grid container item spacing={2} alignItems='center' key={field.id}>
            <Grid item>
              <MuiTextField label='Name' name={`friends.${index}.firstName`} />
            </Grid>
            <Grid item xs={2}>
              <MuiTextField label='Age' name={`friends.${index}.age`} />
            </Grid>
            <Grid item>
              <MuiAutocomplete
                label='Choose the country'
                name={`friends.${index}.country`}
              />
            </Grid>
            {fields.length > 1 && (
              <Grid item>
                <Button
                  color='error'
                  variant='contained'
                  type='button'
                  onClick={removeFriend(index)}
                  endIcon={<PersonRemoveIcon />}
                >
                  Remove
                </Button>
              </Grid>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FriendsFormField;
