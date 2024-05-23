import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import RegistrationStep1 from "../components/registerSteps/RegistrationStep1";
import RegistrationStep2 from "../components/registerSteps/RegistrationStep2";
import RegistrationStep3 from "../components/registerSteps/RegistrationStep3";

const Registration = () => {
  const step = useSelector((state: RootState) => state.registration.step);

  switch (step) {
    case 1:
      return <RegistrationStep1 />;
    case 2:
      return <RegistrationStep2 />;
    case 3:
      return <RegistrationStep3 />;
    default:
      return <RegistrationStep1 />;
  }
};

export default Registration;
