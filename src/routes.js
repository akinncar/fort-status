import {createAppContainer, createStackNavigator} from "react-navigation";

import Main from './pages/main';
import Profile from './pages/profile'

const Routes = createAppContainer(
  createStackNavigator({
    Main: { screen: Main },
    Profile: { screen: Profile },
  },
));

export default Routes;
