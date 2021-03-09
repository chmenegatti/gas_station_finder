import styled from "styled-components/native";

export const FilterContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const FilterHeader = styled.View`
  width: 100%;
  height: 62px;
  background-color: #eee;
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const FilterTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3c3f40;
  margin-left: 30px;
`;

export const SearchSection = styled.View`
  width: 85%;
  border-bottom-width: 2px;
  border-bottom-color: #ddd;
`;

export const SearchText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #3c3f40;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const SearchBox = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-style: solid;
  border-radius: 5px;
  background-color: #eee;
  height: 50px;
  padding: 0 16px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  margin-left: 8px;
  font-size: 18px;
`;
