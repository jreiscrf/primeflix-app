import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View``;

export const BlueView = styled.View`
  position: absolute;
  width: ${Dimensions.get("screen").height * 0.5}px;
  height: ${Dimensions.get("screen").height * 0.5}px;
  background-color: #000;
  border-radius: ${Dimensions.get("screen").height * 0.25}px;
  top: -${Dimensions.get("screen").height * 0.25}px;
  align-self: center;
`;

export const ViewImage = styled.View`
  width: ${Dimensions.get("screen").height * 0.1}px;
  height: ${Dimensions.get("screen").height * 0.1}px;
  border-radius: ${Dimensions.get("screen").height * 0.05}px;
  margin-top: ${Dimensions.get("screen").height * (0.25 - 0.0768)}px;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  elevation: 4;
`;

export const Image = styled.Image.attrs({
  source: require("../../../assets/sacola.jpeg"),
  resizeMode: "contain",
})`
  width: ${Dimensions.get("screen").height * 0.078}px;
  height: ${Dimensions.get("screen").height * 0.078}px;
  border-radius: ${Dimensions.get("screen").height * 0.02}px;
`;

export const Prime = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #000;
`;

export const Flix = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #9403fc;
`;
