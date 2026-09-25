import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import Campaigns from '@/sections/Campaigns'
import DonateCTA from '@/sections/DonateCTA'
import { useLanguage } from '@/context/LanguageContext'

export default function CampaignsPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.campaigns.eyebrow}
        title={t.campaigns.headline}
        description={t.campaigns.subtext}
      />
      <Campaigns hideHeader />
      <DonateCTA />
    </PageLayout>
  )
}
