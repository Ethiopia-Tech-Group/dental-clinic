"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { OverviewTab } from "@/components/tabs/overview-tab";
import { AppointmentsTab } from "@/components/tabs/appointments-tab";
import { PatientsTab } from "@/components/tabs/patients-tab";
import { DentistsTab } from "@/components/tabs/dentists-tab";
import { BranchesTab } from "@/components/tabs/branches-tab";
import { BillingTab } from "@/components/tabs/billing-tab";
import { SettingsTab } from "@/components/tabs/settings-tab";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "appointments":
        return <AppointmentsTab />;
      // case "patients":
      //   return <PatientsTab />;
      case "dentists":
        return <DentistsTab />;
      case "branches":
        return <BranchesTab />;
      case "billing":
        return <BillingTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <Header />
      <main className="ml-0 md:ml-64 pt-8 md:pt-8 pb-8 px-4 md:px-8">
        {renderTab()}
      </main>
    </div>
  );
}
