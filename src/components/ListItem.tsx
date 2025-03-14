import {StyleSheet, Text, View} from 'react-native';
import Avatar from './Avatar';
import {useTheme} from '@react-navigation/native';
import ChevronRight from '../assets/icons/chevron-right.svg';
import PremimunIcon from '../assets/icons/premimun.svg';
import HeartfillIcon from '../assets/icons/heart-fill.svg';

type ListItemProp = {
  title: string;
  subtitles?: string[];
  profile_pic?: string;
  isPreamimum?: boolean;
  isFriend?: boolean;
  extraSubtitle?: React.JSX.Element;
  avatarShape?: 'rounded' | 'square';
  rightSectionExtraItem?: React.JSX.Element;
  subtitleExtraSection?: React.JSX.Element;
  profile_icon?: React.JSX.Element;
};

function ListItem({
  title,
  subtitles = [],
  profile_pic = '',
  isPreamimum = false,
  isFriend = false,
  avatarShape = 'rounded',
  extraSubtitle = <View />,
  rightSectionExtraItem,
  subtitleExtraSection = <></>,
  profile_icon = <></>,
}: ListItemProp): React.JSX.Element {
  const {colors} = useTheme();

  return (
    <View style={styles.listItem}>
      <View style={styles.avatarContainer}>
        {profile_pic ? (
          <Avatar imageUrl={profile_pic} avatarShape={avatarShape} />
        ) : (
          profile_icon
        )}
        {isFriend ? <HeartfillIcon style={styles.heartIconStyle} /> : <></>}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
          {isPreamimum ? <PremimunIcon /> : <></>}
        </View>
        <View style={styles.subtitleContainer}>
          {subtitles && subtitles.length ? (
            subtitles.map((sub, index) => (
              <View
                key={sub}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {index > 0 ? (
                  <View style={[styles.dot, {backgroundColor: colors.muted}]} />
                ) : (
                  <></>
                )}
                <Text style={[styles.subtitle, {color: colors.muted}]}>
                  {sub}
                </Text>
              </View>
            ))
          ) : (
            <></>
          )}
          {extraSubtitle}
        </View>
        {subtitleExtraSection}
      </View>
      <View style={styles.rightSection}>
        {rightSectionExtraItem && rightSectionExtraItem}
        <ChevronRight color={colors.text} width={18} />
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(50, 50, 52, 1)',
  },
  avatarContainer: {
    alignSelf: 'flex-start',
  },
  textContainer: {
    marginLeft: 15,
    display: 'flex',
    flexShrink: 1,
    justifyContent: 'space-around',
    gap: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  subtitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 50,
    marginHorizontal: 6,
  },
  heartIconStyle: {position: 'absolute', right: -5, top: -5},
});
