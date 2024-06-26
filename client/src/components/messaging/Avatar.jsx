export default function Avatar({ userId, username, online }) {
  // console.log(username);

  const colors = [
    "bg-yellow-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-teal-200",
    "bg-red-200",
  ];
  //   console.log(userId);

  const userIdBase10 = parseInt(userId, 16);
  //    console.log(userIdBase10);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  //   console.log(color);    //...color is selected based on userId's

  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
      {/* Indicator for online people - Green dot */}
      {online && (
        <div className="absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
      {/* Indicator for offline people - Gray dot*/}
      {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
}
