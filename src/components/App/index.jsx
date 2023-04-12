//import { useState } from 'react';
import 'components/App/App.css';
import Form from 'components/Form';
import Content from 'components/Content';

function App() {
   return (
        <div className='bg-indigo-300 max-h-screen'>
            <div className='max-w-screen-lg mx-auto'>
                <Form />
                <Content />
            </div>
        </div>
    );
}

export default App;
