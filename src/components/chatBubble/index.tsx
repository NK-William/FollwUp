import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {IChatBubbleProps} from './interface';
import getStyling from './style';

const ChatBubble: FC<IChatBubbleProps> = props => {
  const styles = getStyling();
  return (
    <View style={styles.container}>
      <View style={styles.senderContainer}>
        <Text style={styles.text}>
          Good day, we will be starting with the diagnostics today to find out
          the cost of the issue, this process should take us long.
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;
