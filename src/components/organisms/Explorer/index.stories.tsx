import ExploreComponent from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

const ExploreComp = {
    title: "Organisms/Explore",
    component: ExploreComponent,
  }as ComponentMeta<typeof ExploreComponent>;
  
  const template: ComponentStory<typeof ExploreComponent> = (args:any) => <Router><ExploreComponent  /></Router>;
  export const Explore = template.bind({});


  export default ExploreComp


