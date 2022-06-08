import Card from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

const CardComponent = {
    title : 'Organisms/Card',
    component: Card,
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
    },
} as ComponentMeta<typeof Card>;

 const Template: ComponentStory<typeof Card>  = (args:any) => <Router><Card {...args} /></Router>


export const Library = Template.bind({});

Library.args = {
    imgHeight: 300,
    url: "/assets/book.png",
    bookName: "Beyond Entrepreneurship",
    writerName: "Jim Collins & Bill Lazier",
    timeRead: "14-minute read",
    width: 330,
    progress: 60,
    inLibrary: true,
}


export const Finished = Template.bind({})

Finished.args = {
    imgHeight: 300,
    url: "/assets/book.png",
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 330,
    inLibrary: false,
}

export default CardComponent;