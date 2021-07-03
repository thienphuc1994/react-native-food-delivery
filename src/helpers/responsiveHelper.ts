// 5 => 375
// ?? => my screen width

import {Dimensions} from 'react-native';
import {BASE_HEIGHT, BASE_WIDTH} from './const';

const {width, height} = Dimensions.get('window');

export const getBaseWidth = (spaceWidth: number) =>
  (width * spaceWidth) / BASE_WIDTH;

export const getBaseHeight = (spaceHeight: number) =>
  (height * spaceHeight) / BASE_HEIGHT;
