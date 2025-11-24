import { useEffect, useState } from "react";
import userService, { type User } from "../services/userService";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState<string>("");
      const [loading, setLoading] = useState<boolean>(false);
    
      useEffect(() => {
        setLoading(true);
    
        const startTime = Date.now();
        const { request, cancel } = userService.getAll<User>();
        
        request
          .then((res) => setUsers(res.data))
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
          })
          .finally(() => {
            const elaplsedTime = Date.now() - startTime;
            const minimumLoadTime = 500; // milliseconds
    
            setTimeout(() => {
              setLoading(false);
            }, Math.max(0, minimumLoadTime - elaplsedTime));
          });
    
        return () => cancel();
      }, []);

      return { users, error, loading, setUsers, setError };
}

export default useUsers;