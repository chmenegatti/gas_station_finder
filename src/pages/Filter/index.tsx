import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  FilterContainer,
  FilterHeader,
  FilterTitle,
  SearchBox,
  SearchInput,
  SearchSection,
  SearchText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Filter: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <FilterContainer>
      <FilterHeader>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>
        <FilterTitle>Filtros</FilterTitle>
      </FilterHeader>
      <SearchSection>
        <SearchText>Pesquise por posto:</SearchText>
        <SearchBox>
          <Ionicons name="search-outline" size={24} color="#65696b" />
          <SearchInput placeholder="Pesquisar" />
        </SearchBox>
      </SearchSection>
    </FilterContainer>
  );
};

export default Filter;
