import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionID`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;
