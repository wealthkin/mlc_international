import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLCI-CasiG | Sign Up",
  description: "Miracle Life Church International - Casiguran Aurora",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
