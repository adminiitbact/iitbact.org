import React from "react";
import Button from "@material-ui/core/Button";
import HubspotForm from "react-hubspot-form";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";
const Contact = () => {
  return (
    <div id="contact">
      <div className="container sectionContainer">
        <h1 className="sectionHeading">Contact Us</h1>
        <br />
        <div className="row">
          <div className="col-md-6" id="contact1">
            <h3>WE STAND WITH EVERYONE FIGHTING ON THE FRONTLINES</h3>
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={{ color: "black", backgroundColor: "#EDEEEF" }}
                onClick={() =>
                  window.open("https://github.com/adminiitbact", "target")
                }
                // className={classes.button}
                // startIcon={<DeleteIcon />}
              >
                IITBACT.ORG
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ color: "white", backgroundColor: "#353B41" }}
                // className={classes.button}
                onClick={() =>
                  window.open(
                    "https://github.com/adminiitbact/iitbact.org",
                    "target"
                  )
                }
                startIcon={<GitHubIcon />}
              >
                OPEN SOURCE ON GITHUB
              </Button>

              <Button
                variant="contained"
                color="secondary"
                style={{ color: "green", backgroundColor: "#EDEEEF" }}
                // className={classes.button}
                startIcon={<WhatsAppIcon />}
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=919810089232",
                    "target"
                  )
                }
              >
                JOIN US ON WHATSAPP
              </Button>
            </div>
          </div>
          <div className="col-md-6" id="contactForm">
            <HubspotForm
              portalId="7429581"
              formId="5a82bc1a-5b71-4f7d-b644-a3beb9568033"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
