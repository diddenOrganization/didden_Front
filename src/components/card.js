import React, {useEffect, useState} from 'react';
import {TourApi} from '../service/api/didden/TourApi';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import BadgeComponent from './badge';
import HighCodeTypeEnumLabel from '../types/HighCodeEnum';
import MiddleCodeTypeEnumLabel from '../types/MiddleCodeEnum';

function CardComponent({middleCategory}) {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [middleCodeName, setMiddleCodeName] = useState([]);
  const [middleCodeName, setMiddleCodeName] = useState('');

  useEffect(() => {
    getTourList();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMiddleCodeName(middleCategory?.map(data => data.codeName));
      } catch (error) {
        console.error('Error while fetching tour list:', error);
      }
    };

    fetchData();
  }, [middleCategory]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const {
          data: {data},
        } = await TourApi.getTourList('', '', 'SHOPPING', '');

        if (data) {
          setImageList(data);
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    if (middleCodeName.length > 0) {
      fetchTourData();
    }
  }, [middleCodeName]);

  const getTourList = async () => {
    setIsLoading(false);
    const {
      data: {data},
    } = await TourApi.getTourList('', '', '', '');
    if (data) {
      setImageList(data);
      setIsLoading(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
      {isLoading ? (
        imageList.map((image, index) => (
          <TouchableWithoutFeedback
            key={'a' + index}
            onPress={() => {
              Alert.alert('didden', `contentId : ${image.contentId}, title : ${image.title}`);
            }}>
            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <Image source={{uri: image.detailImage}} style={styles.image} resizeMode="cover" key={'b' + index} />
              </View>
              <View style={styles.cardRight}>
                <Text style={styles.area}>
                  {image.areaName} {image.sigunuName}
                </Text>
                <Text style={styles.imageTitle}>{image.title}</Text>
                <View style={styles.badgeArea}>
                  <BadgeComponent
                    style={styles.badge}
                    color={'#f07e06'}
                    backgroundColor={'#ffff7c'}
                    // contain={image.highCodeName.split('_')[0]}
                    contain={HighCodeTypeEnumLabel(image.highCode)}
                    key={'c' + index}
                  />
                  <BadgeComponent
                    style={styles.badge}
                    color={'#006600'}
                    backgroundColor={'#6cc570'}
                    contain={MiddleCodeTypeEnumLabel(image.middleCode)}
                    key={'d' + index}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))
      ) : (
        <View>
          <ActivityIndicator style={styles.loading} animating={isLoading} size="large" color="purple" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edebeb',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    height: 180,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 30,
    marginTop: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#edebeb',
    borderRadius: 10,
  },
  cardLeft: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
    maxWidth: 150,
    maxHeight: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cardRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    marginLeft: 15,
  },
  area: {
    marginTop: 20,
    color: 'grey',
    fontSize: 12,
  },
  imageTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  badgeArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 15,
  },
  loading: {
    position: 'absolute',
    left: 200,
    right: 0,
    bottom: 0,
    top: 300,
  },
});

export default CardComponent;
