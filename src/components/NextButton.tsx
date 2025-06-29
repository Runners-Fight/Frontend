import {Pressable, View, Text} from 'react-native';

interface IProps {
  content: string;
  backgroundColor: string;
  callbackFn: () => void;
  disabled?: boolean;
}
const NextButton = ({
  content,
  backgroundColor,
  callbackFn,
  disabled = false,
}: IProps) => {
  return (
    <View className="w-[320px] h-[52px]">
      <Pressable
        onPress={callbackFn}
        disabled={disabled}
        className={`flex-1 rounded-[12px] ${backgroundColor} ${
          disabled ? 'bg-grey-20' : 'active:opacity-70'
        } items-center justify-center`}>
        <Text
          className={`text-white text-label1-medium ${
            disabled ? 'opacity-70' : ''
          }`}>
          {content}
        </Text>
      </Pressable>
    </View>
  );
};

export default NextButton;
