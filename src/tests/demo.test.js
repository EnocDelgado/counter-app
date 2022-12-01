describe('Test on <DemoComponent />', () => { 

    test('should not fail this test', () => { 

        // 1. initialization
        const message1 = 'Hello, World';

        // 2. stimulus
        const message2 = message1.trim();

        // 3. look their behavior... waiting
        expect( message1 ).toBe( message2 );
    })
})