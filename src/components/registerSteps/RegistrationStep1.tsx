import React, { useState } from "react";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import {
  nextStep,
  setLoginDetails,
} from "../../redux/slices/registrationSlice";
import Logo from "../Logo";
import { setPage } from "../../redux/slices/navigationSlice";
import { CommonActions, useNavigation } from "@react-navigation/native";

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

const LoginButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
`;

const ErrorText = styled.Text`
  color: red;
  margin-bottom: 15px;
`;

const RegistrationStep1 = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+7");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (value: string) => {
    if (value.slice(0, 12).startsWith("+7")) {
      setPhone(value);
    }
  };

  const handleLogin = () => {
    dispatch(setPage("login"));
    navigator.dispatch(CommonActions.navigate({ name: "login" }));
    console.log("Navigate to Register Screen");
  };

  const handleNext = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailPattern.test(email)) {
      setError("Неверный формат email");
      return;
    }

    if (!passwordPattern.test(password)) {
      setError(
        "Пароль должен быть не менее 8 символов и содержать латинские буквы, цифры и спецсимволы."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    dispatch(
      setLoginDetails({ login, email, phone, password, confirmPassword })
    );
    dispatch(nextStep());
  };

  return (
    <Container>
      <Logo />
      <Input placeholder="Логин" value={login} onChangeText={setLogin} />
      <Input
        placeholder="Почта"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Телефон"
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
      />
      <Input
        placeholder="Пароль"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Input
        placeholder="Подтвердите пароль"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Button onPress={handleNext}>
        <ButtonText>Далее</ButtonText>
      </Button>
      <LoginButton onPress={handleLogin}>
        <LoginButtonText>Войти в систему</LoginButtonText>
      </LoginButton>
    </Container>
  );
};

export default RegistrationStep1;
