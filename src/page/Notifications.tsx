import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import NotificationModal from "../components/NotificationModal";
import INotifications from "../types/model/INotificationModel";
import notificationsData from "../types/data/Notifications";

interface INotificationCard {
  notification: INotifications;
  onPress: () => void;
}

const NotificationCard: React.FC<INotificationCard> = (props) => {
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
    <Card onPress={props.onPress}>
      <Title>{props.notification.title}</Title>
      <Text>{props.notification.shortContent}</Text>
      <Text>
        {formattedDate} в {formattedTime}
      </Text>
    </Card>
  );
};

const Notifications: React.FC = () => {
  const [selectedNotification, setSelectedNotification] =
    useState<INotifications>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const handlePress = (notification: INotifications) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedNotification(null);
  };

  return (
    <Container>
      <Header>Ваши уведомления</Header>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            notification={item}
            onPress={() => handlePress(item)}
          />
        )}
      />
      <NotificationModal
        visible={modalVisible}
        onClose={handleClose}
        notification={selectedNotification}
      />
    </Container>
  );
};

export default Notifications;

//#region CSS
const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;
const Header = styled.Text`
  margin: 16px;
  font-size: 28px;
  color: black;
  font-weight: bold;
`;
const Card = styled.TouchableOpacity`
  background-color: #ffa42d;
  margin-left: 12px;
  margin-right: 12px;
  padding: 16px;
  margin-vertical: 8px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 1;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

//#endregion
