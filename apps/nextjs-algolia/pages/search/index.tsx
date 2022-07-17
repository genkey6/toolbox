import type { NextPage } from 'next';
import getConfig from 'next/config';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch-hooks-web';

const { publicRuntimeConfig } = getConfig();
const searchClient = algoliasearch(
  publicRuntimeConfig.algolia.appId,
  publicRuntimeConfig.algolia.apiKey
);

const Hit = ({ hit }) => {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>住所: {hit.location}</p>
      <p>収容人数: {hit.capacity}人</p>
      <p>温泉: {hit.hotSpring.availability}</p>
    </article>
  );
};

const SearchPage: NextPage = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={publicRuntimeConfig.algolia.indexName}
    >
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default SearchPage;
