import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center p-10 m-auto">
        <SignIn/>
    </div>
  )
}

export default SignInPage