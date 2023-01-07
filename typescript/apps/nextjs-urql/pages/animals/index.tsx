import {
  Box,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAnimalsPageQuery } from '../../../graphql/generated';

function Animals() {
  const [{ data, fetching }] = useAnimalsPageQuery();
  if (fetching) return <CircularProgress />;

  const animals = data?.animals ?? [];

  if (animals.length == 0) {
    return <Typography>There is no animal.</Typography>;
  }

  return (
    <Box>
      <Typography
        variant="h6"
        component="div"
        fontWeight="bold"
        sx={{ padding: '1rem 1rem 0' }}
      >
        動物一覧
      </Typography>
      <List>
        {animals.map((animal) => {
          return <ListItem key={animal.id}>{animal.name}</ListItem>;
        })}
      </List>
    </Box>
  );
}

const AnimalsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>動物一覧</title>
      </Head>
      <Animals />
    </>
  );
};

export default AnimalsPage;
