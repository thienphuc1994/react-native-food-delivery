import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './../../assets/fonts/icomoon/selection.json';
const IcomoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

function Icon(props) {
  return <IcomoonIcon {...props} />;
}

export default Icon;
