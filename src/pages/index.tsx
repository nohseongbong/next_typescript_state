import TestModel from "@/share/model/testModel";
import { appStore } from "@/share/store/appStore";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const Home = observer(() => {
  const onClickButton = () => {
    runInAction(() => {
      appStore.text = "1234567";
      appStore.list.push(new TestModel({ text: `${appStore.text}${Math.random().toString()}` }));
    });
  };

  return (
    <div style={{ flexDirection: "column", display: "flex" }}>
      <span style={{ margin: 10 }}>first page</span>
      <Link href={"/main"}>main 이동</Link>
      <Link href={"/about"}>about 이동</Link>
      <button onClick={onClickButton}>버튼</button>
      {appStore.text}
    </div>
  );
});
export default Home;
