import "./Contact.css";
function Contact() {
  return (
    <div id="contactmaincontainer">
      <div id="contactinnercontainer" style={{ position: "relative" }}>
        <h2 className="contactsometext" id="Contact">
          Living, learning, & leveling up <br />
          one day at a time.<span style={{ color: "red" }}>❤</span>
        </h2>
        <h1 className="contacthead">Get in touch</h1>
        <hr className="contactheadbelowline"></hr>
        <h2 className="contactphno">(+91-6361956388)</h2>

        <div className="contactflexbox">
          <a
            className="contactgit"
            href="https://github.com/rakshit2621"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="contactinsta"
            href="https://www.instagram.com/rk_2621_/"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="contactmail"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwsMntmzdmNmVrDTSflwgMGGRVVbrqbpbrfnGhKclhQFmVzwDmxXMckzzlFNlbVHjXRTFB"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="contactx"
            href="https://twitter.com/rakshitchopade"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="contactlinkedin"
            href="https://www.linkedin.com/in/rakshitchopade/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
      <hr id="contactlastlinedraw"></hr>
      <h4 id="contactlastline">Designed & Built by Rakshit Chopade🤟</h4>
    </div>
  );
}

export default Contact;
