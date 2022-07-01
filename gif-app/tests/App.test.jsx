import {render, screen}  from '@testing-library/react';
import {App} from '../src/App';

describe('Pruebas en el componente App', () => { 
    test('should first', () => { 
        render(<App />)
        screen.debug()
     })
 })