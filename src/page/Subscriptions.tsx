import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import subscriptions from "../types/data/Subsciprions";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/slices/navigationSlice";
import { changeSubscribe } from "../redux/slices/subscribeSlice";

const SubscribeSelection: React.FC = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [selectedSubscription, setSelectedSubscription] = useState("2");
  const [pendingSubscription, setPendingSubscription] = useState<string | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelectSubscription = (id: string) => {
    setPendingSubscription(id);
    setIsModalVisible(true);
  };

  const handleConfirmSubscription = () => {
    setSelectedSubscription(pendingSubscription);
    setPendingSubscription(null);
    setIsModalVisible(false);
    dispatch(changeSubscribe(subscriptions[pendingSubscription]));
  };

  const handleCancelSubscription = () => {
    setPendingSubscription(null);
    setIsModalVisible(false);
  };

  const onClose = () => {
    dispatch(setPage("profile"));
    navigator.dispatch(CommonActions.navigate({ name: "profile" }));
  };
  return (
    <View>
      <Header>Выберете подходящюю подписку</Header>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          {subscriptions.map((subscription) => (
            <SubscriptionCard key={subscription.id}>
              <Checkbox
                onPress={() => handleSelectSubscription(subscription.id)}
                isChecked={selectedSubscription === subscription.id}
              >
                {selectedSubscription === subscription.id && <Checkmark />}
              </Checkbox>
              <SubscriptionInfo>
                <Title>{subscription.title}</Title>
                <Description>{subscription.description}</Description>
                <Description>
                  Стартовая цена: {subscription.startPrice} руб.
                </Description>
                <Description>
                  Цена за минуту: {subscription.priceMinute} руб.
                </Description>
              </SubscriptionInfo>
            </SubscriptionCard>
          ))}
        </Container>
        <Modal isVisible={isModalVisible}>
          <ModalContainer>
            <ModalText>Вы уверены, что хотите выбрать эту подписку?</ModalText>
            <ModalButton onPress={handleConfirmSubscription}>
              <ModalButtonText>Подтвердить</ModalButtonText>
            </ModalButton>
            <ModalButton onPress={handleCancelSubscription}>
              <ModalButtonText>Отмена</ModalButtonText>
            </ModalButton>
          </ModalContainer>
        </Modal>
      </ScrollView>
    </View>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

const Header = styled.Text`
  margin: 16px;
  font-size: 28px;
  color: black;
  font-weight: bold;
`;

const SubscriptionCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

const Checkbox = styled.TouchableOpacity<{ isChecked: boolean }>`
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-color: ${(props) => (props.isChecked ? "#ffa42d" : "#e6e6e6")};
  background-color: ${(props) => (props.isChecked ? "#ffa42d" : "#ffffff")};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const Checkmark = styled.View`
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 2px;
`;

const SubscriptionInfo = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #000000;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #000000;
  margin-top: 5px;
`;

const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ModalButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

const ModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export default SubscribeSelection;
