import axios from "axios";

const baseURL = "http://localhost:5000"; // base url for all endpoints

const apiConfig = {
  baseURL,
  timeout: 30000000,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": '*',
  },
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
};

const api = axios.create({ ...apiConfig });

class APIServices {
  //example
  async registerUser(data) {
    return api.post(`/api/user`, data);
  }

  async loginUser(data) {
    return api.post(`/api/user/login`, data);
  }

  async getAllUsers(data) {
    return api.get(`/api/user`, data);
  }

  async searchUsers(query) {
    return api.post(`/api/user/?search=${query}`);
  }

  async getAllChats() {
    return api.get(`/api/chat/`);
  }

  async createDM(room_data) {
    return api.post(`/api/chat/`, room_data);
  }

  async createGroup(room_data) {
    return api.post(`/api/chat/group`, room_data);
  }

  async renameChat(room_name) {
    return api.post(`/api/chat/renamechat`, room_name);
  }

  async addUser(data) {
    return api.post(`/api/chat/groupadd`, data);
  }

  async removeUser(room_name) {
    return api.post(`/api/chat/groupremove`, room_name);
  }
}

const instance = new APIServices(); //an instance of axios that can be used globally

export default instance;
