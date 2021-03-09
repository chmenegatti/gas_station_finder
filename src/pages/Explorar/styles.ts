import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const ExploreContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 62px;
  background-color: #eee;
  justify-content: center;
  margin-top: 32px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3c3f40;
  margin-left: 30px;
`;

export const MapContainer = styled.View`
  flex: 1;
  position: relative;
`;

const widthBox = Math.floor(Dimensions.get("screen").width - 30);
const leftPosition = Math.floor(
  (Dimensions.get("screen").width - widthBox) / 2
);
const topPosition = Math.floor(Dimensions.get("screen").height / 32);
const bottonPosition = Math.floor(Dimensions.get("screen").height);
const heightBox = Math.floor(Dimensions.get("screen").height / 16);

export const SearchContainer = styled.View`
  width: ${widthBox}px;
  height: ${heightBox}px;
  background: #ececec;
  border-color: #ddd;
  border-style: solid;
  border-width: 1px;
  position: absolute;
  top: ${topPosition}px;
  left: ${leftPosition}px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 12px;
`;

export const SearchBox = styled.TextInput`
  width: 82%;
  font-size: 16px;
`;

export const ThurstButton = styled.TouchableOpacity`
  width: ${widthBox}px;
  height: ${heightBox}px;
  background: #ca5501;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${bottonPosition - 800}px;
  left: ${leftPosition}px;
  border-radius: 8px;
  flex-direction: row;
`;

export const ThurstButtonText = styled.Text`
  font-size: 16px;
  color: #f7f7f7;
  font-weight: bold;
  margin-left: 16px;
`;
