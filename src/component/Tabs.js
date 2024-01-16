import React, { useState } from "react";

const Tabs = ({ tabs, key }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`tabs-container ${key ? `tabs-container-${key}` : ""}`}>
      <div className="tabs-list">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? "active-tab" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab] && <p>{tabs[activeTab].content}</p>}
      </div>
    </div>
  );
};

export default Tabs;
