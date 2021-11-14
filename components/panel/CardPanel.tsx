import React from "react";
import { Message } from "rsuite";
import Link from "next/link";

/**
 * @param title
 * @param desc
 * @param href
 * **/
const CardPanel = ({ title, children, href }: any) => {
  return (
    <div className="col-lg-4 cardPanel">
      <div className="card text-center border rounded-3 border-primary shadow-1 m-3">
        <div className="card-header p-0">
          <Message showIcon type="info">
            {title}
          </Message>
        </div>
        <div className="card-body">
          <p className="card-text">{children}</p>
          <br />
          <Link href={href} passHref>
            <button type="button" className="btn btn-primary cardPanel__irBtn">
              Ir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
