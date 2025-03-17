function UserProfile() {
  return (
    <div className="max-w-xs p-4 mx-auto my-10 text-center bg-gray-100 rounded-lg shadow-lg sm:p-6 md:p-8 sm:max-w-sm sm:my-16 md:my-20">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 mx-auto rounded-full sm:w-28 sm:h-28 md:w-36 md:h-36"
      />
      <h1 className="my-3 text-lg text-blue-800 sm:text-xl md:text-2xl sm:my-4">
        John Doe
      </h1>
      <p className="text-sm text-gray-600 sm:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
