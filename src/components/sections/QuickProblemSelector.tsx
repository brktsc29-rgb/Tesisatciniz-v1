import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { quickProblems } from '../../data/quickProblems';

export function QuickProblemSelector() {
  return (
    <section aria-labelledby="quick-problem-heading" className="py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="quick-problem-heading" title="Hangi konuda yardıma ihtiyacınız var?" />

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {quickProblems.map((problem) => {
            const Icon = problem.icon;
            return (
              <li key={problem.id}>
                <Link
                  to={problem.href}
                  className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border-light bg-white p-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-teal hover:shadow-md sm:p-5"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 text-navy" />
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="text-sm font-bold text-ink sm:text-[15px]">
                      {problem.label}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal text-teal transition-colors duration-150 group-hover:bg-teal group-hover:text-white">
                      <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
