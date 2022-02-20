import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const ContainerFlat = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
`;

const ListaItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const IconDelete = styled(Feather)`
  font-size: 25px;
  color: #000;
  margin-top: 20px;
  margin-left: 10px;
`;

export const ListStyle = {
  ContainerFlat,
  ListaItemSwipe,
  IconDelete,
};
