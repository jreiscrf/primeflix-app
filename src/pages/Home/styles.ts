import styled from "styled-components/native";

export const Container = styled.View``;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: "#9403fc",
})``;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
})``;

export const Loading = styled.Text`
  color: green;
  font-size: 20px;
  align-self: center;
`;

export const TextLoading = styled.Text`
  color: green;
  font-size: 20px;
  align-self: center;
`;

export const ListMovie = styled.View`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: #9403fc;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #9403fc;
  align-self: center;
  font-weight: bold;
`;

export const Touchable = styled.TouchableOpacity``;

export const ViewImage = styled.View`
  background-color: #9403fc;
  padding: 5px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 40px;
  align-self: center;
`;
