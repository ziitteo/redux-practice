import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const fillPercentage = useSelector(state => state.fillPercentage);
  const dispatch = useDispatch();

  const increaseFill = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decreaseFill = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='main'>
      <div className='container'>
        <h1>오늘의 행복 지수</h1>
        <div className='heart-container'>
          <svg viewBox='0 0 24 24' className='heart'>
            <defs>
              <mask id='mask1'>
                <rect x='0' y='0' width='100%' height='100%' fill='white' />
                <rect
                  x='0'
                  y='0'
                  width='100%'
                  height={`${100 - fillPercentage}%`}
                  fill='black'
                  style={{ transition: 'height 0.3s ease' }}
                />
              </mask>
            </defs>
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              fill='#ff41c6'
              mask='url(#mask1)'
            />
            <path
              className='outline'
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              fill='none'
              stroke='#ff41c6'
              strokeWidth='2'
            />
          </svg>
        </div>
        <div className='button-container'>
          <button onClick={increaseFill}>행복</button>
          <button onClick={decreaseFill}>불행</button>
        </div>
      </div>
    </div>
  );
}

export default App;
