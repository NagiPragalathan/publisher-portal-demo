"use client";
import { useState } from "react";
import Profile from "@/components/profile";
import ProgressBar from "@/components/progress_bar";
import InfoPopup from "@/components/info_popup";
import Step1Form from "@/components/forms/step1_form";

export default function Home() {
  return (
    <>
      <Profile />
      <ProgressBar progress={14} />
      {/* <InfoPopup /> */}
      <Step1Form />
    </>
  );
}
