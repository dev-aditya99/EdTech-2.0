import { useState } from "react";

const Profile = () => {
  // Assume user data is fetched from backend and stored in user state
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    // Add more user data fields as needed
  });

  const handleUpdateProfile = () => {
    // Implement update profile logic here
    // For demonstration purposes, let's assume the user data is updated successfully
    setUser({ ...user, firstName: "Jane" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">First Name</label>
        <input
          type="text"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Last Name</label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-[#dc944bcc] text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
