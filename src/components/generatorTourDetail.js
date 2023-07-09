import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {TourApi} from '../service/api/didden/TourApi';
import defaultImage from '../../image/defalutImage.png';
import HotelTypeDetail from './tourDetail/hotelTypeDetail';
import FestivalTypeDetail from './tourDetail/festivalTypeDetail';
import FoodTypeDetail from './tourDetail/foodTypeDetail';
import LeportsTypeDetail from './tourDetail/leportsTypeDetail';
import ShoppingTypeDetail from './tourDetail/shoppingTypeDetail';
import TourismTypeDetail from './tourDetail/tourismTypeDetail';
import TravelTypeDetail from './tourDetail/travelTypeDetail';

function GeneratorTourDetail() {
  const route = useRoute();
  const [tourDetail, setTourDetail] = useState('');
  const [activityLoading, setActivityLoading] = useState(false);

  useEffect(() => {
    setActivityLoading(true);
    const fetchTourData = async () => {
      try {
        const {
          data: {data},
        } = await TourApi.getTourDetail(route.params?.contentTypeCode, route.params?.contentId);
        if (data) {
          setTourDetail(data);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchTourData();
  }, [route]);

  //컴포넌트 분기 처리
  const renderContent = () => {
    console.log(route.params?.contentTypeCode);
    if (route.params?.contentTypeCode === 'HOTEL_TYPE') {
      return (
        <View style={styles.container}>
          <HotelTypeDetail tourDetail={tourDetail} />
        </View>
      );
    } else if (route.params?.contentTypeCode === 'FESTIVAL_TYPE') {
      return (
        <View style={styles.container}>
          <FestivalTypeDetail tourDetail={tourDetail} />
        </View>
      );
    } else if (route.params?.contentTypeCode === 'LEPORTS_TYPE') {
      return (
        <View style={styles.container}>
          <LeportsTypeDetail tourDetail={tourDetail} />
        </View>
      );
    } else if (route.params?.contentTypeCode === 'FOOD_TYPE') {
      return (
        <View style={styles.container}>
          <FoodTypeDetail tourDetail={tourDetail} />
        </View>
      );
    } else if (route.params?.contentTypeCode === 'SHOPPING_TYPE') {
      return (
        <View style={styles.container}>
          <ShoppingTypeDetail tourDetail={tourDetail} />
        </View>
      );
    } else if (['TOURISM_TYPE_A01', 'TOURISM_TYPE_A02'].indexOf(route.params?.contentTypeCode)) {
      return (
        <View style={styles.container}>
          <TourismTypeDetail tourDetail={tourDetail} />
        </View>
      );
    } else if (route.params?.contentTypeCode === 'TRAVEL_TYPE') {
      return (
        <View style={styles.container}>
          <TravelTypeDetail tourDetail={tourDetail} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={tourDetail.detailImage ? {uri: tourDetail.detailImage} : defaultImage}
        style={{width: 390, height: 260}}
        resizeMode="contain"
      />
      <Text style={styles.titleText}>{tourDetail.title}</Text>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  titleText: {
    padding: 10,
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentArea: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
  subArea: {
    flexDirection: 'row',
  },
  infoArea: {
    padding: 5,
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    fontSize: 16,
  },
});

export default GeneratorTourDetail;
