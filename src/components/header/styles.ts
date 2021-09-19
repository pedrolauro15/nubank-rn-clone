import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Constatns from "expo-constants";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { mediaquery } from "../../styles/mediaquery";

const PROFILE_BUTTON_SIZE = 48;

export const Container = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${Constatns.statusBarHeight + 16}px 24px 24px 24px;
`;

export const ActionMenuContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileButton = styled(RectButton)`
  width: ${PROFILE_BUTTON_SIZE}px;
  height: ${PROFILE_BUTTON_SIZE}px;
  border-radius: ${PROFILE_BUTTON_SIZE / 2}px;
  background-color: ${(props) => props.theme.colors.primary100};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${(props) => props.theme.colors.white};
  font-size: ${mediaquery(24)}px;
`;

export const RightSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: 32px;
`;

export const SlIcon = styled(SimpleLineIcons)`
  color: ${(props) => props.theme.colors.white};
  font-size: ${mediaquery(20)}px;
`;

export const Username = styled.Text`
  margin-top: 32px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${mediaquery(24)}px;
`;