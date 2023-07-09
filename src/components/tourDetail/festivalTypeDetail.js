import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function FestivalTypeDetail({tourDetail}) {
  console.log('festival');
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
          <Text style={styles.subText}>행사 시작일</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.eventstartdate}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>행사 종료일</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.eventenddate}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>행사 홈페이지</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.eventhomepage}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>관람 가능 연령</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.agelimit}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>예매처</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.bookingplace}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>할인 정보</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.discountinfofestival}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>이용 요금</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.usetimefestival}</Text>
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

export default FestivalTypeDetail;
