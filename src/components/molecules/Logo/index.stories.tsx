import LogoComponent from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const LogoImageComponent = {
    title : 'Atoms/Logo',
    component: LogoComponent
} as ComponentMeta<typeof LogoComponent>;

export const Template: ComponentStory<typeof LogoComponent>  = (args:any) => <LogoComponent/>


export default LogoImageComponent;