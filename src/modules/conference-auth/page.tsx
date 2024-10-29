"use client"
import React, { useState } from 'react';
import { z } from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { GoogleSignIn } from '../auth/socialbutton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { CreateUser } from '@/action/auth';
import "../../app/index.css";
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schema';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import { countries } from "@/utils/countries";

export const SignUpForm = () => {
  const [isLoading, startTransition] = useTransition();
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const steps = [
    { title: 'Personal Information', progress: 25 },
    { title: 'Contact Information', progress: 50 },
    { title: 'Academic Information', progress: 75 },
    { title: 'Conference Details', progress: 100 }
  ];

  const registrationTypes = [
    { value: "individual", label: "Individual" },
    { value: "institution", label: "Institution" },
  ];
  
  const professions = [
    { value: "professor", label: "Professor" },
    { value: "postgraduate", label: "Postgraduate" },
    { value: "lecturer_i", label: "Lecturer I" },
    { value: "lecturer_ii", label: "Lecturer II" },
    { value: "undergraduate", label: "Undergraduate" },
  ];

  const paymentPackages = [
    { value: "basic", label: "Basic Access ($29)" },
    { value: "standard", label: "Standard Access ($40)" },
    { value: "premium", label: "Premium Access ($140)" },
  ];

  const participationModes = [
    { value: "virtual", label: "Virtual" },
    { value: "physical", label: "Physical" },
  ];

  const presentationOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      f_name: '',
      m_name: '',
      l_name: '',
      type: "individual",
      profession: "professor",
      phone: '',
      email: '',
      postal_addr: '',
      country: '',
      qualifications: '',
      area_of_specialization: '',
      institution_name_addr: '',
      payment_package: 'basic',
      participation_mode: 'virtual',
      presentation_plan: 'no',
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      await CreateUser(values).then(async (res) => {
        if (res.status === 201) {
          router.push('/loginTwo');
        }
        toast[res.status === 201 ? 'success' : 'error'](
          res.status === 201 ? 'Account created successfully' : 'an error occurred',
          {
            description: res.status === 201 ? 'Redirecting' : res.message,
          }
        );
      });
    });
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="f_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    First Name<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="John"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="m_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Middle Name<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Smith"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="l_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Last Name<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Doe"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Registration type<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select registration type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {registrationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Select profession<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your profession" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {professions.map((profession) => (
                        <SelectItem key={profession.value} value={profession.value}>
                          {profession.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 1:
        return (
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Mobile number<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="+1234567890"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Email Address<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postal_addr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Postal address<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="123 Main St"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Country of domicile<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 2:
        return (
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="qualifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Qualifications<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ph.D., M.Sc., etc."
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="area_of_specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Area of Specialization<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Computer Science"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution_name_addr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Institution Name & Address<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="University of California"
                      required
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 3:
        return (
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="payment_package"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Payment Package<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment package" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {paymentPackages.map((pkg) => (
                        <SelectItem key={pkg.value} value={pkg.value}>
                          {pkg.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="participation_mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Mode of Participation<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mode of participation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {participationModes.map((mode) => (
                        <SelectItem key={mode.value} value={mode.value}>
                          {mode.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="presentation_plan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    Do you plan to present?<span className="text-brand-primary">*</span>
                  </FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select presentation plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {presentationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
    }
  };

  return (
    <Card className="md:w-[900px] mx-auto md:px-32 sm:px-20 py-5 flex flex-col items-center justify-center min-h-max w-full rounded-none shadow-none">
      <CardHeader className="w-full">
        <div className="flex flex-col gap-8 items-center w-full">
          <Image src="/IAIIEA Logo.png" alt="logo" width={100} height={100} />
          <div className="flex flex-col text-center gap-[8px]">
            <h1 className="text-[#203A87] font-bold text-2xl md:text-4xl">
              Become a conference participant of IAIIEA
            </h1>
            <p className="text-[#393938] leading-[24px] max-w-[611px]">
              Join the list of IAIIEA conference participants to access conferences
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="gap-5 grid w-full">
        {/* Progress Bar */}
        <div className="w-full mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-[#203A87] text-white' : 'bg-gray-200'
                }`}>
                  {index + 1}
                </div>
                <span className="text-xs mt-1">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-[#203A87] h-2 rounded-full transition-all duration-300"
              style={{ width: `${steps[currentStep].progress}%` }}
            />
          </div>
        </div>

        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            {renderStepContent(currentStep)}

            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="w-24"
              >
                Previous
              </Button>
              
              {currentStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  className="w-24 bg-[#203A87]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-x-2">
                      <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                    </span>
                  ) : (
                    'Submit'
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="w-24 bg-[#203A87]"
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </Form>

        <div className="mt-2 text-center text-xs text-[#646261]">
          Already have an account?{' '}
          <Link href="/login" className="text-brand-primary text-xs font-semibold">
            Login
          </Link>
        </div>

        <Link
          href={'/'}
          className="mt-2 text-center text-sm text-[#667085] flex flex-row items-center justify-center gap-2 font-medium"
        >
          <ChevronLeft size={15} />
          <span>Back to Home</span>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;