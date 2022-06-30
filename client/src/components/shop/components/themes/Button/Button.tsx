import * as React from 'react';
import './button.scss'

export interface buttonProps {
    buttonContent: string;
    bgColor: string;
    width?: string;
}

export default function Button (props: buttonProps) {
    const {buttonContent,bgColor,width} = props;
  return (
    <div className={bgColor} style={{width: width}}>
         <div className="button-ivymoda" >
            {buttonContent}
        </div>
    </div>
   
  );
}
