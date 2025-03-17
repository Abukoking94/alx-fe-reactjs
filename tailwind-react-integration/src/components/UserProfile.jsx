function UserProfile() {
  return (
    <div className="max-w-xs mx-auto my-20 text-center bg-gray-100 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-sm md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 mx-auto rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36"
      />
      <h1 className="my-4 text-lg text-blue-800 sm:text-xl md:text-xl">
        John Doe
      </h1>
      <p className="text-sm text-gray-600 sm:text-base md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
