
export interface ParentRegisterInputsProps {
  registerPhase: number
  name: { value: string, error: boolean, errorMessage: string | null }
  setName: (value: any) => void
  email: { value: string, error: boolean, errorMessage: string | null }
  setEmail: (value: any) => void
  password: { value: string, error: boolean, errorMessage: string | null }
  setPassword: (value: any) => void
  confirmPassword: { value: string, error: boolean, errorMessage: string | null }
  setConfirmPassword: (value: any) => void
  phone: { value: string, error: boolean, errorMessage: string | null }
  setPhone: (value: any) => void
  emergencyPhone: { value: string, error: boolean, errorMessage: string | null }
  setEmergencyPhone: (value: any) => void
  cpf: { value: string, error: boolean, errorMessage: string | null }
  setCpf: (value: any) => void
  confirmCpf: { value: string, error: boolean, errorMessage: string | null }
  setConfirmCpf: (value: any) => void
}