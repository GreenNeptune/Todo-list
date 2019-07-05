import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header/Header';
import ContainerLists from "./component/ContainerLists/ContainerLists";
const App = () => {
  return (
    <div className="container-full">
      <div className="row">
        <div className="col">
          <Header title="Todo List" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContainerLists />
        </div>
      </div>
    </div>
  );

}
export default App;

