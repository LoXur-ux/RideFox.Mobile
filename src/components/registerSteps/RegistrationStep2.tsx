import React, { useState } from "react";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import {
  nextStep,
  previousStep,
  setPersonalDetails,
} from "../../../redux/slices/registrationSlice";
import Logo from "../Logo";

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

const ErrorText = styled.Text`
  color: red;
  margin-bottom: 15px;
`;

const RegistrationStep2 = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");

  const handleBirthdayChange = (value: string) => {
    const formattedValue = value
      .replace(/\D/g, "")
      .slice(0, 8)
      .replace(/(\d{2})(\d{2})(\d{0,4})/, (_, p1, p2, p3) =>
        [p1, p2, p3].filter(Boolean).join(".")
      );

    setBirthday(formattedValue);
  };

  const handleNext = () => {
    const datePattern = /(\d{2})(\d{2})(\d{0,4})/;

    if (!datePattern.test(birthday)) {
      setError("Дата должна быть в формате ДД.ММ.ГГГГ");
      return;
    }

    dispatch(setPersonalDetails({ firstName, secondName, lastName, birthday }));
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(previousStep());
  };

  return (
    <Container>
      <Logo />
      <Input placeholder="Имя" value={firstName} onChangeText={setFirstName} />
      <Input
        placeholder="Фамилия"
        value={secondName}
        onChangeText={setSecondName}
      />
      <Input
        placeholder="Отчество"
        value={lastName}
        onChangeText={setLastName}
      />
      <Input
        placeholder="Дата рождения"
        value={birthday}
        onChangeText={handleBirthdayChange}
        keyboardType="numeric"
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Button onPress={handleNext}>
        <ButtonText>Далее</ButtonText>
      </Button>
      <Button onPress={handleBack}>
        <ButtonText>Назад</ButtonText>
      </Button>
    </Container>
  );
};

export default RegistrationStep2;
