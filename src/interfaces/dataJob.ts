export interface IDataJob {
  id: string;
  company: string;
  about: string;
  position: string;
  date: string;
  location: string;
  salaryRange: string;
  employmentType: string;
  mealVoucher: string;
  level: string;
  tags: string[];
  description: string;
  review: number;
  workSchedule: string;
  requirements: string;
  benefits: string;
  contact: {
    name: string;
    position: string;
    cellPhone: string;
  };
}
