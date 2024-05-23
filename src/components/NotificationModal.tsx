import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import INotifications from "../../types/model/INotificationModel";

interface INotificationModal {
  visible: boolean;
  onClose: () => void;
  notification: INotifications;
}

const NotificationModal: React.FC<INotificationModal> = (props) => {
  if (!props.notification) {
    return null;
  }

  const formattedDate = format(
    new Date(props.notification.date),
    "dd.MM.yyyy",
    {
      locale: ru,
    }
  );
  const formattedTime = format(new Date(props.notification.date), "HH:mm", {
    locale: ru,
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <Container>
        <ModalView>
          <Title>{props.notification.title}</Title>
          <Content>{props.notification.fullContent}</Content>
          <DateText>
            {formattedDate} в {formattedTime}
          </DateText>
          <CloseButton onPress={props.onClose}>
            <CloseButtonText>Закрыть</CloseButtonText>
          </CloseButton>
        </ModalView>
      </Container>
    </Modal>
  );
};

export default NotificationModal;

//#region CSS
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  elevation: 5;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Content = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const DateText = styled.Text`
  font-size: 14px;
  margin-bottom: 20px;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 10px 20px;
  border-radius: 5px;
`;

const CloseButtonText = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
  font-weight: bold;
`;
//#endregion
