import Head from "next/head";
import Hero from "@/components/Hero";
import VslSection from "@/components/VslSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HumanDifferenceSection from "@/components/HumanDifferenceSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CustomSupportSection from "@/components/CustomSupportSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import LeadFormSection from "@/components/LeadFormSection";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <Head>
        <title>BOOCLIENTS | Human-Powered Client Support</title>
        <meta name="description" content="Trained human support for leads, appointments and follow-ups." />
      </Head>
      <Hero />
      <WaveDivider fillClass="fill-primary-dark" />
      <VslSection />
      <WaveDivider top fillClass="fill-primary-dark" />
      <ProblemSection />
      <ServicesSection />
      <WaveDivider fillClass="fill-white" />
      <HowItWorksSection />
      <CustomSupportSection />
      <HumanDifferenceSection />
      <WhoWeHelpSection />
      <FinalCtaSection />
      <LeadFormSection />
    </>
  );
}
