import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp";


describe('Test on CounterApp', () => {

    const initialValue = 10;

    test('should do match with snapshot', () => { 

        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('should display initial value 100 on <CounterApp value={100} />', () => {

        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText( 100 ) ).toBeTruthy();
        // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')
    });

    test('should increment with +1 button', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText( '+1' ) )
        expect( screen.getByText('11') ).toBeTruthy();
    })

    test('should decrement with -1 button', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText( '-1' ) );
        expect( screen.getByText( '9' ) ).toBeTruthy();
    });

    test('should work reset button', () => {

        render( <CounterApp value={ 0 } /> );
        fireEvent.click( screen.getByText( '+1' ) );
        fireEvent.click( screen.getByText( '+1' ) );
        fireEvent.click( screen.getByText( '+1' ) );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );

        expect( screen.getByText( 0 ) ).toBeTruthy();
    });
})