import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {

    getAllUsers() {
        const controller = new AbortController();
        const request =apiClient
              .get<User[]>("users", {
                signal: controller.signal,
              })
        return {request, cancel: () => controller.abort()};
    }

    addUser(user: User) {
        return apiClient.post<User>("users", user);
    }

    updateUser(user: User) {
        return apiClient.put<User>(`users/${user.id}`, user);
    }

    deleteUser(id: number) {
        return apiClient.delete<User>(`users/${id}`);
    }
    
}

export default new UserService();