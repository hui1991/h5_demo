import React, { useState, Component } from 'react';

function Example() {

  const [ count, setCount ] = useState(0);
  return(
    <div>
      <p>
        You click { count } times
      </p>
      <button onClick={()=>setCount( count+1 )}>
        Click me
      </button>
    </div>
  )
}

class Class extends Component{

  constructor(props){
    super(props);

  }

  componentWillMount(){}

}

export default Example;
