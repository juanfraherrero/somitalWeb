import { notFound } from 'next/navigation';
import activities from '@/data/activities-colegios.json';
import HeroActivitySection from '../../_sections/HeroActivity.section';
import ActivityInformationSection from '../../_sections/ActivityInformationSection.section';
import OthersActivitiesSection from '../../_sections/OthersActivities.section';
import Head from 'next/head';



export async function generateStaticParams() {
    return activities.map((activity) => ({
        slug: activity.slug.slice(1),
        schema: activity.seo.schemaJsonLd
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const activity = activities.find((a) => a.slug === `/${slug}`);

    if (!activity) {
        return {
            title: 'Actividad no encontrada | Somital Aventuras',
            description: 'La actividad que buscas no existe o ha sido movida.',
        };
    }

    return {
        title: activity.seo.title,
        description: activity.seo.description,
        canonical: activity.seo.canonical,
    };
}

export default async function ActivityPage({ params }) {
    const { slug, schema } = await params;
    const activity = activities.find((a) => a.slug === `/${slug}`);

    if (!activity) {
        notFound();
    }

    const otherActivities = activities.filter((a) => a.slug !== `/${slug}`);

    return (
        <main className="min-h-screen">
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>

            {/* Hero Section */}
            <HeroActivitySection activity={activity} />

            <ActivityInformationSection activity={activity} />

            <OthersActivitiesSection otherActivities={otherActivities} />
        </main>
    );
}