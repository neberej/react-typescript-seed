
import  React from "react";
import './App.css';

type AppProps = {
  title?: string;
}; /* use `interface` if exporting so that consumers can extend */

const App = ({ title }: AppProps) => <div>{title}</div>;

export default App;
