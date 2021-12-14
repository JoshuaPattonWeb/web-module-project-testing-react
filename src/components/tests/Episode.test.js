import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

    const filler = {
        id: 1,
        name: '',
        image: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
        season: '',
        number: '',
        summary: 'filler',
        runtime: ''
    }

    const fillerimg = {
        id: 1,
        name: '',
        image: 'null',
        season: '',
        number: '',
        summary: 'filler',
        runtime: ''
    }

test("renders without error", () => {
    render(<Episode episode={Episode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={filler}/>)
    const summary = screen.queryByText(/filler/i)
    expect(summary).toBeInTheDocument()
    expect(summary).toBeTruthy
    expect(summary).not.toBeFalsy
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={fillerimg}/>)
    const image = screen.queryByAltText('./stranger_things.png')
    console.log(image)
});
