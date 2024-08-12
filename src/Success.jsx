import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  useEffect(() => {
    if (code && state) {
      console.log(code);
      handleSubmit({ code });
    }
  }, [code, state]);

  const handleSubmit = async ({ code }) => {
    try {
      const { data } = await axios.post(
        "https://api.in1.adobesign.com/oauth/v2/token",
        {
          grant_type: "authorization_code",
          client_id: "ats-f39a6b08-8b46-4d8e-b8bf-99aabf584b52",
          client_secret: "zYJmGtbTBOa7Mv3niM6jKtDxFTubbAG2",
          redirect_uri: "https://adobe-testing.vercel.app/success",
          code,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return <div>Success</div>;
};

export default Success;
