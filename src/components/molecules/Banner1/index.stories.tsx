import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Banner1 from "./index";



export default {
  title: "Molecules/Banner",
  component: Banner1,
} as ComponentMeta<typeof Banner1>;

const BannerTemplate:ComponentStory<typeof Banner1> = (args:any) => (
  <Banner1 ></Banner1>
);

export const BannerTemp = BannerTemplate.bind({});
