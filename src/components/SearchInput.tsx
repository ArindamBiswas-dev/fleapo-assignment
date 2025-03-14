import {useTheme} from '@react-navigation/native';
import {StyleSheet, TextInput, View} from 'react-native';
import SearchIcon from '../assets/icons/Search.svg';

function SearchInput(): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: colors.backgroundLight},
      ]}>
      <View style={styles.labelContainer}>
        <SearchIcon />
      </View>
      <TextInput
        style={[styles.input, {color: colors.muted}]}
        textContentType="name"
        placeholder={'Search people'}
        placeholderTextColor="#8E8E93"
        cursorColor={'#007AFF'}
      />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
    backgroundColor: '#F2F2F7',
    borderRadius: 24,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    gap: 5,
    borderWidth: 2,
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  label: {},
  input: {
    height: 48,
    fontSize: 14,
    fontFamily: 'AvenirNextLTPro-Regular',
    flex: 1,
  },
  required: {
    color: 'red',
    marginBottom: 1,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginTop: 4,
    marginLeft: 1,
  },
});
