import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LeftScreen from '../Screens/LeftScreen';
import RightScreen from '../Screens/RightScreen';
import MiddleScreen from '../Screens/MiddleScreen';

const Tab = createMaterialTopTabNavigator();
const Tabs = () => {
  const screens = [
    {
      name: 'left',
      title: 'Left',
      component: LeftScreen,
      tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
    },
    {
      name: 'middle',
      title: 'Middle',
      component: MiddleScreen,
      tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
    },
    {
      name: 'right',
      title: 'Right',
      component: RightScreen,
      tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
    },
  ];
  return (
    <Tab.Navigator
      //   tabBarPosition="bottom"
      initialRouteName="middle">
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.title,
            tabBarLabelStyle: screen.tabBarLabelStyle,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
