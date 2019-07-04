import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header/Header';
import ContainerLists from "./component/ContainerLists/ContainerLists";
const App = () => {
  return (

    <div className="container-full">
      <div className="row">
        <div className="col-8 offset-2 d-flex justify-space-between">
          <Header title="Todo List" />

        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2 d-flex justify-content-center">
          <ContainerLists />
        </div>

      </div>

    </div>
  );

}
export default App;

