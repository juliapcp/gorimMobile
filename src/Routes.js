import { createStackNavigator } from '@react-navigation/stack';
import Frame1 from './components/frame1/index'
import Frame2 from './components/frame2/index'
import Frame3 from './components/frame3/index'
import Frame4 from './components/frame4/index'
import Frame5 from './components/frame5/index'
import Frame6 from './components/frame6/index'
import Frame7 from './components/frame7/index'
import * as React from 'react';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="frame1" component= {Frame1}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
            <Stack.Screen name="frame2" component= {Frame2}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
              <Stack.Screen name="frame3" component= {Frame3}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
              <Stack.Screen name="frame4" component= {Frame4}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
              <Stack.Screen name="frame5" component= {Frame5}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
                <Stack.Screen name="frame6" component= {Frame6}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
                <Stack.Screen name="frame7" component= {Frame7}  options={{
    headerTransparent: true,
    headerTitle: ''
  }}/>
        </Stack.Navigator>
    )
}