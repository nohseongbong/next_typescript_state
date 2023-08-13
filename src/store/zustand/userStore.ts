import { User } from "@/pages/api/userList";
import { createZustandStore } from "./middleware";

type UserType = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: string;
  registeredAt: Date;
};

type UserStore = {
  users: UserType[];
  actions: {
    setUsersData: (data: User[]) => void;
  };
};

export const useUserStore = createZustandStore<UserStore>((set) => ({
  users: [],
  actions: {
    setUsersData: (data) => {
      set(() => ({
        users: data.map((user) => {
          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(user.birthdate));
          const formatUser = {
            ...user,
            birthdate: formattedDate,
          };
          console.log(formatUser, ": formatUser");
          return formatUser;
        }),
      }));
    },
  },
}));
