import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import CreateGroup from "../screens/CreateGroup/CreateGroup";
import GroupConfig from "../screens/GroupConfig/GroupConfig";

const {Navigator, Screen} = createNativeStackNavigator()

function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
            <Screen name={'home'} component={Home}/>
            <Screen name={'createGroup'} component={CreateGroup}/>
            <Screen name={'groupConfig'} component={GroupConfig}/>
        </Navigator>
    );
}

export default AppRoutes;
