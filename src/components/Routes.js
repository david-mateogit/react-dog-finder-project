import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DogList from './DogList';
import DogDetails from './DogDetails';

const Routes = ({ dogs }) => {
  const getDog = props => {
    const { name } = props.match.params;
    const currentDog = dogs.find(dog => {
      return dog.name.toLowerCase() === name.toLowerCase();
    });
    if (currentDog) {
      return <DogDetails {...props} dog={currentDog} />;
    }
    return <Redirect to="/dogs" />;
  };

  return (
    <Switch>
      <Route
        exact
        path="/dogs"
        render={() => {
          return <DogList dogs={dogs} />;
        }}
      />
      <Route exact path="/dogs/:name" render={getDog} />
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
