import { useStepForm } from "../hooks/useStepForm";

const MutliStepForm = () => {
  const {
    currentStep,
    setCurrentStep,
    register,
    handleSubmit,
    watch,
    errors,
    currentStepComponent: StepComponent,
    handleNextStep,
    isFirstStep,
    isLastStep,
  } = useStepForm();

  return (
    <div>
      <StepComponent />
    </div>
  );
};

export default MutliStepForm;
