import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  gap: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  background: rgba(48, 215, 135, 0.05);
  border-radius: 4px;
`;

export const Content = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const Separator = styled.View`
  width: 100%;
  /* height: 1px; */
  /* background: rgba(204, 204, 204, 0.3); */
  margin: 6px 0;
`;
