import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function HotelTypeDetail({tourDetail}) {
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
          <Text style={styles.infoText}>{tourDetail.infocenterlodging}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>입실시간</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.checkintime}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>퇴실시간</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.checkouttime}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>주차시설</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.parkinglodging}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>예약안내홈페이지</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.reservationurl}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>부대시설</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.subfacility}</Text>
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

export default HotelTypeDetail;
