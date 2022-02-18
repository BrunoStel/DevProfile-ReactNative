import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  padding-top: 25px;
  max-height: 300px;
  width: 100%;
  background-color: #424e5e;
  align-items: center;
  justify-content: center;
  border-style: dashed;
  border-bottom-width: 1.5px;
  border-bottom-color: #e9e9e9;
`;

const Title = styled.Text`
  margin-bottom: 10px;
  color: black;
  font-size: 30px;
  padding: 5px;
  font-weight: bold;
`;

const Input = styled.TextInput`
  margin-bottom: 10px;
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  color: black;
  font-size: 20px;
  padding: 10px;
`;

const TextFlat = styled.Text`
  font-size: 18px;
  margin-right: 30px;
`;

const IconCheck = styled(Feather)`
  font-size: 20px;
  margin-left: 345px;
  color: #000;
  margin-top: 20px;
  position: absolute;
`;

const ContainerItem = styled.View`
  height: 50px;
  padding-top: 10px;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Deadline = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #2b0b16;
  margin-left: 20px;
`;

const TouchableHighlight = styled.TouchableHighlight`
  background-color: #7a959e;
  border-style: dashed;
  border-bottom-width: 1.5px;
  border-bottom-color: #e9e9e9;
`;

export const ListPageStyle = {
  Container,
  Input,
  TextFlat,
  IconCheck,
  ContainerItem,
  Deadline,
  TouchableHighlight,
  Title,
};
