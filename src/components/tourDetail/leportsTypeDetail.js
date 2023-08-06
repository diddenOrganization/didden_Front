import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function LeportsTypeDetail({tourDetail}) {
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
          <Text style={styles.subText}>애완동물동반가능정보</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.chkpetleports}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>개장시간</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.openperiod}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>예약안내</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.reservation}</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.subArea}>
          <Text style={styles.subText}>이용시간</Text>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.infoText}>{tourDetail.usetimeleports}</Text>
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

export default LeportsTypeDetail;
