
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { ArrowRight, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentMobile: "",
    countryCode: "+65", // Default country code
    studentName: "",
    studentLevel: "",
    studentId: "",
    preferredCentre: "",
    hearAboutEvent: "",
    questions: "",
    dietaryPreference: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.parentName || !formData.parentEmail || !formData.parentMobile || !formData.studentName) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration submitted",
      description: "Thank you for registering for the PSLE Bootcamp!",
    });
    
    console.log("Form submitted:", formData);
  };

  const handleDietaryClick = (preference: string) => {
    setFormData((prev) => ({ ...prev, dietaryPreference: preference }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Logo removed */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center">
            {/* Logo removed */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-4">Complete Registration for PSLE Bootcamps</h1>
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm mb-8">
          <span className="text-gray-600">Checkout</span>
          <ArrowRight className="h-3 w-3 mx-2" />
          <span className="text-gray-600">Payment</span>
          <ArrowRight className="h-3 w-3 mx-2" />
          <span className="text-blue-600 font-medium">Registration</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Alert */}
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p>Please complete the form below to attend our PSLE bootcamp</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Parent's Name */}
                <div>
                  <Label htmlFor="parentName" className="text-base font-medium">
                    Parent's Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Enter parent's full name"
                  />
                </div>

                {/* Parent's Email */}
                <div>
                  <Label htmlFor="parentEmail" className="text-base font-medium">
                    Parent's Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Parent's Mobile Number with country code selection */}
                <div>
                  <Label htmlFor="parentMobile" className="text-base font-medium">
                    Parent's Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex mt-1">
                    <Select 
                      onValueChange={(value) => handleSelectChange("countryCode", value)}
                      defaultValue="+65"
                    >
                      <SelectTrigger className="w-[100px] rounded-r-none border-r-0">
                        <SelectValue placeholder={formData.countryCode} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+65">+65</SelectItem>
                        <SelectItem value="+60">+60</SelectItem>
                        <SelectItem value="+62">+62</SelectItem>
                        <SelectItem value="+63">+63</SelectItem>
                        <SelectItem value="+66">+66</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="parentMobile"
                      name="parentMobile"
                      type="tel"
                      value={formData.parentMobile}
                      onChange={handleChange}
                      className="rounded-l-none"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                {/* Student's Full Name */}
                <div>
                  <Label htmlFor="studentName" className="text-base font-medium">
                    Student's Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Enter student's full name"
                  />
                </div>

                {/* Student's Level in 2025 */}
                <div>
                  <Label htmlFor="studentLevel" className="text-base font-medium">
                    Student's Level in 2025 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="studentLevel"
                    name="studentLevel"
                    value={formData.studentLevel}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="e.g., Primary 6"
                  />
                </div>

                {/* Mind Stretcher Student ID */}
                <div>
                  <Label htmlFor="studentId" className="text-base font-medium">
                    Mind Stretcher Student ID
                  </Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Enter student ID if applicable"
                  />
                </div>

                {/* Preferred Centre for Collection */}
                <div>
                  <Label htmlFor="preferredCentre" className="text-base font-medium">
                    Preferred Centre for Collection <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("preferredCentre", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a centre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bukit-timah">Bukit Timah</SelectItem>
                      <SelectItem value="jurong-east">Jurong East</SelectItem>
                      <SelectItem value="marine-parade">Marine Parade</SelectItem>
                      <SelectItem value="tampines">Tampines</SelectItem>
                      <SelectItem value="yishun">Yishun</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* How did you hear of this event? */}
                <div>
                  <Label htmlFor="hearAboutEvent" className="text-base font-medium">
                    How did you hear of this event? <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange("hearAboutEvent", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="friends">Friends/Family</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Questions */}
                <div>
                  <Label htmlFor="questions" className="text-base font-medium">
                    Feel free to share any questions beforehand
                  </Label>
                  <Input
                    id="questions"
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Type your questions here"
                  />
                </div>

                {/* Dietary Preferences - Removed radio buttons */}
                <div>
                  <Label className="text-base font-medium block mb-2">
                    Please select your child's dietary preferences
                  </Label>
                  <p className="text-sm text-gray-500 mb-3">Only for Physical Power Up Bootcamp</p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      type="button"
                      className={`border rounded-md px-4 py-2 ${
                        formData.dietaryPreference === "no-requirement"
                          ? "bg-blue-100 border-blue-500"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleDietaryClick("no-requirement")}
                    >
                      No dietary requirement
                    </button>
                    <button
                      type="button"
                      className={`border rounded-md px-4 py-2 ${
                        formData.dietaryPreference === "halal"
                          ? "bg-blue-100 border-blue-500"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleDietaryClick("halal")}
                    >
                      Halal
                    </button>
                    <button
                      type="button"
                      className={`border rounded-md px-4 py-2 ${
                        formData.dietaryPreference === "vegetarian"
                          ? "bg-blue-100 border-blue-500"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleDietaryClick("vegetarian")}
                    >
                      Vegetarian
                    </button>
                    <button
                      type="button"
                      className={`border rounded-md px-4 py-2 ${
                        formData.dietaryPreference === "others"
                          ? "bg-blue-100 border-blue-500"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleDietaryClick("others")}
                    >
                      Others
                    </button>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="mt-8 bg-blue-600 hover:bg-blue-700" 
                size="lg"
              >
                Submit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right side - Order confirmation info would go here, but as per instructions we'll ignore it */}
          <div className="hidden lg:block">
            {/* This space intentionally left empty as per request to ignore the order confirmation on the right side */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
