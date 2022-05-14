import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../constants/socials";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import React from "react";

const Social = () => {
  return (
    <>
      <Nav>
        {socials.map((social) => (
          <OverlayTrigger
            key={social.id}
            placement="bottom"
            overlay={<Tooltip id="tooltip-bottom">{social.name}</Tooltip>}
          >
            <Nav.Link href={social.href}>
              <FontAwesomeIcon className="icon" icon={social.icon} />
            </Nav.Link>
          </OverlayTrigger>
        ))}
      </Nav>
    </>
  );
};

export default Social;
