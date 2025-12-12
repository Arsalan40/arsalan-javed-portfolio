import { notFound } from "next/navigation";
import { projectsData, type Project } from "@/data/projects";
import Container from "@/components/Container";
import { ArrowLeft, Calendar, Users, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study | Arsalan Javed`,
    description: project.description,
    keywords: [project.title, ...project.technologies, project.industry, "case study"],
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Back Button */}
          <Link 
            href="/#projects-portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {project.industry}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Briefcase className="text-primary flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm text-gray-500">Role</div>
                  <div className="font-semibold text-white">{project.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Calendar className="text-secondary flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-white">{project.duration}</div>
                </div>
              </div>
              
              {project.teamSize && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Users className="text-accent flex-shrink-0" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Team</div>
                    <div className="font-semibold text-white">{project.teamSize}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Client */}
          <div className="glass-effect rounded-2xl p-6 md:p-8 border border-primary/10">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Client</h3>
            <p className="text-xl font-semibold text-white">{project.client}</p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">The Challenge</h2>
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border">
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">The Solution</h2>
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border space-y-4">
              {project.solution.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Results & Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div 
                  key={index}
                  className="glass-effect rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <TrendingUp className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{result.metric}</div>
                      <div className="text-2xl font-bold text-primary">{result.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Key Features Delivered</h2>
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border">
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-gray-300">
                    <span className="text-primary mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/10 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Interested in Similar Results?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss how I can help transform your business processes and deliver measurable impact.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-semibold text-black hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
