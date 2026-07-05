import { useStepForm } from "../hooks/useStepForm";

const MutliStepForm = () => {
  const {
    currentStep,
    setCurrentStep,
    currentStepComponent: StepComponent,
    errors,
    handleSubmit,
    register,
    watch,
  } = useStepForm();

  return (
    <div>
      <StepComponent />
    </div>
  );
};

export default MutliStepForm;
