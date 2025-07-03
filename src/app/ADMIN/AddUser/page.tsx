"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    RegistrationDateTime: new Date().toISOString(),
    Photo: "",
    Name: "",
    UserType: "",
    FatherOrHusbandName: "",
    MotherName: "",
    PresentAddress: {
      Village: "",
      PostOffice: "",
      PoliceStation: "",
      District: ""
    },
    PermanentAddress: {
      Village: "",
      PostOffice: "",
      PoliceStation: "",
      District: ""
    },
    DateOFBirth: "",
    NIDnumberOrBirthRegistrationNumber: "",
    Occupation: "",
    EducationQualification: "",
    Email: "",
    Phone: "",
    Social: {
      Facebook: "",
      Twitter: "",
      Linkedin: "",
      Instagram: ""
    }
  });

  const handleChange = (e, path = []) => {
    const { name, value } = e.target;
    if (path.length) {
      setForm(prev => {
        const updated = { ...prev };
        let ref = updated;
        for (let i = 0; i < path.length - 1; i++) ref = ref[path[i]];
        ref[path[path.length - 1]] = value;
        return updated;
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/addUser", form);
      setForm({
        RegistrationDateTime: new Date().toISOString(),
        Photo: "",
        Name: "",
        UserType: "",
        FatherOrHusbandName: "",
        MotherName: "",
        PresentAddress: {
          Village: "",
          PostOffice: "",
          PoliceStation: "",
          District: ""
        },
        PermanentAddress: {
          Village: "",
          PostOffice: "",
          PoliceStation: "",
          District: ""
        },
        DateOFBirth: "",
        NIDnumberOrBirthRegistrationNumber: "",
        Occupation: "",
        EducationQualification: "",
        Email: "",
        Phone: "",
        Social: {
          Facebook: "",
          Twitter: "",
          Linkedin: "",
          Instagram: ""
        }
      })
      router.push("/ADMIN/usersList");
      alert("User registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to register user.");
    }
  };

  // Helper: render inputs side-by-side in pairs or groups
  const renderInputsGrid = (fields, parentKey = null) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {fields.map(field => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={parentKey ? form[parentKey][field] : form[field]}
            onChange={e => parentKey ? handleChange(e, [parentKey, field]) : handleChange(e)}
            name={field}
            className="p-2 border rounded"
          />
        ))}
      </div>
    );
  };
  
  
  const renderInputsGrid2 = (fields, parentKey = null) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {fields.map(field => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={parentKey ? form[parentKey][field] : form[field]}
            onChange={e => parentKey ? handleChange(e, [parentKey, field]) : handleChange(e)}
            name={field}
            className="p-2 border rounded"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen rounded shadow">
      <form onSubmit={handleSubmit} className="container mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">User Registration</h2>

        {/* Basic Info side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="Name"
            required
            placeholder="Name"
            value={form.Name}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="UserType"
            placeholder="User Type"
            value={form.UserType}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="FatherOrHusbandName"
            required
            placeholder="Father or Husband Name"
            value={form.FatherOrHusbandName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="MotherName"
            placeholder="Mother Name"
            value={form.MotherName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        {/* Present Address */}
        <h3 className="font-semibold mb-2">Present Address</h3>
        {renderInputsGrid(["Village", "PostOffice", "PoliceStation", "District"], "PresentAddress")}

        {/* Permanent Address */}
        <h3 className="font-semibold mb-2">Permanent Address</h3>
        {renderInputsGrid(["Village", "PostOffice", "PoliceStation", "District"], "PermanentAddress")}

        {/* Date of Birth and NID side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="DateOFBirth"
            required
            value={form.DateOFBirth}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="NIDnumberOrBirthRegistrationNumber"
            placeholder="NID/Birth Reg. Number"
            value={form.NIDnumberOrBirthRegistrationNumber}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        {/* Occupation and Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="Occupation"
            placeholder="Occupation"
            value={form.Occupation}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="EducationQualification"
            placeholder="Education"
            value={form.EducationQualification}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={form.Email}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="Phone"
            required
            placeholder="Phone"
            value={form.Phone}
            onChange={handleChange}
            className="p-2 border rounded required"
          />
        </div>

        {/* Social Media */}
        <h3 className="font-semibold mb-2">Social</h3>
        {renderInputsGrid2(["Facebook", "Twitter", "Linkedin", "Instagram"], "Social")}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-4 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
