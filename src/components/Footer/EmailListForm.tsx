import { useState } from "react";
import { decode } from "html-entities";

const EmailListForm = ({
  status,
  message,
  onValidated,
}: {
  status: string;
  message: string;
  onValidated: Function;
}) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const handleFormSubmit = () => {
    setError("");

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({
      EMAIL: email,
      FNAME: fName,
      LNAME: lName,
      "group[200001][1]": true,
      "group[200001][2]": true,
    });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  // const handleInputKeyEvent = (event: React.FormEvent<HTMLInputElement>) => {
  //   setError("");
  //   // Number 13 is the "Enter" key on the keyboard
  //   if (event.keyCode === 13) {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     // Trigger the button element with a click
  //     handleFormSubmit();
  //   }
  // };

  const getMessage = (message: string) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : "";
  };

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleFNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFName(event.currentTarget.value);
  };
  const handleLNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLName(event.currentTarget.value);
  };

  // <ul><li><input type="checkbox" value="1" name="group[20001][1]" id="mce-group[20001]-20001-0"><label for="mce-group[20001]-20001-0">This Chair Rocks</label></li>
  // <li><input type="checkbox" value="2" name="group[20001][2]" id="mce-group[20001]-20001-1"><label for="mce-group[20001]-20001-1">Old School</label></li>

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        <strong>Subscribe to Old School’s Newsletter!</strong> (no spam and we
        won’t share)
      </p>
      <div>
        <input
          type="text"
          name="FNAME"
          placeholder="First name"
          aria-label="First name"
          onChange={handleFNameChange}
        />
        <input
          type="text"
          name="LNAME"
          placeholder="Last name"
          aria-label="Last name"
          onChange={handleLNameChange}
        />
        <input
          placeholder="Email address"
          name="email"
          aria-label="Email address"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Sign me up</button>
      </div>
      <div className="newsletter-form-info">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{
              __html: String(error || getMessage(message)),
            }}
          />
        ) : null}
        {status === "success" ||
          (status !== "error" && !error && (
            <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
          ))}
      </div>
    </form>
  );
};

export default EmailListForm;
