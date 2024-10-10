import Link from "next/link";

export default function Page() {
    return (
        <div>
             <h1> This Is Dashboard Page</h1>
             <hr/>
             &bull; <Link href="dashboard/users/frida/232725">Frida</Link>
             <br/>
             &bull; <Link href="dashboard/users/sisilia/232724">Sisilia</Link>
        </div>
     
    );
  }
  