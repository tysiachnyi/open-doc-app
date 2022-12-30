import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function Auth() {
  const [message, setMessage] = useState("");
  const token = new Cookies().get("TOKEN");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:7777/api/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  return (
    <div>
      <h1 className="text-center">Auth Component</h1>

      <h3 className="text-center text-danger">{message}</h3>
    </div>
  );
}
