import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className="w-full md:w-1/3 lg:w-1/5 shadow-md rounded-lg p-6">
              <h1 className="text-xl font-medium mb-3">Sana cheffi</h1>
              <p className="text-md text-gray-600 mb-4">sana@example.com</p>
              <button className="w-full bg-black text-white p-2 px-4 rounded hover:bg-gray-800">
              Déconnexion
              </button>
            </div>
            {/* Right Section: Orders table  */}
            <div className="w-full md:w-2/3 lg:w-4/5">
            <MyOrdersPage/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  