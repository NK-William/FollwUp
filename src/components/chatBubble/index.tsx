import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {IChatBubbleProps} from './interface';
import getStyling from './style';

const ChatBubble: FC<IChatBubbleProps> = props => {
  const styles = getStyling(props);
  return (
    <View style={styles.container}>
      <View
        style={
          props.fromSender ? styles.senderContainer : styles.receiverContainer
        }>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default ChatBubble;
