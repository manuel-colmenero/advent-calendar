import React from 'react';
import ReactDOM from 'react-dom';
import AdventCalendar from './AdventCalendar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdventCalendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
