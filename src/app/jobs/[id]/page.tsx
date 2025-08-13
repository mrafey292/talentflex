import JobDetailsPage from "@/components/jobs/JobDetailsPage";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function JobDetailsRoute() {
  return (
    <DashboardLayout>
      <JobDetailsPage />
    </DashboardLayout>
  );
}