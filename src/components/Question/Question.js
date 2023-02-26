import React from 'react';

const Question = () => {
  return (
    <div className='mt-5 mx-3'>
      <div>
        <p className='fw-bold fs-1'>1. How does react work?</p>
        <p className='fa-1x'>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
      </div>
      <div>
        <p className='fw-bold fs-1'>2. Other than fetching api or data what are the uses of useEffect?</p>
        <p className='fa-1x'>Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are passed down as an argument to the child component and are accessible through the "props" object. Props are usually used to configure a component, such as passing in text to display or passing in a callback function to handle events.</p>
        <p>State, on the other hand, is used to manage internal data within a component. It is mutable and can be updated using the "setState" method. State should only be used to store data that is specific to a component and not shared with other components. State is initialized in the constructor of a component and can be accessed using the "this.state" object.</p>
      </div>
      <div>
        <p className='fw-bold fs-1'>3. How does react work?</p>
        <ul className='p-0 mx-2'>
          <li>Modifying the DOM: When a component needs to modify the DOM, it can use the useEffect hook to perform the DOM manipulation</li>
          <li>Timers and intervals: The useEffect hook can be used to set timers or intervals to perform a task at a specified interval. For example, you can use it to update a component's state every few seconds.</li>
          <li>Setting up event listeners: When a component needs to set up event listeners, it can use the useEffect hook to register and unregister the listeners.</li>
          <li>Subscribing and unsubscribing to events: The useEffect hook can be used to subscribe and unsubscribe to events such as websockets or push notifications. This is typically done in the effect function that gets executed when the component mounts or updates.</li>
          <li>Managing component state: The useEffect hook can be used to manage the state of a component. For example, you can use it to set default values for state variables when the component mounts or update the state based on certain conditions.</li>
        </ul>       
      </div>
    </div>
  );
};

export default Question;