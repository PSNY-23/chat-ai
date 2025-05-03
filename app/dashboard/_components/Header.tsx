import { UserButton } from "@clerk/nextjs";


const Header = () => {
    return ( 
        <div className="flex justify-end p-6 shadow-sm">
            <UserButton/>
        </div>
     );
}
 
export default Header;