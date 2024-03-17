import {View, Text} from 'react-native';
import React from 'react';
import getStyling from './style';
import {FollwUpButton, UnderlinedText} from '../../components';

const TaskToTrackDetails = () => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <UnderlinedText text="Task to track" />
      <View style={{marginTop: 50}}>
        <Text style={styles.detailsTitle}>Task Name</Text>
        <Text style={styles.detailsSubText}>Engine rebuild</Text>
      </View>
      <View style={{marginTop: 22}}>
        <Text style={styles.detailsTitle}>Company Name</Text>
        <Text style={styles.detailsSubText}>VW Lazarus</Text>
      </View>
      <View style={{marginTop: 22}}>
        <Text style={styles.detailsTitle}>Description Name</Text>
        <View style={styles.detailsTextContainer}>
          <Text style={styles.detailsSubText}>
            Engine rebuild on 2012 KIA Cerato Koup, License number GF DJ 65 GP
          </Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <FollwUpButton text="Link" containerStyle={styles.positiveUpButton} />
        <FollwUpButton
          text="Reject"
          textStyle={styles.negativeButtonText}
          containerStyle={styles.negativeUpButton}
        />
      </View>
    </View>
  );
};

export default TaskToTrackDetails;
