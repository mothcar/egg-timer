// import { useState } from 'react';
import Header from './Header';
// import Sidebar from './Sidebar';
import Timer from './Timer';
import './App.css';

function App() {
  // const [activeTab, setActiveTab] = useState('Timer');

  return (
    <div className="App">
      <div>
      <Header />
      </div>
      
      <div className="content">
        {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        <main>
        <Timer />
          {/* {activeTab === 'Timer' && <Timer />} */}
          {/* 다른 탭에 대한 컴포넌트들을 여기에 추가 */}
        </main>
      </div>
    </div>
  );
}

export default App;