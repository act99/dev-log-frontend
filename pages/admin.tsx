import axios from "axios";
import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4003/api/hello")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <div>
      <h3>어드민</h3>
    </div>
  );
};

export default Admin;
