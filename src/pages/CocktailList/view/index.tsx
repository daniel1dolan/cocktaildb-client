import React from 'react';

import type { Cocktail } from '../../../types';

type Props = {
  cocktails: Array<Cocktail> | null;
  loading: boolean;
  error: string | null;
}

/** This component is used to display the view of the CocktailList. */
const View = ({ cocktails, loading, error }: Props): JSX.Element => (
  <div className="justify-content-center container text-center">
    <div className="row justify-content-center mt-2">
      <h1 className="column">
        Welcome to the Cocktail Search!
      </h1>
    </div>
    {cocktails && cocktails.length > 0 ? (
      <>
        <div className="row justify-content-center mt-2">
          <h2 className="column">
            Here are the results:
          </h2>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="column">
            <ul className="list-group">
              {cocktails.map((cocktail) => (
                <li className="list-group-item" key={cocktail.idDrink}>
                  {cocktail.strDrink}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="row justify-content-center mt-2">
          <h2 className="column">
            Please enter a cocktail name to search for.
          </h2>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="column">
            <input
              type="text"
              className="form-control"
              placeholder="Cocktail Name"
            />
          </div>
        </div>
      </>
    )}
    {error && (
      <div className="row justify-content-center mt-2">
        <div className="column">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </div>
    )}
    {loading && (
      <div className="row justify-content-center mt-2">
        <div className="column">
          <div className="alert alert-info" role="alert">
            Loading...
          </div>
        </div>
      </div>
    )}
  </div>
);

export default View;
