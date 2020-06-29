import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NewGroup from './pages/NewGroup';
import Groups from './pages/Groups';
import Profile from './pages/Profile';
import WishList from './pages/WishList';
import GrouProfile from './pages/GroupProfile';
import EditProfile from './pages/EditProfile';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="NewGroup" component={NewGroup} />
                <AppStack.Screen name="Groups" component={Groups} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="WishList" component={WishList} />
                <AppStack.Screen name="GrouProfile" component={GrouProfile} />
                <AppStack.Screen name="EditProfile" component={EditProfile} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}