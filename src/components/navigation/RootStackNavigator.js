import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { observer } from 'mobx-react/native';

import appStore from '../../stores/appStore';
import NavigationService from './NavigationService';
import IntroScreen from '../screen/Intro';
import SwitchNavigator from '../navigation/SwtichNavigator';
import StackNavigator from '../navigation/StackNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import MaterialTopTabNavigator from '../navigation/MaterialTopTabNavigator';
import MaterialBottomTabNavigator from '../navigation/MaterialBottomTabNavigator';
import DrawerNavigator from '../navigation/DrawerNavigator';
import CustomNavigator from '../navigation/CustomNavigator';
import NotFoundScreen from '../screen/NotFound';

@observer
class RootNavigator extends React.Component {
  state = {
    initScreen: 'Intro',
  };

  render() {
    const routeConfig = {
      Intro: {
        screen: IntroScreen,
        path: 'Intro',
      },
      SwitchNavigator: {
        screen: SwitchNavigator,
      },
      StackNavigator: {
        screen: StackNavigator,
      },
      BottomTabNavigator: {
        screen: BottomTabNavigator,
      },
      MaterialTopTabNavigator: {
        screen: MaterialTopTabNavigator,
      },
      MaterialBottomTabNavigator: {
        screen: MaterialBottomTabNavigator,
      },
      DrawerNavigator: {
        screen: DrawerNavigator,
      },
      CustomNavigator: {
        screen: CustomNavigator,
      },
      NotFound: {
        screen: NotFoundScreen,
        path: 'NotFound',
      },
    };

    const navigatorConfig = {
      initialRouteName: this.state.initScreen,
      // header: null,
      // headerMode: 'none',
      gesturesEnabled: true,
      statusBarStyle: 'light-content',
    };

    const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);
    const AppContainer = createAppContainer(RootStackNavigator);

    return (
      <AppContainer
        ref={(v) => {
          if (v) {
            NavigationService.setTopLevelNavigator(v);
          }
        }}
        uriPrefix='/'
      >
        <RootStackNavigator />
      </AppContainer>
    );
  }
}

export default RootNavigator;
