import activities from '@/data/activities-colegios.json';
import ActivityDetail, { activityMetadata } from '../../_sections/ActivityDetail';

export const dynamicParams = false;

export async function generateStaticParams() {
    return activities.map((activity) => ({ slug: activity.slug.slice(1) }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return activityMetadata(activities, slug, true);
}

export default async function ActivityPage({ params }) {
    const { slug } = await params;
    return <ActivityDetail activities={activities} slug={slug} isColegio />;
}
