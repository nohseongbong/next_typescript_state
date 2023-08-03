import { observer } from "mobx-react-lite";
import { appStore } from "@/share/store/appStore";
import Link from "next/link";
import TestModel from "@/share/model/testModel";
import { listItemStore } from "@/share/store/listItemStore";
import { runInAction } from "mobx";

const Main = observer(() => {
  console.log(appStore.list, ": appStore");

  const onClickItem = (item: TestModel) => {
    runInAction(() => {
      listItemStore.model = item;
    });
  };
  return (
    <div>
      {appStore.list.map((item, index) => (
        <>
          <div key={index}>{item.text}</div>
          <Link onClick={() => onClickItem(item)} href={`/main/${item.text}`}>
            디테일 이동
          </Link>
        </>
      ))}
      <span>Main page</span>
    </div>
  );
});

export default Main;
