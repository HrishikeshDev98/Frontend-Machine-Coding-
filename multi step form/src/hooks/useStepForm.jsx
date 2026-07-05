import { useState } from "react";
import Personalinfo from "../components/Personalinfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import PreferencesInfo from "../components/PreferencesInfo";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

const getStepComponent = (step) => {
  switch (step) {
    case 0:
      return Personalinfo;
    case 1:
      return ProfessionalInfo;
    case 2:
      return PreferencesInfo;
    default:
      return Personalinfo;
  }
};


const personalInfoschema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required()
});

const professionalInfoschema = yup.object().shape({
  jobTitle: yup.string().required(),
  company: yup.string().required()
});

const preferencesInfoschema = yup.object().shape({
  newsletter: yup.boolean(),
  notifications: yup.boolean()
});

const getFormValidationSchema = (step) => {
  switch (step) {
    case 0:
      return personalInfoschema;
    case 1:
      return professionalInfoschema;
    case 2:
      return preferencesInfoschema;
    default:
      return personalInfoschema;
  }
};

export const useStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = getStepComponent(currentStep);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getFormValidationSchema(currentStep)),
  }
  );

  return {
    currentStep,
    setCurrentStep,
    register,
    handleSubmit,
    watch,
    errors,
    currentStepComponent: StepComponent,
  };
};
