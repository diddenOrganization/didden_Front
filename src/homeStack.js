import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, TouchableWithoutFeedback, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {selectTokenAcc, selectTokenRef, selectKakaoUserEmail} from './store/tokenReducer';
import Home from './home';
import Modal from './components/modal';
import Generator from './components/generator';
import GeneratorTour from './components/generatorTour';
import GeneratorTourDetail from './components/generatorTourDetail';
import Picker from './components/picker';
import Input from './components/input';
import ImageLoader from './components/imageLoader';
import ImagePicker from './components/imagePicker';
import Animation from './components/animation';
import Increase from './components/increase';
import Login from './components/login';
import Signup from './components/signup';
import LogoComponent from './logo';
import KakaoLogin from './components/kakaoLogin';
import NaverLogin from './components/naverLogin';
import GoogleMap from './components/googleMap';
import Card from './components/card';
import Components from './components';
import Announcement from './announcement';
import searchHome from './components/searchHome';
import HotelTypeDetail from './components/tourDetail/hotelTypeDetail';
import FestivalTypeDetail from './components/tourDetail/festivalTypeDetail';
import FoodTypeDetail from './components/tourDetail/foodTypeDetail';
import LeportsTypeDetail from './components/tourDetail/leportsTypeDetail';
import ShoppingTypeDetail from './components/tourDetail/shoppingTypeDetail';
import TourismTypeDetail from './components/tourDetail/tourismTypeDetail';
import TravelTypeDetail from './components/tourDetail/travelTypeDetail';

const Stack = createNativeStackNavigator();

function HomeStack() {
  const tokenAcc = useSelector(selectTokenAcc);
  const tokenRef = useSelector(selectTokenRef);
  const userEmail = useSelector(selectKakaoUserEmail);

  const homeNavigation = () => <Home />;

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        title: '',
        headerTitle: () => <LogoComponent tokenAcc={tokenAcc} tokenRef={tokenRef} />,
        headerRight: () => (
          <TouchableWithoutFeedback
            onPress={() => {
              Alert.alert('didden', `Hi! ${userEmail}`);
            }}>
            <Image style={{width: 25, height: 25}} source={require('../image/info.png')} />
          </TouchableWithoutFeedback>
        ),
      }}>
      <Stack.Screen name="home" component={homeNavigation} />
      <Stack.Screen name="modal" component={Modal} />
      <Stack.Screen name="generator" component={Generator} />
      <Stack.Screen name="generatorTour" component={GeneratorTour} />
      <Stack.Screen name="generatorTourDetail" component={GeneratorTourDetail} />
      <Stack.Screen name="picker" component={Picker} />
      <Stack.Screen name="input" component={Input} />
      <Stack.Screen name="imageLoader" component={ImageLoader} />
      <Stack.Screen name="imagePicker" component={ImagePicker} />
      <Stack.Screen name="animation" component={Animation} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={Signup} />
      <Stack.Screen name="increase" component={Increase} />
      <Stack.Screen name="kakaoLogin" component={KakaoLogin} />
      <Stack.Screen name="naverLogin" component={NaverLogin} />
      <Stack.Screen name="googleMap" component={GoogleMap} />
      <Stack.Screen name="card" component={Card} />
      <Stack.Screen name="components" component={Components} />
      <Stack.Screen name="announcement" component={Announcement} />
      <Stack.Screen name="searchHome" component={searchHome} />
      <Stack.Screen name="hotelTypeDetail" component={HotelTypeDetail} />
      <Stack.Screen name="festivalTypeDetail" component={FestivalTypeDetail} />
      <Stack.Screen name="foodTypeDetail" component={FoodTypeDetail} />
      <Stack.Screen name="leportsTypeDetail" component={LeportsTypeDetail} />
      <Stack.Screen name="shoppingTypeDetail" component={ShoppingTypeDetail} />
      <Stack.Screen name="tourismTypeDetail" component={TourismTypeDetail} />
      <Stack.Screen name="travelTypeDetail" component={TravelTypeDetail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
