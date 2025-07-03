"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/getOneUser/${id}`)
        .then(res => setUser(res.data))
        .catch(err => {
          console.error(err);
          alert("User not found.");
        });
    }
  }, [id]);

  if (!user) {
    return <div className="p-6 text-gray-600">Loading profile...</div>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div><strong>Name:</strong> {user.Name}</div>
          <div><strong>User Type:</strong> {user.UserType}</div>
          <div><strong>Father/Husband:</strong> {user.FatherOrHusbandName}</div>
          <div><strong>Mother Name:</strong> {user.MotherName}</div>
          <div><strong>Date of Birth:</strong> {user.DateOFBirth}</div>
          <div><strong>NID / Reg No.:</strong> {user.NIDnumberOrBirthRegistrationNumber}</div>
          <div><strong>Occupation:</strong> {user.Occupation}</div>
          <div><strong>Education:</strong> {user.EducationQualification}</div>
          <div><strong>Email:</strong> {user.Email}</div>
          <div><strong>Phone:</strong> {user.Phone}</div>

          <div className="col-span-2 mt-4">
            <h2 className="font-semibold">Present Address</h2>
            <p>{user.PresentAddress.Village}, {user.PresentAddress.PostOffice}, {user.PresentAddress.PoliceStation}, {user.PresentAddress.District}</p>
          </div>

          <div className="col-span-2">
            <h2 className="font-semibold">Permanent Address</h2>
            <p>{user.PermanentAddress.Village}, {user.PermanentAddress.PostOffice}, {user.PermanentAddress.PoliceStation}, {user.PermanentAddress.District}</p>
          </div>

          <div className="col-span-2">
            <h2 className="font-semibold">Social Links</h2>
            <ul className="list-disc list-inside text-blue-600">
              {Object.entries(user.Social).map(([key, val]) =>
                val && <li key={key}><a href={val} target="_blank" rel="noreferrer">{key}</a></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
