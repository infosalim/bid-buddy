import { signOut } from "@/app/auth"; 
import { Button } from "@/components/ui/button";
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}