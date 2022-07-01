import * as React from 'react';
//tsdrpfc 
import Promotion from '../../components/promotion/Promotion';
import Tabcontent from '../../components/tabcontent/Tabcontent';
import Gallery from './Gallery';
export interface Props {
}

export default function App () {
  return<>
    <div className="home-page ">
      <Promotion/>
      <Tabcontent />
      <Gallery/>
    </div>
  
  </>
}
