import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title"><strong>¡Bienvenido/a!</strong></h5>
              <p className="card-text">{greeting}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;