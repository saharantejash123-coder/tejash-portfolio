import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Tejash Saharan — Blood Donor, Notes App, and I-Republic. Built with HTML, CSS, JavaScript and React.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Built with curiosity."
        intro="Each project taught me something new. They're small, honest, and made with care — the first steps of a long building journey."
      />
      <section className="py-12">
        <ProjectsGrid />
      </section>
    </>
  );
}
