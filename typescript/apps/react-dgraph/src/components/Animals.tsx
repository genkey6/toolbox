import { useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  List,
  ListItem,
  ListSubheader,
  TextField,
  Typography,
} from '@mui/material';
import {
  useGetAllAnimalsQuery,
  useRegisterAnimalMutation,
} from '../graphql/generated';

export const Animals = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [{ data, fetching }] = useGetAllAnimalsQuery();
  const [, registerAnimal] = useRegisterAnimalMutation();
  const [animalName, setAnimalName] = useState('');
  const [classisName, setClassisName] = useState('');

  if (fetching) return <CircularProgress />;

  const animals = data?.queryAnimal ?? [];

  const handleRegister = async (animalName: string, classisName: string) => {
    const result = await registerAnimal({
      animal: {
        name: animalName,
        classis: {
          name: classisName,
        },
      },
    });
    if (result.error) {
      throw result.error;
    } else {
      enqueueSnackbar(JSON.stringify(result.data), {
        variant: 'success',
      });
    }
  };

  const onClickSave = () => {
    handleRegister(animalName, classisName).then(() => {
      setAnimalName('');
      setClassisName('');
    });
  };

  return (
    <Box>
      <List subheader={<ListSubheader component="div">動物一覧</ListSubheader>}>
        {animals.length === 0 && (
          <Typography sx={{ pl: 2 }}>There is no animal registered.</Typography>
        )}
        {animals.map((animal) => {
          return (
            <ListItem key={animal?.name}>
              {animal?.name}: {animal?.classis.name}
            </ListItem>
          );
        })}
      </List>
      <FormControl sx={{ m: 1 }}>
        <TextField
          label="名前"
          value={animalName}
          onChange={(event) => setAnimalName(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          label="分類"
          value={classisName}
          onChange={(event) => setClassisName(event.target.value)}
        />
      </FormControl>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        onClick={onClickSave}
        disabled={!animalName || !classisName}
      >
        動物を新規登録
      </Button>
    </Box>
  );
};
