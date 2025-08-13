import LessonPage from "@/components/course/LessonPage";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface PageProps {
  params: { id: string; lessonId: string };
}

export default function Page({ params }: PageProps) {
  return (
    <DashboardLayout>
      <LessonPage courseId={params.id} lessonId={params.lessonId} />
    </DashboardLayout>
  );
}