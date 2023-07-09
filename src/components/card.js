import React, {useEffect, useState} from 'react';
import {TourApi} from '../service/api/didden/TourApi';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import BadgeComponent from './badge';
import HighCodeTypeEnumLabel from '../types/HighCodeEnum';
import MiddleCodeTypeEnumLabel from '../types/MiddleCodeEnum';
import defaultImage from '../../image/defaultImage.png';

function CardComponent({middleCategory}) {
  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [contentTypeCode, setContentTypeCode] = useState('');
  const [page, setPage] = useState(0);
  const [size] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setContentTypeCode(middleCategory?.map(data => data.contentTypeCode).toString());
      } catch (error) {
        console.error('Error while fetching tour list:', error);
      }
    };

    fetchData();
  }, [middleCategory]);

  useEffect(() => {
    setTourList([]);
    setPage(0);
  }, [contentTypeCode]);

  useEffect(() => {
    getTourList();
  }, [page]);

  useEffect(() => {
    if (!isLoading) {
      if (page === 0 && tourList.length === 0) {
        fetchTourData();
      }
    }
  }, [page, tourList]);

  const getTourList = async () => {
    setIsLoading(true);
    const {
      data: {data},
    } = await TourApi.getTourList(contentTypeCode, '', '', '', page, size);
    if (data) {
      setTourList([...tourList, ...data]);
      setIsLoading(false);
    }
  };

  const fetchTourData = async () => {
    setIsLoading(true);
    try {
      const {
        data: {data},
      } = await TourApi.getTourList(contentTypeCode, '', '', '', page, size);
      if (data) {
        setTourList([...tourList, ...data]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        key={'a' + item.contentId}
        onPress={() => {
          Alert.alert('didden', `contentId : ${item.contentId}, title : ${item.title}`);
        }}>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <Image
              source={item.detailImage ? {uri: item.detailImage} : defaultImage}
              style={styles.image}
              resizeMode="cover"
              key={'b' + item.contentId}
            />
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.area}>
              {item.areaName} {item.sigunuName}
            </Text>
            <Text style={styles.imageTitle}>{item.title}</Text>
            <View style={styles.badgeArea}>
              <BadgeComponent
                style={styles.badge}
                color={'#f07e06'}
                backgroundColor={'#ffff7c'}
                // contain={image.highCodeName.split('_')[0]}
                contain={HighCodeTypeEnumLabel(item.highCode)}
                key={'c' + item.contentId}
              />
              <BadgeComponent
                style={styles.badge}
                color={'#006600'}
                backgroundColor={'#6cc570'}
                contain={MiddleCodeTypeEnumLabel(item.middleCode)}
                key={'d' + item.contentId}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={tourList}
      renderItem={renderItem}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => {
        if (isLoading) {
          return (
            <View>
              <ActivityIndicator style={styles.loading} animating={isLoading} size="large" color="purple" />
            </View>
          );
        }
        return null;
      }}
    />
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
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default CardComponent;
