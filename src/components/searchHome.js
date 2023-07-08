import React, {useEffect, useState} from 'react';
import {TourApi} from '../service/api/didden/TourApi';
import {View, Image, Text, TouchableWithoutFeedback, StyleSheet, Button, Modal} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import filterLogo from '../../image/filter-icon.png';
import {CategoryApi} from '../service/api/didden/CategoryApi';
import Card from '../components/card';

function SearchHomeComponent() {
  const [searchWord, setSearchWord] = useState('');

  const [modal, setModal] = useState(false);
  const [highCategory, setHighCategory] = useState([]);
  const [middleCategory, setMiddleCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    getHighCategoryList();
    getMiddleCategoryList();
  }, []);

  const getHighCategoryList = async () => {
    const {
      data: {data},
    } = await CategoryApi.getHighCategoryList();
    setHighCategory(data);
  };

  const getMiddleCategoryList = async () => {
    const {
      data: {data},
    } = await CategoryApi.getMiddleCategoryList();
    setMiddleCategory(data);
  };

  const onChangeText = value => setSearchWord(value);

  const handleModal = value => {
    setModal(modal ? false : true);
  };

  const selectCategory = (code, title, codeName, contentTypeCode) => {
    const category = {code, title, codeName, contentTypeCode};
    const existingIndex = selectedCategory.findIndex(item => item.code === code);

    if (existingIndex !== -1) {
      setSelectedCategory(prevState => {
        const updatedCategories = [...prevState];
        updatedCategories.splice(existingIndex, 1); // 기존 객체 제거
        return updatedCategories;
      });
    } else {
      setSelectedCategory(prevState => [...prevState, category]); // 새로운 객체 추가
    }
  };

  const onRemove = index => {
    setSelectedCategory(prevState => {
      const updatedCategories = [...prevState];
      updatedCategories.splice(index, 1);
      return updatedCategories;
    });
  };
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
      {selectedCategory
        ? selectedCategory.map((data, index) => (
            <View style={styles.filterButton}>
              <TouchableWithoutFeedback style={styles.button} onPress={() => onRemove(index)}>
                <Text style={styles.text}>{data.title} X</Text>
              </TouchableWithoutFeedback>
            </View>
          ))
        : ''}

      <TouchableWithoutFeedback onPress={handleModal}>
        <View style={styles.logoParent}>
          <Image style={styles.filterLogo} source={filterLogo} />
          <Text style={styles.addFilter} title="필터추가">
            필터추가
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Card middleCategory={selectedCategory} />
      <View style={{width: '100%', alignItems: 'center'}}>
        <Modal visible={modal} animationType="slide">
          <View style={{marginTop: 60, width: '100%'}}>
            {highCategory.map((highData, index) => (
              <View key={highData.code + '-' + index}>
                <Text style={styles.highTitle}>{highData.title}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', width: '100%'}}>
                  {middleCategory
                    .filter(midData => midData.contentTypeCode === highData.contentTypeCode)
                    .map(midData => (
                      <TouchableWithoutFeedback
                        onPress={() =>
                          selectCategory(midData.code, midData.title, midData.codeName, midData.contentTypeCode)
                        }>
                        <Text
                          style={[
                            styles.midTitle,
                            selectedCategory.find(item => item.code === midData.code) ? {color: '#4213EB'} : null,
                          ]}
                          key={midData.code}>
                          {midData.title}
                        </Text>
                      </TouchableWithoutFeedback>
                    ))}
                </View>
              </View>
            ))}
            <Button title="적용" onPress={handleModal} />
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
  highTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 20,
    width: '100%',
  },
  midTitle: {
    marginLeft: 10,
    marginTop: 10,
    color: '#7C7C84',
    fontWeight: '500',
  },

  filterButton: {
    width: '25%',
    height: 30,
    borderRadius: 25,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 13,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#7a42f4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchHomeComponent;
