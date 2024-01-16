import React from "react";
import Tabs from "./component/Tabs";

const tabs1 = [
  { title: "Tab 1", content: "Content for Tab 1" },
  { title: "Tab 2", content: "Content for Tab 2" },
];

const tabs2 = [
  { title: "Tab A", content: "Content for Tab A" },
  { title: "Tab B", content: "Content for Tab B" },
];

const App = () => {
  return (
    <div>
      <Tabs tabs={tabs1} key="set1" />
      <Tabs tabs={tabs2} key="set2" />
    </div>
  );
};

export default App;
