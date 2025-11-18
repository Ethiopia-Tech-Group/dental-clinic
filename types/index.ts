export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  city: string;
  zipCode: string;
  createdAt: string;
}

export interface Dentist {
  id: string;
  name: string;
  phone: string;
  experience: number;
  specialization: string;
  branchId: string;
  email: string;
  license: string;
  createdAt: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  zipCode: string;
  medicalHistory: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  dentistId: string;
  branchId: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "scheduled" | "completed" | "cancelled";
  notes: string;
  createdAt: string;
}

export interface Billing {
  id: string;
  appointmentId: string;
  patientId: string;
  amount: number;
  status: "pending" | "paid" | "overdue";
  description: string;
  dueDate: string;
  paidDate?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalAppointments: number;
  totalPatients: number;
  totalDentists: number;
  totalBranches: number;
  pendingBills: number;
}
