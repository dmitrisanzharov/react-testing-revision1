import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

it('check button render', ()=> {
    const {queryByTitle} = render(<Button />);
    let btn = queryByTitle('dummyButton');
    expect(btn).toBeDefined();
}); 

describe('click button', ()=> {
    it('onClick', ()=> {
        const {queryByTitle} = render(<Button />);
        const btn = queryByTitle("dummyButton");
        expect(btn.innerHTML).toEqual('Press Here'); 
        fireEvent.click(btn);
        expect(btn.innerHTML).toEqual('You clicked'); 
    })
});