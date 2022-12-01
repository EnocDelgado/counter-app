import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Test on FirstApp', () => {

    // test('should match the snapshot', () => {

    //     const title = "Hello, I'm Enoc"
    //     const { container } = render( <FirstApp  title={ title }/> )

    //     // console.log( container )
    //     expect( container ).toMatchSnapshot()

    // })

    test('should display the title in an h1', () => { 

        const title = "Hello, I'm Enoc"
        const { container, getByText, getByTestId } = render( <FirstApp  title={ title }/> )

        expect( getByText( title ) ).toBeTruthy();

        expect( getByTestId( 'test-title' ).innerHTML ).toContain( title );

        // Other way to do it
        // const h1 = container.querySelector('h1');
        // // console.log( h1.innerHTML )
        // expect( h1.innerHTML ).toContain( title )
    })

    test('should display the subtutle submit by props', () => {

        const title = "Hello, I'm Enoc";
        const subTitle = "Enoc";
        const { getByText } = render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( getByText(subTitle) ).toBeTruthy();

    })
})