import {NavigationContainer} from '@react-navigation/native';
import Navigator from '..';
import React, {useEffect, useState} from 'react';
import AuthStack from '../AuthStack';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSession } from '../../../db';
import { setUser } from '../../../features/authSlice';


const MainNavigator = () => {
   const idToken = useSelector((state) => state.auth.idToken)
   const dispatch = useDispatch();
   useEffect(() => {
     (async () => {
         try {
            const session = await fetchSession();
            if(session.rows.length > 0) {
                const user = session.rows._array[0];
                dispatch(setUser(user));
            }
         } catch (err) {
             console.log(err);
         }
      })();
    }, [idToken]);
   
    return (
        <NavigationContainer>
           {idToken ? <Navigator/> : <AuthStack/>}
        </NavigationContainer>
    );
}

export default MainNavigator;