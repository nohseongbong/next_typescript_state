import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import TestModel from "@/model/testModel";
import { listItemStore } from "@/store/mobx/listItemStore";
import { appStore } from "@/store/mobx/appStore";

const MainContainer = observer(() => {
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

export default MainContainer;
