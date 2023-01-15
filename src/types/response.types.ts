export type LoginResponse = {
  data: {
    token: string;
    userId: string;
    name: string;
    email: string;
    password: string;
  };
};
