import * as React from 'react';
//tsdrpfc 
import Promotion from '../promotion/Promotion';
import Tabcontent from '../tabcontent/Tabcontent';
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
