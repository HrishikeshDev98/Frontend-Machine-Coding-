import { useState } from "react";
import Personalinfo from "../components/Personalinfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import PreferencesInfo from "../components/PreferencesInfo";

import * as yup from "yup";

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

const getFormValidationSchema = (step) => {
  switch (step) {
    case 0:
      return {};
    case 1:
      return {};
    case 2:
      return {};
    default:
      return {};
  }
};

export const useStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = getStepComponent(currentStep);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
