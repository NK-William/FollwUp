import {StyleSheet} from 'react-native';
import {flatten} from '../../utils';
import {
  darkText,
  senderChatBackground,
  whiteChatBackground,
} from '../../constants/colors';
import {IChatBubbleProps} from './interface';

const getStyling = (props: IChatBubbleProps) => {
  return StyleSheet.create({
    container: flatten([
      {
        flexWrap: props.fromSender ? 'wrap' : 'wrap-reverse',
        paddingHorizontal: 8,
        paddingVertical: 7,
      },
    ]),
    senderContainer: {
      backgroundColor: senderChatBackground,
      alignSelf: 'flex-end',
      maxWidth: '70%',
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 30,
      borderBottomLeftRadius: 0,
    },
    receiverContainer: {
      backgroundColor: whiteChatBackground,
      alignSelf: 'flex-end',
      maxWidth: '70%',
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 30,
      borderBottomRightRadius: 0,
    },
    text: {
      color: darkText,
    },
  });
};

export default getStyling;
