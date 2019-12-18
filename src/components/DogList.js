import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1 className="display-1 text-center mt-3 mb-5">Dog List!</h1>
      <div className="row">
        {dogs.map(dog => {
          return (
            <div className="DogList__dog col-md-4 text-center" key={dog.name}>
              <Tippy
                content={dog.name}
                theme="bootstrap"
                distance={7}
                hideOnClick={false}
              >
                <img src={dog.src} alt={dog.name} />
              </Tippy>
              <h3>
                <Link className="underline" to={`/dogs/${dog.name}`}>
                  {dog.name}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DogList;
