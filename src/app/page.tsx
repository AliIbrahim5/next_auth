import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";

export default  async function Home() {
 const session = await getServerSession(authOptions);
  
  return (
   <div className="p-10">
      <h1>Next Auth </h1>
      {
        session ? (
          <div>
            <h3>Session</h3>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <LogoutButton/>
          </div>
        ):(
          <div>
            <h3>No session</h3>
            <h1>please login</h1>

          </div>
        )
      }
   </div>
  );
}
