import JobListPage from "@/components/jobs/JobListPage";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function JobListRoute() {
  return (
    <DashboardLayout>
      <JobListPage />
    </DashboardLayout>
  );
}