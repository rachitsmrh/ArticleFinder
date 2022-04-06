import logo from "./logo.svg";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import ArticlesList from "./containers/Articles/ArticlesList";
import ShowArticle from "./containers/ArticleView/ShowArticle";
import Home from "./containers/Home/Home";
import Navbar from "./containers/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:id" element={<ShowArticle />} />
            <Route exact path="/articles" element={<ArticlesList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
