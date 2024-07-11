import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import IUserModel from "../types/model/IUserModel";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/userSlice";
import { setPage } from "../redux/slices/navigationSlice";
import { CommonActions, useNavigation } from "@react-navigation/native";

const UserEditForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [user, setUser] = useState<IUserModel>(currentUser);

  const handleChange = (field: keyof IUserModel, value: string) => {
    setUser({ ...user, [field]: value });
    dispatch(setPage("profile"));
  };

  const handleSave = () => {
    dispatch(updateUser(user));
    dispatch(setPage("profile"));
    navigator.dispatch(CommonActions.navigate({ name: "profile" }));
  };

  const handleCancle = () => {
    dispatch(setPage("profile"));
    navigator.dispatch(CommonActions.navigate({ name: "profile" }));
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Header>Изменение данных аккаунта</Header>
        <FormField>
          <Label>Email</Label>
          <Input
            value={user.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />
        </FormField>
        <FormField>
          <Label>Телефон</Label>
          <Input
            value={user.phone}
            onChangeText={(text) => handleChange("phone", text)}
            keyboardType="phone-pad"
          />
        </FormField>
        <FormField>
          <Label>Имя</Label>
          <Input
            value={user.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
          />
        </FormField>
        <FormField>
          <Label>Фамилия</Label>
          <Input
            value={user.secondName}
            onChangeText={(text) => handleChange("secondName", text)}
          />
        </FormField>
        <FormField>
          <Label>Отчество</Label>
          <Input
            value={user.lastName || ""}
            onChangeText={(text) => handleChange("lastName", text)}
          />
        </FormField>
        <FormField>
          <Label>Дата рождения</Label>
          <Input
            value={formatDate(user.birthday)}
            onChangeText={(text) => handleChange("birthday", text)}
          />
        </FormField>
        <SaveButton onPress={handleSave}>
          <ButtonText>Сохранить изменения</ButtonText>
        </SaveButton>
        <CancelButton onPress={handleCancle}>
          <ButtonText>Отмнить</ButtonText>
        </CancelButton>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  width: 100%;
`;

const Header = styled.Text`
  margin-bottom: 16px;
  font-size: 28px;
  color: black;
  font-weight: bold;
`;

const FormField = styled.View`
  margin-bottom: 15px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #000000;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
`;

const SaveButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 15px 30px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 16px;
`;

const CancelButton = styled.TouchableOpacity`
  background-color: white;
  color: black;
  padding: 15px 30px;
  border-radius: 5px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export default UserEditForm;
