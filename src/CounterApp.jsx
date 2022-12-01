import PropTypes from 'prop-types'
import { useState } from 'react'

/**
 * 
 * This is a Counter App
 * @param {value} param0 
 * @returns  value that may change depending on useState
 */
export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1)
    };

    const handleReset = () => {
        setCounter( value )
    };

    const handleSub = () => {
        setCounter( counter - 1)
    };

    return (
        <>
            <div className='container'>

                <div className='counter'>
                    <h1>Counter App</h1>
                    <h2>{ counter }</h2>

                    <button onClick={ handleSub }>
                        -1
                    </button>

                    <button onClick={ handleReset }>
                        Reset
                    </button>

                    <button aria-label='btn-reset' onClick={ handleAdd }>
                        +1
                    </button>
                </div>
                
            </div>
        </>
    );
};

// PropTypes allows us to define a strict value type
CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
};
