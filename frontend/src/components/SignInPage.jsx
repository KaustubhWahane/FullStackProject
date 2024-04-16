 function SignInPage()  {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>
        <form className="">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
