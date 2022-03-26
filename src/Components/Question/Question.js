import React from 'react';

const Question = () => {
    return (
        <div className='p-4 my-6'>
            <div>
                  <h1 className='subpixel-antialiased text-2xl my-2'>how reacts works ?</h1>
                    <p className='subpixel-antialiased'>developed by facebook , react is a javascript library to build fast , effective ,interective
user-interface (UL) . It basically breake down a UI in smaller parts which is called component .
component is just a javascrpt function which has a returns statement . you can return any 
html element like thing(JSX) etc . actually these are not html element . they look like
html but actually they are JSX(javascript XML-js in disguise) work as a syntectical sugar.
All components can have multiple child and grand child components and we can also pass value 
through props to other components.

but how does react actually  work ? and why does it call "React" ? 

so react keeps a light weight representation or copy of real DOM(document object model) in memory 
which is called vertual DOM . whenever a state is changed we get a new element , then react will
compare the vertual and real DOM then find out change through key . then react Update the chahge
in real DOM . so "React" react instantly whenever a state is changed . that's why it is called 
"REACT"   </p>
</div> 
<div>
    <h1 className='subpixel-antialiased text-2xl my-2'>difference between props and state</h1>
    <p className='subpixel-antialiased'>
        so both props and state works with data . means whenever your application changing or updating   data consider that somwhere props or state is responsible for that . so why are they so different ?
        the main difference is  props is passed into a component and state is handled inside of that component . you cannot change or update props (read only) but  can  update state data (read and write)  . 
    </p>
</div>

        </div>
    );
};

export default Question;