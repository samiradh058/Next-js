export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-4 flex flex-col justify-center space-y-12 bg-gradient-to-br from-blue-100 to-blue-300  border rounded-lg">
        <h2 className="text-[40px] italic text-center p-4 text-stone-800">
          Login
        </h2>
        <div className="flex flex-col gap-4 text-[24px]">
          <div className="flex gap-4">
            <label className="text-stone-800" htmlFor="name">
              Username:
            </label>
            <input
              className="px-2 rounded-sm focus:bg-stone-100"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="flex gap-[20px]">
            <label htmlFor="password" className="text-stone-800">
              Password:
            </label>
            <input
              className="w-full px-2 rounded-sm focus:bg-slate-100"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
        </div>
        <button
          className="bg-green-400 px-4 py-2 border rounded-lg mx-auto text-[20px]"
          type="submit"
        >
          Go to App
        </button>
      </form>
    </div>
  );
}
