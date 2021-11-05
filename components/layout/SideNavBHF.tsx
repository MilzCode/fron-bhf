import React from "react";
import { Toggle, Sidenav, Nav } from "rsuite";
import Link from "next/link";

const SideNavBHF = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState("1");

  function handleToggle() {
    setExpanded(!expanded);
  }

  function handleSelect(e: any) {
    setActiveKey(e);
  }

  return (
    <>
      <div className={"sideNavBHF"}>
        <Sidenav
          className={`sideNavBHF__body${expanded ? "--expanded" : ""}`}
          style={{ height: "100vh" }}
          expanded={expanded}
          defaultOpenKeys={["3", "4"]}
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Toggle onChange={handleToggle} checked={expanded} />
          <Sidenav.Body>
            <Nav></Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
};

export default SideNavBHF;
