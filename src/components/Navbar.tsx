import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/router"
import {UserButton, useUser} from "@clerk/nextjs"



const Navbar = () => {
  const router = useRouter();
  const {isSignedIn} = useUser();
  
  return (
    <nav className = "p-5 w-full flex justify-between items-center border-b-2 border-gray-200">
        <Image src = "/Logo.png" alt = "Logo" width = "0" height = "0" sizes = "100vw" className = "w-[10%] h-auto" />
        {isSignedIn ?<UserButton />: <Button variant= "outline" onClick={() => router.push("/dashboard")}>Get Started</Button>}
    </nav>
  )
}

export default Navbar
