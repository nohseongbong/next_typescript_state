import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@/apis/user/user";
import { useUserStore } from "@/store/zustand/userStore";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const { data } = useQuery({ queryKey: ["users"], queryFn: getUsers, refetchOnWindowFocus: false });
  const { actions, users } = useUserStore((store) => store);

  useEffect(() => {
    if (data) actions.setUsersData(data.users);
  }, [data]);
  return (
    <div>
      {users.map((item) => (
        <div key={item.userId} style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ width: "100px", height: "100px" }} src={item.avatar} />
          <span>이름 : {item.username}</span>
          <span>이메일 : {item.email}</span>
          <span>생일 : {item.birthdate}</span>
          <Link href={`/main/${item.username}`}>디테일 이동</Link>
        </div>
      ))}
      <span>Main page</span>
    </div>
  );
};

export default MainContainer;
