import { observer } from "mobx-react-lite";
import { appStore } from "@/share/store/mobx/appStore";
import Link from "next/link";
import TestModel from "@/share/model/testModel";
import { runInAction } from "mobx";
import { listItemStore } from "@/share/store/mobx/listItemStore";

const Main = observer(() => {
  const onClickItem = (item: TestModel) => {
    runInAction(() => {
      listItemStore.model = item;
    });
  };
  return (
    <div>
      {appStore.list.map((item, index) => (
        <div key={index}>
          <Link onClick={() => onClickItem(item)} href={`/main/${item.text}`}>
            {item.text}
            디테일 이동
          </Link>
        </div>
      ))}
      <span>Main page</span>
    </div>
  );
});

export default Main;
