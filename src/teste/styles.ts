import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  max-height: 150px;
  width: 100%;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 30px;
  background-color: #fff;
  color: black;
  margin-top: 70px;
  font-size: 20px;
  padding: 5px;
`;

export const ContainerFlat = styled.View`
  flex: 1;
  width: 100%;
  background-color: #c1c1c1;
  justify-content: center;
`;

export const TextFlat = styled.Text`
  font-size: 18px;
`;

export const IconCheck = styled(Feather)`
  font-size: 20px;
  color: black;
`;

export const ContainerItem = styled.TouchableOpacity`
  padding: 10px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
