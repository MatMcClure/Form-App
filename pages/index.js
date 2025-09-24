import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/medical_update_dentist.pdf"; 
  }, []);

  return null; // no need to render anything since we redirect
}
