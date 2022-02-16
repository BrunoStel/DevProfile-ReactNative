import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  max-height: 150px;
  width: 100%;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput`
  width: 80%;
  background-color: #fff;
  color: black;
  margin-top: 70px;
  font-size: 20px;
  padding: 5px;
`;

const TextFlat = styled.Text`
  font-size: 18px;
`;

const IconCheck = styled(Feather)`
  font-size: 20px;
  color: #000;
`;

const ContainerItem = styled.TouchableOpacity`
  height: 50px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListPageStyle = {
  Container,
  Input,
  TextFlat,
  IconCheck,
  ContainerItem,
};
