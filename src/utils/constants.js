const SERVER_IP = "192.168.1.149:8000";

export const ENV = {
  SERVER_IP: SERVER_IP,
  BASE_PATH: `http://${SERVER_IP}`,
  API_URL: `http://${SERVER_IP}/api`,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/register",
      LOGIN: "auth/login",
    },
    ME: "user/me",
    WALLET: {
      RECHAGE: "wallet/recharge",
      SEND_MONEY: "wallet/send_money",
    },
    HISTORY: "history",
    USERS: "users/get_all",
  },
  JWT: {
    ACCESS: "access",
  },
  STRIPE_TOKEN:
    "pk_test_51OuzpmLVLEGtnzdWYrBjaIT1Au1FKE6lqOlL6fXW8iRZIsaXClBE7XNxrKGM1eFcOwXbXXBXhNSIFxSo6TTzankE00ChPVxpZD",
};
