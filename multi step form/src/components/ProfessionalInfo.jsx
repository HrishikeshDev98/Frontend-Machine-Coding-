import Input from "./Input";

const ProfessionalInfo = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-1">
        <h2 className="text-lg font-semibold text-gray-900">Professional Details</h2>
        <p className="text-sm text-gray-500">Tell us about your work.</p>
      </div>
      <Input name="company" register={register} label="Company" placeholder="Acme Inc." error={errors?.company?.message} />
      <Input name="role" register={register} label="Role" placeholder="Software Engineer" error={errors?.role?.message} />
    </div>
  );
};

export default ProfessionalInfo;
