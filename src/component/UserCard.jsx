const UserCard = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-80 p-6 rounded-xl shadow-lg text-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />

        <h2 className="text-2xl font-bold mt-4">
          {data.name} {data.surname}
        </h2>

        <p className="text-blue-500 font-semibold mt-2">{data.Peşə}</p>

        <p className="text-gray-600 mt-3">{data.QısaBio}</p>
      </div>
    </div>
  );
};

export default UserCard;
