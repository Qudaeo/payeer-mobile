import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MessagesIcon from '../assets/svg/header/messages.svg';
import HeadsetIcon from '../assets/svg/header/headset.svg';
import SettingsIcon from '../assets/svg/header/settings.svg';
import commonStyles from '../base/commonStyles';
import {colors} from '../base/colors';
import {defaultFont} from '../base/consts';
import PayeerTouchableOpacity from './PayeerTouchableOpacity';

const HeaderButtons = () => {
  const buttons = [
    {
      type: 'messages',
      Icon: () => <MessagesIcon />,
      badge: 2,
    },
    {
      type: 'support',
      Icon: () => <HeadsetIcon />,
    },
    {
      type: 'settings',
      Icon: () => <SettingsIcon />,
    },
  ];

  return (
    <View style={styles.container}>
      {buttons.map(button => (
        <PayeerTouchableOpacity
          key={button.type}
          onPress={() => {
            console.log(button.type);
          }}>
          <>
            <button.Icon />
            {button.badge && (
              <View style={[commonStyles.container, styles.badge]}>
                <Text style={styles.badgeText}>{button.badge}</Text>
              </View>
            )}
          </>
        </PayeerTouchableOpacity>
      ))}
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  badge: {
    position: 'absolute',
    right: -3,
    top: -7,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue_03A9F4,
  },
  badgeText: {
    fontFamily: defaultFont.bold,
    color: colors.white_FFFFFF,
    fontSize: 12,
    lineHeight: 12,
    textAlignVertical: 'center',
    marginTop: 2,
  },
});
