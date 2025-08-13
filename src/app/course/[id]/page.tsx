import CoursePage from "@/components/course/CoursePage";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <DashboardLayout>
      <CoursePage courseId={params.id} />
    </DashboardLayout>
  );
}