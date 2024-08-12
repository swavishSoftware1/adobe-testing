import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link
        to={`https://secure.in1.adobesign.com/public/oauth/v2?redirect_uri=https://revo-reality-client.vercel.app/auth/login&
response_type=code&client_id=ats-f39a6b08-8b46-4d8e-b8bf-99aabf584b52&scope=user_login:self+agreement_write:account&
state=S6YQD7KDA556DIV6NAU4ELTGSIV26ZNMXDSF7WIEEP0ZLQCLDQ89OYG78C3K9SROC8DXCGRVSGKU1IT1`}
      >
        navigate
      </Link>
    </div>
  );
};

export default Home;
