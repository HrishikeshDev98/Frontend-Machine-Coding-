import Input from "./Input";

const Personalinfo = ({ register, errors, control }) => {


  return (
    <div className="flex flex-col gap-4">
      <div className="mb-1">
        <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
        <p className="text-sm text-gray-500">Let's start with the basics.</p>
      </div>
      <Input name="name" label="Full Name" register={register} error={errors.name?.message} control={control} />
      <Input name="email" label="Email" register={register} error={errors.email?.message} control={control} />
    </div>
  );
};

export default Personalinfo;
