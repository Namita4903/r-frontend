import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import axios from "axios";

const ConfirmDoctorAccess = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Confirming access...");
  const [status, setStatus] = useState("pending"); // pending, success, error
  const navigate = useNavigate();

  useEffect(() => {
    const email = searchParams.get("email");
    const doctorId = searchParams.get("doctorId");
    const token = searchParams.get("token");

    if (!email || !doctorId || !token) {
      setMessage("Invalid or missing parameters.");
      setStatus("error");
      return;
    }

    const confirmAccess = async () => {
      try {
        const res = await axios.post(
            "http://localhost:5001/api/doctor/confirm-access",
            {
              email,
              doctorId,
              token,
            }
          )
        setMessage(res.data || "Access granted.");
        setStatus("success");

        // Redirect to dashboard or home after 3 seconds
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        console.error(error);
        setMessage("Failed to confirm access.");
        setStatus("error");

        // Optionally redirect on error too
        // setTimeout(() => {
        //   navigate("/");
        // }, 4000);
      }
    };

    confirmAccess();
  }, [searchParams, navigate]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {status === "pending" && <h2>⏳ {message}</h2>}
      {status === "success" && <h2 style={{ color: "green" }}>✅ {message}</h2>}
      {status === "error" && <h2 style={{ color: "red" }}>❌ {message}</h2>}
      <p>You will be redirected shortly...</p>
    </div>
  );
};

export default ConfirmDoctorAccess;
