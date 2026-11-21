import { notFound } from 'next/navigation';
import HeroActivitySection from './HeroActivity.section';
import ActivityInformationSection from './ActivityInformationSection.section';
import OthersActivitiesSection from './OthersActivities.section';
import CommunitySection from '@/sections/Community.section';
import JsonLd from '@/components/JsonLd';
import { activityPath, activitySchema, pageMetadata } from '@/lib/seo';

// Lógica compartida entre /actividades/[slug] y /actividades/colegios/[slug]
export const findActivity = (activities, slug) => activities.find((a) => a.slug === `/${slug}`);

export const activityMetadata = (activities, slug, isColegio) => {
  const activity = findActivity(activities, slug);

  if (!activity) {
    return {
      title: 'Actividad no encontrada | Somital Aventuras',
      description: 'La actividad que buscas no existe o ha sido movida.',
    };
  }

  return pageMetadata({
    title: activity.seo.title,
    description: activity.seo.description,
    path: activityPath(activity, isColegio),
    image: activity.imageSrc[0],
  });
};

const ActivityDetail = ({ activities, slug, isColegio }) => {
  const activity = findActivity(activities, slug);

  if (!activity) {
    notFound();
  }

  const otherActivities = activities.filter((a) => a.slug !== activity.slug);

  return (
    <main>
      <JsonLd data={activitySchema(activity, isColegio)} />

      <HeroActivitySection activity={activity} isColegio={isColegio} />

      <ActivityInformationSection activity={activity} isColegio={isColegio} />

      <CommunitySection label={`actividad${activity.slug}`} />

      <OthersActivitiesSection otherActivities={otherActivities} isColegio={isColegio} />
    </main>
  );
};

export default ActivityDetail;
