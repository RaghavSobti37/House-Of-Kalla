import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { portfolioProjects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/$projectSlug")({
  loader: ({ params }) => {
    const project = portfolioProjects.find((item) => item.slug === params.projectSlug);
    if (!project) {
      throw notFound();
    }
    return project;
  },
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const related = portfolioProjects.filter(
    (item) => item.category === project.category && item.slug !== project.slug,
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section>
        <img
          src={project.image}
          alt={project.name}
          className="h-[64vh] min-h-[430px] w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-14 md:px-10">
        <p className="text-[12px] font-semibold tracking-[0.18em] text-gold">
          {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-2 text-xl text-black">{project.service}</p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pb-16 md:px-10">
        <div className="project-fade relative aspect-[16/9] overflow-hidden bg-ink">
          {project.gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.name} interior view ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ animationDelay: `${index * 4}s` }}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-gold">
            VIEW MORE LIKE THIS
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {(related.length ? related : portfolioProjects.filter((item) => item.slug !== project.slug))
              .slice(0, 2)
              .map((item) => (
                <Link
                  key={item.slug}
                  to="/portfolio/$projectSlug"
                  params={{ projectSlug: item.slug }}
                  className="group grid gap-4 md:grid-cols-[160px_1fr] md:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/3] w-full object-cover opacity-85 transition group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
                    <p className="mt-1 text-sm text-gold">{item.service}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
