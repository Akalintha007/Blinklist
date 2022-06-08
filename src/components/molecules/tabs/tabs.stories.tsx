import Tabs from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const TabsComponent = {
    title : 'Molecules/Tabs',
    component: Tabs
} as ComponentMeta<typeof Tabs>;

export const Template: ComponentStory<typeof Tabs>  = (args:any) => <Tabs {...args} />


const tabData = [
    { 
      'id':401,
      'value': 'category',
      'label': 'Explore by category',
    },
    { 
      'id':402,
      'value': 'recent',
      'label': 'recently added'
    },
    { 
        'id':403,
        'value': 'popular',
        'label': 'See popular titles'
      }
]

Template.args = {
    textColor: 'primary',
    indicatorColor: 'success',
     
    tabData: tabData
}

export default TabsComponent;























// stateHandler: {handleState},