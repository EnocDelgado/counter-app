import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Test on FirstApp', () => {

    const title = "Hello, I'm Enoc";
    const subTitle = "Enoc";

    test('should match the snapshot', () => {

        const { container } = render( <FirstApp  title={ title }/> );
        expect( container ).toMatchSnapshot();

    })

    test("should display the message 'Hello, I'm Enoc' ", () => { 

        render( <FirstApp  title={ title }/> )
        expect( getByText( title ) ).toBeTruthy();
        // screen.debug()
    })

    test('should display the title in an h1', () => { 

        render( <FirstApp  title={ title }/> )
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );

    })

    test('should display the subtutle submit by props', () => {

        render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getByText(subTitle) ).toBeTruthy();

    })
})