export const api = {
  register: async (data: any) => {
    console.log("Регистрация данных:", data);
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Заглушка для имитации задержки API
  },
  login: async (username: string, password: string) => {
    console.log("Логин:", { username, password });
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          id: "1",
          login: username,
          email: "example@example.com",
          phone: "1234567890",
          firstName: "Имя",
          secondName: "Отчество",
          lastName: "Фамилия",
          birthday: new Date("1990-01-01"),
        });
      }, 1000)
    ); // Заглушка для имитации задержки API
  },
};
