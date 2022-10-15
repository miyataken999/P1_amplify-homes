import './App.css';
import { 
  ActionCardCollection,NavBar, MarketingFooter 
} from './ui-components';
/// なぜ更新されないのかなー
function App() {
  return (
    <div className="App">
      <NavBar />
      <ActionCardCollection />
      <MarketingFooter />
    </div>
  );
}

export default App;
