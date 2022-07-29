import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #fff;
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: "#000",
})``;

export const ViewText = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const ViewInputEmail = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ViewInputSenha = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #9403fc;
`;

export const TextTwo = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: #8f6fa6;
`;

export const ViewButton = styled.View`
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const ViewSignUp = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextQuestSignUp = styled.Text`
  align-self: center;
  color: #8f6fa6;
  font-size: 18px;
`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const TextSignUp = styled.Text`
  align-self: center;
  font-weight: bold;
  color: #9403fc;
  margin-left: 5px;
  font-size: 18px;
`;
