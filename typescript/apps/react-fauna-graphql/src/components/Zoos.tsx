import { useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  TextField,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  useGetAllZoosQuery,
  Animal,
  useRegisterZooMutation,
  Area,
} from '../graphql/generated';

const AnimalsInZoo = (
  animals: (Omit<Animal, '_ts'> | null)[] | undefined,
  open: boolean
) => {
  if (!animals) return;
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List
        subheader={<ListSubheader component="div">動物園の動物</ListSubheader>}
        sx={{ pl: 2 }}
      >
        {animals.map((animal) => {
          return <ListItem key={animal?._id}>{animal?.name}</ListItem>;
        })}
      </List>
    </Collapse>
  );
};

export const Zoos = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const { enqueueSnackbar } = useSnackbar();
  const [{ data, fetching }] = useGetAllZoosQuery();
  const [, registerZoo] = useRegisterZooMutation();
  const [zooName, setZooName] = useState('');
  const [zooArea, setZooArea] = useState(''); // TODO: ToBe Enum
  const [animalName, setAnimalName] = useState('');
  const [classisName, setClassisName] = useState('');
  if (fetching) return <CircularProgress />;

  const zoos = data?.allZoos.data ?? [];

  const handleRegister = async (
    zooName: string,
    zooArea: string,
    animalName: string,
    classisName: string
  ) => {
    const result = await registerZoo({
      zoo: {
        name: zooName,
        area: zooArea as Area,
        animals: {
          create: [
            {
              name: animalName,
              classis: {
                name: classisName,
              },
            },
          ],
        },
        reviews: [],
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
    handleRegister(zooName, zooArea, animalName, classisName).then(() => {
      setZooName('');
      setZooArea('');
      setAnimalName('');
      setClassisName('');
    });
  };

  return (
    <Box>
      <List
        subheader={<ListSubheader component="div">動物園一覧</ListSubheader>}
      >
        {zoos.length === 0 && (
          <Typography sx={{ pl: 2 }}>There is no zoo registered.</Typography>
        )}
        {zoos.map((zoo) => {
          const animals = AnimalsInZoo(zoo?.animals?.data, open);
          return (
            <Box>
              <ListItemButton onClick={handleClick}>
                <ListItem key={zoo?._id}>{zoo?.name}</ListItem>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {animals}
            </Box>
          );
        })}
      </List>
      <FormControl sx={{ m: 1 }}>
        <TextField
          label="名前"
          value={zooName}
          onChange={(event) => setZooName(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          label="地域"
          value={zooArea}
          onChange={(event) => setZooArea(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          label="動物の名前"
          value={animalName}
          onChange={(event) => setAnimalName(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          label="動物の分類"
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
        動物園を新規登録
      </Button>
    </Box>
  );
};
