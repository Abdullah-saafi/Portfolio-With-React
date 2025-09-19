import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  newsletter: boolean;
  notifications: boolean;
  communicationPref: string;
  interests: string[];
}

interface Errors {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  [key: string]: string | undefined;
}

interface Step {
  id: number;
  title: string;
}

interface StepProps {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors?: Errors;
}

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    newsletter: false,
    notifications: true,
    communicationPref: "email",
    interests: [],
  });

  const [errors, setErrors] = useState<Errors>({});

  const steps: Step[] = [
    { id: 1, title: "Personal Info" },
    { id: 2, title: "Contact Details" },
    { id: 3, title: "Preferences" },
    { id: 4, title: "Confirmation" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "interests") {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);

      setFormData({
        ...formData,
        interests: updatedInterests,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateStep = (): boolean => {
    const newErrors: Errors = {};

    if (step === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of birth is required";
    }

    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";

      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (): void => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = (): void => {
    setStep(step - 1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStep(4);
  };

  const renderStep = (): JSX.Element => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <ContactDetails
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return <Preferences formData={formData} handleChange={handleChange} />;
      case 4:
        return <Confirmation formData={formData} />;
      default:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Multi-Step Form
      </h1>

      <div className="mb-10">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          {steps.map((stepItem, index) => (
            <div
              key={stepItem.id}
              className="flex flex-col items-center relative z-10"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step > stepItem.id
                    ? "bg-blue-600 border-blue-600 text-white"
                    : step === stepItem.id
                    ? "border-blue-600 bg-white text-blue-600"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {step > stepItem.id ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  stepItem.id
                )}
              </div>
              <div
                className={`mt-2 text-sm font-medium ${
                  step >= stepItem.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {stepItem.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-4">
        {renderStep()}

        <div className="flex justify-between mt-8">
          {step > 1 && step < 4 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit
            </button>
          )}

          {step === 4 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start New Form
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

const PersonalInfo = ({ formData, handleChange, errors }: StepProps) => {
  return (
    <div className="text-black">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="firstName">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.firstName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="lastName">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.lastName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
            Date of Birth *
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.dateOfBirth
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactDetails = ({ formData, handleChange, errors }: StepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2" htmlFor="address">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.address
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="city">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.city
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="zipCode">
            Zip Code *
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors?.zipCode
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors?.zipCode && (
            <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Preferences = ({ formData, handleChange }: StepProps) => {
  const interests = [
    "Technology",
    "Sports",
    "Music",
    "Travel",
    "Cooking",
    "Reading",
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Preferences</h2>

      <div className="space-y-6">
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Subscribe to newsletter</span>
          </label>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">Enable notifications</span>
          </label>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">
            Preferred Communication Method
          </h3>
          <div className="space-y-2">
            {["Email", "Phone", "SMS"].map((method) => (
              <label key={method} className="flex items-center">
                <input
                  type="radio"
                  name="communicationPref"
                  value={method.toLowerCase()}
                  checked={formData.communicationPref === method.toLowerCase()}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">
            Interests (Select all that apply)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {interests.map((interest) => (
              <label key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{interest}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Confirmation = ({ formData }: { formData: FormData }) => {
  return (
    <div className="mt-20">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-black">
        <h2 className="text-2xl font-semibold">Form Submitted Successfully!</h2>
        <p className="mt-2">
          Thank you for completing the form. Your information has been received.
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-4">
        Summary of Your Information
      </h3>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="mb-4">
          <h4 className="font-medium text-gray-700">Personal Information</h4>
          <p className="mt-1">
            Name: {formData.firstName} {formData.lastName}
          </p>
          <p>Date of Birth: {formData.dateOfBirth}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-700">Contact Details</h4>
          <p className="mt-1">Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>
            Address: {formData.address}, {formData.city}, {formData.zipCode}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700">Preferences</h4>
          <p className="mt-1">
            Newsletter: {formData.newsletter ? "Subscribed" : "Not subscribed"}
          </p>
          <p>
            Notifications: {formData.notifications ? "Enabled" : "Disabled"}
          </p>
          <p>Communication Preference: {formData.communicationPref}</p>
          <p>Interests: {formData.interests.join(", ") || "None selected"}</p>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
