import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Redirect path='/quotes'/>
        </Route>
      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail/>
      </Route>
      <Route path='/new-quotes'>
        <NewQuote/>
      </Route>
      </Switch>
  );
}

export default App;
