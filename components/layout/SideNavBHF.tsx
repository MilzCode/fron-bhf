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
            <Nav>
              <Link passHref href="/panel">
                <Nav.Item eventKey="1">
                  <i className="fa fa-home rs-icon" />
                  Panel Principal
                </Nav.Item>
              </Link>
              <Link passHref href="/mis-datos">
                <Nav.Item eventKey="2">
                  <i className="fas fa-user rs-icon"></i>
                  Mis Datos
                </Nav.Item>
              </Link>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
};

export default SideNavBHF;
