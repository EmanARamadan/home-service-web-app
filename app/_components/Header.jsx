
import { Button } from '@/components/ui/button'
// import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function Header() {

  return (
    <div className='p-5 shadow-sm flex  
    '>
        <div className='flex items-center gap-8 '>
            <Image src='/logo.svg' alt='logo'
            width={180} height={100} />
            <div className='md:flex items-center
            gap-6 hidden'>
                <h2 className="hover:scale-105 hover:text-primary cursor-pointer">Home</h2>
                <h2 className="hover:scale-105 hover:text-primary cursor-pointer">Services</h2>
                <h2 className="hover:scale-105 hover:text-primary cursor-pointer">About Us</h2>
                
            </div>
           
           <div>
            
            
            
            <Button>Get Started</Button>
           </div>
        </div>
    </div>
  )
}
export default Header;