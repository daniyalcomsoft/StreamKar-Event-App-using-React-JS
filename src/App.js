import Marque from './components/Marquee';
import header from '../src/assets/Header.jpg'
import Guide from './components/popupbuttons/Guide';
import { useState } from 'react';
import TabButtons from './components/TabsButton/TabButtons';
import './App.scss';

function App() {
  const [mainTabs, setMainTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  return (

    <>
      <div className='App'>
        <div className='header'>
          <img src={header} className='header-img' />
        <Guide/>
        <Marque/>
        <TabButtons mainTabs={mainTabs} setMainTabs={setMainTabs}/>
        <span className='rights'>
                All Rights Reserved
            </span>
        </div>
      </div>
    </>
  );
}

export default App;
