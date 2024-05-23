import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import NotificationModal from "../components/NotificationModal";
import INotifications from "../../types/model/INotificationModel";

const notifications = [
  {
    id: "1",
    title: "Notification 1",
    shortContent: "This is the short content of the first notification.",
    fullContent: "This is the full content of the first notification.",
    date: "2024-05-20T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Notification 2",
    shortContent: "This is the short content of the second notification.",
    fullContent: "This is the full content of the second notification.",
    date: "2024-05-21T11:00:00.000Z",
  },
  {
    id: "3",
    title: "Notification 3",
    shortContent: "This is the short content of the third notification.",
    fullContent: "This is the full content of the third notification.",
    date: "2024-05-22T12:00:00.000Z",
  },
];

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
      <FlatList
        data={notifications}
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
  padding: 16px;
  background-color: #f9f9f9;
`;

const Card = styled.TouchableOpacity`
  background-color: #ffa42d;
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
