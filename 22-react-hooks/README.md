# React Functional Component

The simplest way to define a component is to write a JavaScript function: *//function component*
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

You can also use an ES6 class to define a component: *//class component*
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
*//You can hook into component life cycle events*

### State Hook - useState
```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Effect Hook - useEffect
The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState("Something");
  
 
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }); // componentDidUpdate - will happen every state update (every component rerender)
  
  useEffect(() => {
    console.log(max);
  }, [max]); // will happen each time max is updated
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, []); // componentDidMount - will happen only once, when the component mounted for the first time
  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
### Ref Hook - useRef
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### Context Hook - useContext
Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.


*Don’t forget that the argument to useContext must be the context object itself:*

>Correct: useContext(MyContext)

>Incorrect: useContext(MyContext.Consumer)

>Incorrect: useContext(MyContext.Provider)

[useContext Example](https://reactjs.org/docs/hooks-reference.html#usecontext)


### Resources
[React Hooks at reactjs.org](https://reactjs.org/docs/hooks-intro.html)
[Write Your own Hook](https://reactjs.org/docs/hooks-custom.html)

### Assignment
* You are going to build a country autocomplete component ([like this one](https://codesandbox.io/s/56iuf?file=/demo.js))
* Use [CountriesJson](https://gist.github.com/keeguon/2310008) for data

1. you will need to use the following hooks:
    1. useState - to select the country from the dropdown
    2. useEffect - to show matching countries when the input has changed
    3. useRef - to show/hide dropdown
2. components suggestion:
    1. SearchBar
    2. OptionsDropdown
    3. Option
    4. ClearButton
    5. ToggleButton
3. Once you finish writing you app, write & implement a custom hook for common functionality
