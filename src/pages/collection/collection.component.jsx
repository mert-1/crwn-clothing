import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection/collection-item/collection-item.components";
import { CollectionPage, Title, Items } from "./collection.styles";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPage>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
