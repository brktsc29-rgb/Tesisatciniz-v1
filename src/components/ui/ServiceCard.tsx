import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types/service';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-shadow duration-150 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/75">
        {service.cardDescription}
      </p>
      <Link
        to={service.path}
        className="mt-5 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-teal transition-colors duration-150 hover:text-blue"
      >
        Hizmeti İncele
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}
