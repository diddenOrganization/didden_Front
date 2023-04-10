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
  Button,
  Modal,
} from 'react-native';
import BadgeComponent from './badge';
import {TextInput} from 'react-native-gesture-handler';
import filterLogo from '../../image/filter-icon.png';

function CardComponent() {
  const [searchWord, setSearchWord] = useState('');
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getTourList();
  }, []);

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

  const onChangeText = value => setSearchWord(value);

  const handleModal = value => setModal(modal ? false : true);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchWord}
        style={styles.wordInput}
        onChangeText={onChangeText}
        autoCapitalize={'none'}
        placeholder={'원하든 어디든!'}
        placeholderTextColor={'#9A85F4'}
        autoFocus={true}
      />
      <TouchableWithoutFeedback onPress={handleModal}>
        <View style={styles.logoParent}>
          <Image style={styles.filterLogo} source={filterLogo} />
          <Text style={styles.addFilter} title="필터추가">
            필터추가
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <ScrollView contentContainerStyle={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
        {isLoading ? (
          imageList.map((image, index) => (
            <TouchableWithoutFeedback
              key={image.galContentId + '-' + index}
              onPress={() => {
                Alert.alert('didden', `contentId : ${image.contentId}, title : ${image.title}`);
              }}>
              <View style={styles.card}>
                <View style={styles.cardLeft}>
                  <Image
                    source={{uri: image.firstImage}}
                    style={styles.image}
                    resizeMode="cover"
                    key={image.contentId + '-' + index}
                  />
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
                      contain={image.highCodeName.split('_')[0]}
                      key={image.highCodeName + '-' + index}
                    />
                    <BadgeComponent
                      style={styles.badge}
                      color={'#006600'}
                      backgroundColor={'#6cc570'}
                      contain={image.middleCodeName}
                      key={image.middleCodeName + '-' + index}
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
      <View style={{width: '100%', alignItems: 'center'}}>
        <Button title="Open Modal" onPress={handleModal} />

        <Modal visible={modal} animationType="slide">
          <View style={{marginTop: 60}}>
            <Text>테마</Text>
          </View>
        </Modal>
      </View>
    </View>
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
  wordInput: {
    paddingLeft: 10,
    width: '90%',
    marginTop: 20,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
  },
  logoParent: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  filterLogo: {
    width: 15,
    height: 15,
    marginRight: 2,
    tintColor: '#7a42f4',
  },
  addFilter: {
    color: '#7a42f4',
  },
});

export default CardComponent;
