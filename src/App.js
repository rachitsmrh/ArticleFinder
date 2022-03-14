import logo from "./logo.svg";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import CardArticle from "./components/Cards";
import ArticlesList from "./containers/Articles/ArticlesList";
import ShowArticle from "./containers/ArticleView/ShowArticle";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/articles/:id" element={<ShowArticle />} />
          <Route exact path="/articles" element={<ArticlesList />} />
          <Route path=":id" element={<ShowArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
