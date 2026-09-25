import { Routes, Route } from 'react-router'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import ProgramsPage from '@/pages/ProgramsPage'
import CampaignsPage from '@/pages/CampaignsPage'
import StoriesPage from '@/pages/StoriesPage'
import StoryDetailPage from '@/pages/StoryDetailPage'
import AboutPage from '@/pages/AboutPage'
import NewsPage from '@/pages/NewsPage'
import NewsDetailPage from '@/pages/NewsDetailPage'
import DonatePage from '@/pages/DonatePage'
import ContactPage from '@/pages/ContactPage'
import GetInvolvedPage from '@/pages/GetInvolvedPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:id" element={<StoryDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
