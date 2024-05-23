import React, { useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { setUser } from "../../redux/slices/userSlice";
import { setPage } from "../../redux/slices/navigationSlice";
import { CommonActions, useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";

const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  const handleLogin = () => {
    console.log(`Login: ${login}; Password: ${password}`);
    dispatch(
      setUser({
        id: "87FDBC86-2F1B-4A08-9B76-FF5B204CDC2B",
        login: login,
        email: "test@test.ru",
        phone: "88005553535",
        firstName: "Иван",
        secondName: "Иванович",
        lastName: "Иванов",
        birthday: new Date(Date.UTC(2001, 12, 13)).toISOString(),
      })
    ); //(loginUser({ username: login, password: password }));
    dispatch(setPage("qr"));
  };

  const handleRegister = () => {
    dispatch(setPage("registration"));
    navigator.dispatch(CommonActions.navigate({ name: "registration" }));
    console.log("Navigate to Register Screen");
  };

  return (
    <Container>
      <Logo />
      <Title>Авторизация</Title>
      {error && <ErrorText>{error}</ErrorText>}
      <Input
        placeholder="Логин/почта/телефон"
        value={login}
        onChangeText={setLogin}
      />
      <Input
        placeholder="Пароль"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin} disabled={loading}>
        <ButtonText>{loading ? "Загрузка..." : "Войти"}</ButtonText>
      </Button>
      <RegisterButton onPress={handleRegister}>
        <RegisterButtonText>Регистрация</RegisterButtonText>
      </RegisterButton>
    </Container>
  );
};

//#region CSS
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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

const RegisterButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const RegisterButtonText = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
`;

const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;
//#endregion

export default Login;
