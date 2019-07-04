import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header/Header';
import ContainerLists from "./component/ContainerLists/ContainerLists";
const App = () => {
  return (
    <div className="container-full">
      <Header title="Todo List" />
      <ContainerLists />
    </div>
  );

}
export default App;

