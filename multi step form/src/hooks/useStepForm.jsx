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
  company: yup.string().required(),
  role: yup.string().required(),
});

const preferencesInfoschema = yup.object().shape({
  newsletter: yup.boolean(),
  theme: yup.mixed().oneOf(['light', 'dark']).required()
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

  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getFormValidationSchema(currentStep)),
    mode: "onChange",
  }
  );


  const StepComponent = getStepComponent(currentStep);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === 2;


  const handleNextStep = async () => {
    // const isValid = await trigger();
    const isValid = true; // For testing purposes, you can set this to true or false
    console.log("isValid", isValid);
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }

  const handlePreviousStep = () => {
    if (!isFirstStep) setCurrentStep((prevStep) => prevStep - 1);
  }


  return {
    currentStep,
    setCurrentStep,
    register,
    handleSubmit,
    watch,
    errors,
    handleNextStep,
    isFirstStep,
    isLastStep,
    currentStepComponent: StepComponent,
    control,
    handlePreviousStep
  };
};
