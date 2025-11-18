"use client";

import { create } from "zustand";
import {
  Branch,
  Dentist,
  Patient,
  Appointment,
  Billing,
} from "@/types";
import {
  mockBranches,
  mockDentists,
  mockPatients,
  mockAppointments,
  mockBilling,
} from "./mock-data";

interface AppState {
  branches: Branch[];
  dentists: Dentist[];
  patients: Patient[];
  appointments: Appointment[];
  billing: Billing[];
  
  // Branch actions
  addBranch: (branch: Branch) => void;
  updateBranch: (id: string, branch: Partial<Branch>) => void;
  deleteBranch: (id: string) => void;
  
  // Dentist actions
  addDentist: (dentist: Dentist) => void;
  updateDentist: (id: string, dentist: Partial<Dentist>) => void;
  deleteDentist: (id: string) => void;
  
  // Patient actions
  addPatient: (patient: Patient) => void;
  updatePatient: (id: string, patient: Partial<Patient>) => void;
  deletePatient: (id: string) => void;
  
  // Appointment actions
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: string, appointment: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  
  // Billing actions
  addBilling: (bill: Billing) => void;
  updateBilling: (id: string, bill: Partial<Billing>) => void;
  deleteBilling: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  branches: mockBranches,
  dentists: mockDentists,
  patients: mockPatients,
  appointments: mockAppointments,
  billing: mockBilling,
  
  addBranch: (branch) =>
    set((state) => ({ branches: [...state.branches, branch] })),
  updateBranch: (id, branch) =>
    set((state) => ({
      branches: state.branches.map((b) => (b.id === id ? { ...b, ...branch } : b)),
    })),
  deleteBranch: (id) =>
    set((state) => ({
      branches: state.branches.filter((b) => b.id !== id),
    })),
    
  addDentist: (dentist) =>
    set((state) => ({ dentists: [...state.dentists, dentist] })),
  updateDentist: (id, dentist) =>
    set((state) => ({
      dentists: state.dentists.map((d) =>
        d.id === id ? { ...d, ...dentist } : d
      ),
    })),
  deleteDentist: (id) =>
    set((state) => ({
      dentists: state.dentists.filter((d) => d.id !== id),
    })),
    
  addPatient: (patient) =>
    set((state) => ({ patients: [...state.patients, patient] })),
  updatePatient: (id, patient) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === id ? { ...p, ...patient } : p
      ),
    })),
  deletePatient: (id) =>
    set((state) => ({
      patients: state.patients.filter((p) => p.id !== id),
    })),
    
  addAppointment: (appointment) =>
    set((state) => ({ appointments: [...state.appointments, appointment] })),
  updateAppointment: (id, appointment) =>
    set((state) => ({
      appointments: state.appointments.map((a) =>
        a.id === id ? { ...a, ...appointment } : a
      ),
    })),
  deleteAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((a) => a.id !== id),
    })),
    
  addBilling: (bill) =>
    set((state) => ({ billing: [...state.billing, bill] })),
  updateBilling: (id, bill) =>
    set((state) => ({
      billing: state.billing.map((b) =>
        b.id === id ? { ...b, ...bill } : b
      ),
    })),
  deleteBilling: (id) =>
    set((state) => ({
      billing: state.billing.filter((b) => b.id !== id),
    })),
}));
