import hienAvatar from "./assets/hien.jpg";

export default function Message() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 text-white">
      <div className="max-w-lg">
        <div className="flex px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
          <img
            src={hienAvatar}
            alt="Hien avatar"
            className="h-10 w-10 rounded-full mr-4"
          />
          <div>
            <p className="flex items-baseline">
              <span className="mr-2 font-medium text-green-500">hien</span>
              <span className="text-xs text-gray-500">23/03/2023</span>
            </p>
            <p className="text-gray-300">
              You should never use something like leading relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger
            </p>
          </div>
        </div>

        <div className="mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
          <p className="pl-14 text-gray-300">
            You can override it in your config if you want but ultimately we
            chose the defaults they did because they let you get results closest
            to what a professional designer would do more easily
          </p>
        </div>

        <div className="mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
          <p className="pl-14 text-gray-300">
            Since we changed this in tailwind 2 I’ve almost never used a leading
            class at all
          </p>
        </div>
      </div>
    </div>
  );
}
