import { LoginForm } from "@/components/LoginPage"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10 h-full ">
      <div className="w-full max-w-sm md:max-w-4xl h-full">
        <LoginForm />
      </div>
    </div>
  )
}
