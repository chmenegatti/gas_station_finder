import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ExploreContainer,
  HeaderContainer,
  HeaderTitle,
  MapContainer,
  SearchBox,
  SearchContainer,
} from "./styles";

const Explorar: React.FC = () => {
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
          <TouchableOpacity>
            <Ionicons name="filter" size={24} color="#888" />
          </TouchableOpacity>
        </SearchContainer>
      </MapContainer>
    </ExploreContainer>
  );
};

export default Explorar;
