import { useStepForm } from "../hooks/useStepForm";

const STEPS = ["Personal", "Professional", "Preferences"];

const MultiStepForm = () => {
  const {
    register,
    errors,
    currentStep,
    currentStepComponent: StepComponent,
    control,
    isFirstStep,
    isLastStep,
    handleNextStep,
    handlePreviousStep
  } = useStepForm();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col justify-center items-center p-4 antialiased selection:bg-blue-500 selection:text-white">
      {/* Form Container Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 transition-all duration-300">

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            Registration Form
          </span>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-8">
          {STEPS.map((label, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center h-9 w-9 rounded-full text-sm font-semibold border-2 transition-all duration-300
                      ${isActive
                        ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                        : isCompleted
                          ? "bg-blue-100 border-blue-600 text-blue-600"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium transition-colors duration-300
                      ${isActive ? "text-blue-600" : "text-gray-400"}`}
                  >
                    {label}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 rounded-full transition-colors duration-300
                      ${isCompleted ? "bg-blue-600" : "bg-gray-200"}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Step Component */}
        <div className="mt-2">
          <StepComponent register={register} errors={errors} control={control} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-gray-100">
          <button
            type="button"
            disabled={isFirstStep}
            onClick={handlePreviousStep}
            className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm transition-all duration-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm shadow-blue-200 transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
