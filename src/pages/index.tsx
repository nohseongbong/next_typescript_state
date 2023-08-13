import { runInAction } from "mobx";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { getUsers } from "@/apis/user/user";
import { appStore } from "@/store/mobx/appStore";
import TestModel from "@/model/testModel";

const Home = observer(() => {
  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const onClickButton = () => {
    runInAction(() => {
      appStore.list.push(new TestModel({ text: `${appStore.text}${Math.random().toString()}` }));
    });
  };

  const { data, isLoading, mutate, mutateAsync } = useMutation(getUsers, {
    onMutate: () => {
      console.log("onMitate");
    },
    onSettled: () => {
      console.log("onSettled");
    },
    onSuccess() {
      console.log(data, "onSuccess : data");
      console.log(isLoading, "isLoading");
      console.log(mutateAsync, "mutateAsync");
    },
    onError() {
      console.log("onError");
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div style={{ flexDirection: "column", display: "flex" }}>
      <span style={{ margin: 10 }}>first page</span>
      <Link href={"/main"}>main 이동</Link>
      <Link href={"/about"}>about 이동</Link>
      <Link href={"/counter"}>counter 이동</Link>
      <button onClick={onClickButton}>버튼</button>
      {query.data?.users.map((item) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", margin: "10px 0" }} key={item.userId}>
            <span>{item.username}</span>
            <span>{item.email}</span>
            <span>{item.birthdate.toString()}</span>
          </div>
        );
      })}
    </div>
  );
});
export default Home;
