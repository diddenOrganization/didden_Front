import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function TourismTypeDetail({tourDetail}) {
  console.log(tourDetail);
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>주소</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>
            {tourDetail.address} {tourDetail.area}
          </Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>연락처</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.cellphone}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>애완동물 동반 가능 정보</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.chkpet}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>문의 및 안내</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.infocenter}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>개장일</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.opendate}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>주차시설</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.parking}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>쉬는날</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.restdate}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>이용시간</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.usetime}</Text>
        </View>
      </View>
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

export default TourismTypeDetail;
