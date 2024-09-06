import styled from 'styled-components/native';

import { isAndroid } from '../utils/isAndroid';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fafafa;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;
