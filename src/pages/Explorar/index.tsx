import React from "react";
import { TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ExploreContainer,
  HeaderContainer,
  HeaderTitle,
  MapContainer,
  SearchBox,
  SearchContainer,
  ThurstButton,
  ThurstButtonText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Explorar: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <ExploreContainer>
      <HeaderContainer>
        <HeaderTitle>Explorar </HeaderTitle>
      </HeaderContainer>
      <MapContainer>
        <MapView
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
        />
        <SearchContainer>
          <MaterialCommunityIcons name="magnify" size={28} color="#888" />
          <SearchBox placeholder="Encontre um posto e Salve-se" />
          <TouchableOpacity onPress={() => navigate("Filter")}>
            <Ionicons name="filter" size={24} color="#888" />
          </TouchableOpacity>
        </SearchContainer>
        <ThurstButton>
          <MaterialCommunityIcons
            name="gas-station"
            size={24}
            color="#f7f7f7"
          />
          <ThurstButtonText>Estou com sede!</ThurstButtonText>
        </ThurstButton>
      </MapContainer>
    </ExploreContainer>
  );
};

export default Explorar;
