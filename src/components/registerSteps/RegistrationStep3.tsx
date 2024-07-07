import React, { useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import {
  previousStep,
  setVerificationCode,
} from "../../redux/slices/registrationSlice";
import { setUser } from "../../redux/slices/userSlice";
import Logo from "../Logo";
import { api } from "../../service/TempAPI";
import { setPage } from "../../redux/slices/navigationSlice";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-top: 50px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border-color: #2e2e2e;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 15px;
  margin-bottom: 15px;
`;

const Button = styled.TouchableOpacity`
  background-color: #ffa42d;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const RegistrationStep3 = () => {
  const dispatch = useDispatch();
  const [verificationCode, setCode] = useState("");
  const registrationState = useSelector(
    (state: RootState) => state.registration
  );

  const handleComplete = async () => {
    dispatch(setVerificationCode(verificationCode));
    try {
      await api.register({
        login: registrationState.login,
        email: registrationState.email,
        phone: registrationState.phone,
        password: registrationState.password,
        firstName: registrationState.firstName,
        secondName: registrationState.secondName,
        lastName: registrationState.lastName,
        birthday: registrationState.birthday,
        verificationCode: verificationCode,
      });
      dispatch(
        setUser({
          id: "01a8fc1c-81ff-4337-82af-c4bc64121851",
          login: registrationState.login,
          email: registrationState.email,
          phone: registrationState.phone,
          firstName: registrationState.firstName,
          secondName: registrationState.secondName,
          lastName: registrationState.lastName,
          birthday: registrationState.birthday,
        })
      );
      dispatch(setPage("qr"));
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  const handleBack = () => {
    dispatch(previousStep());
  };

  return (
    <Container>
      <Logo />
      <Input
        placeholder="Код подтверждения"
        value={verificationCode}
        onChangeText={setCode}
      />
      <Button onPress={handleComplete}>
        <ButtonText>Завершить</ButtonText>
      </Button>
      <Button onPress={handleBack}>
        <ButtonText>Назад</ButtonText>
      </Button>
    </Container>
  );
};

export default RegistrationStep3;
