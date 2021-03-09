import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import Slider from "@react-native-community/slider";
import {
  FilterContainer,
  FilterHeader,
  FilterTitle,
  FuelSection,
  FuelText,
  OverSlideSection,
  SearchBox,
  SearchInput,
  SearchSection,
  SearchText,
  TextOverSlide,
  DistanceSection,
  FilterButton,
  FilterButtonText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Filter: React.FC = () => {
  const { navigate } = useNavigation();

  const [gasolina, setGasolina] = useState(false);
  const [alcool, setAlcool] = useState(false);
  const [diesel, setDiesel] = useState(false);

  const [lastDrop, setLastDrop] = useState(false);
  const [twoLastDrop, setTwoLastDrop] = useState(false);
  const [full, setFull] = useState(false);

  const [distance, setDistance] = useState(1);

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
      <FuelSection>
        <FuelText>Combustível</FuelText>
        <CheckBox
          title="Gasolina"
          textStyle={{ color: `${gasolina ? "#444" : "#ccc"}`, fontSize: 18 }}
          checkedColor="#ca5501"
          checked={gasolina}
          onPress={() => setGasolina(!gasolina)}
          checkedIcon="check-square"
          containerStyle={{
            backgroundColor: "#ededed",
            marginLeft: -10,
            marginBottom: -10,
          }}
        />
        <CheckBox
          title="Álcool"
          textStyle={{ color: `${alcool ? "#444" : "#ccc"}`, fontSize: 18 }}
          checkedColor="#ca5501"
          checked={alcool}
          onPress={() => setAlcool(!alcool)}
          checkedIcon="check-square"
          containerStyle={{
            backgroundColor: "#ededed",
            marginLeft: -10,
            marginBottom: -10,
          }}
        />
        <CheckBox
          title="Diesel"
          textStyle={{ color: `${diesel ? "#444" : "#ccc"}`, fontSize: 18 }}
          checkedColor="#ca5501"
          checked={diesel}
          onPress={() => setDiesel(!diesel)}
          checkedIcon="check-square"
          containerStyle={{
            backgroundColor: "#ededed",
            marginLeft: -10,
          }}
        />
      </FuelSection>
      <FuelSection>
        <FuelText>Nível do Reservatório</FuelText>
        <CheckBox
          title="Última gota"
          textStyle={{ color: `${lastDrop ? "#444" : "#ccc"}`, fontSize: 18 }}
          checkedColor="#ca5501"
          checked={lastDrop}
          onPress={() => setLastDrop(!lastDrop)}
          checkedIcon="check-square"
          containerStyle={{
            backgroundColor: "#ededed",
            marginLeft: -10,
            marginBottom: -10,
          }}
        />
        <CheckBox
          title="Duas últimas gotas"
          textStyle={{
            color: `${twoLastDrop ? "#444" : "#ccc"}`,
            fontSize: 18,
          }}
          checkedColor="#ca5501"
          checked={twoLastDrop}
          onPress={() => setTwoLastDrop(!twoLastDrop)}
          checkedIcon="check-square"
          containerStyle={{
            backgroundColor: "#ededed",
            marginLeft: -10,
            marginBottom: -10,
          }}
        />
        <CheckBox
          title="Reservatório cheio"
          textStyle={{ color: `${full ? "#444" : "#ccc"}`, fontSize: 18 }}
          checkedColor="#ca5501"
          checked={full}
          onPress={() => setFull(!full)}
          checkedIcon="check-square"
          containerStyle={{ backgroundColor: "#ededed", marginLeft: -10 }}
        />
      </FuelSection>
      <DistanceSection>
        <FuelText>Distância da minha localização</FuelText>
        <OverSlideSection>
          <TextOverSlide>01Km</TextOverSlide>
          <TextOverSlide>10Km</TextOverSlide>
        </OverSlideSection>
        <Slider
          style={{
            width: "109%",
            height: 40,
            marginLeft: -15,
            marginRight: -10,
            marginBottom: 12,
          }}
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="rgba(202, 85, 1, 0.596)"
          maximumTrackTintColor="#000000"
          thumbTintColor="#ca5501"
          value={distance}
          onValueChange={(value) => setDistance(value)}
        />
      </DistanceSection>
      <FilterButton>
        <FilterButtonText>Ver Resultados</FilterButtonText>
      </FilterButton>
    </FilterContainer>
  );
};

export default Filter;
