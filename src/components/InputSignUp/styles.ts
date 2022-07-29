import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-color: #9403fc;
  padding-bottom: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholder: "",
  keyboardtype: "email-adress",
})`
  flex: 1;
  padding: 8px;
`;

export const Label = styled.Text`
  color: #c1c1c1;
`;

export const Forget = styled.TouchableOpacity``;

export const TextForget = styled.Text`
  color: #9403fc;
  font-weight: 700;
`;
