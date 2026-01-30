"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Vitaliy"
          navItems={[
            { name: "About", id: "about" },
            { name: "Community", id: "features" },
            { name: "Stories", id: "testimonial" },
            { name: "Events", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Celebrate Vitaliy - The Most Fabulous Pride Icon"
          description="Join a vibrant community celebrating authenticity, courage, and the power of being unapologetically yourself. Vitaliy represents pride, joy, and the spirit of LGBTQ+ celebration."
          background={{ variant: "sparkles-gradient" }}
          tag="Pride Celebration"
          tagIcon={Sparkles}
          buttons={[
            { text: "Join the Movement", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/young-people-celebrating-pride-month_23-2149333079.jpg"
          imageAlt="Vibrant pride celebration with rainbow colors and joyful community"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="Who Is Vitaliy?"
          description="A beacon of pride and authenticity in the LGBTQ+ community"
          tabs={[
            {
              id: "story",              label: "The Story",              description: "Vitaliy's journey is one of self-discovery, courage, and celebration. From embracing authenticity to becoming an icon of pride, Vitaliy represents the transformative power of living true to oneself. The story is about breaking barriers, challenging norms, and inspiring others to celebrate their identity."
            },
            {
              id: "mission",              label: "Our Mission",              description: "We exist to celebrate LGBTQ+ pride, create inclusive spaces, and empower individuals to embrace their authentic selves. Through community events, storytelling, and support networks, we foster a world where everyone feels safe, valued, and celebrated for who they truly are."
            },
            {
              id: "vision",              label: "Our Vision",              description: "A world where LGBTQ+ individuals thrive without fear or judgment. We envision communities where pride is celebrated year-round, where diversity is seen as strength, and where every person can live authentically and joyfully. Together, we're building that future."
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/close-up-happy-friends-work_23-2149128413.jpg"
          imageAlt="Diverse community gathering in celebration of pride and authenticity"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          title="Why Join the Vitaliy Movement?"
          description="Experience community, celebration, and connection like never before"
          features={[
            {
              id: "authenticity",              label: "Authenticity",              title: "Be Yourself Fearlessly",              items: [
                "Express your true identity",                "No judgment, pure celebration",                "Connect with like-minded souls"
              ]
            },
            {
              id: "community",              label: "Community",              title: "Find Your Tribe",              items: [
                "Support networks that care",                "Celebrate together",                "Build lasting friendships"
              ]
            },
            {
              id: "empowerment",              label: "Empowerment",              title: "Rise and Shine",              items: [
                "Share your story",                "Inspire others",                "Create change"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTen
          title="Stories from Our Community"
          description="Real voices celebrating pride, authenticity, and connection"
          testimonials={[
            {
              id: "1",              title: "Finding My Voice Through Vitaliy",              quote: "Vitaliy showed me that pride is not just an event—it's a way of life. I found the courage to be myself, and in doing so, I found a beautiful community that celebrates every part of me.",              name: "Marcus",              role: "Community Advocate",              imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1600.jpg",              imageAlt: "Marcus, Community Advocate"
            },
            {
              id: "2",              title: "A Safe Space to Belong",              quote: "Coming to Vitaliy events was transformative. For the first time, I felt completely accepted for who I am. The community's warmth and authenticity changed my life.",              name: "Alex",              role: "Creative Director",              imageSrc: "https://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "Alex, Creative Director"
            },
            {
              id: "3",              title: "Celebrating Our Love",              quote: "Vitaliy isn't just about individual celebration—it's about celebrating love in all its forms. The inclusive events have strengthened my relationships and my sense of belonging.",              name: "Jordan",              role: "Event Coordinator",              imageSrc: "https://img.b2bpic.net/free-photo/smiling-woman_23-2147615403.jpg",              imageAlt: "Jordan, Event Coordinator"
            },
            {
              id: "4",              title: "Inspiration to Live Authentically",              quote: "Vitaliy's message is simple but powerful: be yourself. That permission gave me the strength to live authentically and inspire others to do the same.",              name: "Casey",              role: "Artist & Activist",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-bearded-smiling-black-man-wool-suit_613910-16049.jpg",              imageAlt: "Casey, Artist & Activist"
            },
            {
              id: "5",              title: "Breaking Barriers Together",              quote: "The Vitaliy community showed me that pride is strength. Together, we're breaking down barriers and creating a world where LGBTQ+ individuals can thrive.",              name: "Taylor",              role: "Social Change Agent",              imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1576.jpg",              imageAlt: "Taylor, Social Change Agent"
            },
            {
              id: "6",              title: "Living My Truth",              quote: "Vitaliy gave me permission to stop hiding. In this community, I found not just acceptance, but celebration. I've never felt more alive.",              name: "Riley",              role: "Entrepreneur",              imageSrc: "https://img.b2bpic.net/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg",              imageAlt: "Riley, Entrepreneur"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Latest Pride Stories & Events"
          description="Stay updated with upcoming celebrations, community spotlights, and inspiring moments"
          blogs={[
            {
              id: "1",              category: ["Event", "Celebration"],
              title: "Annual Pride Festival Returns Bigger Than Ever",              excerpt: "Join us for three days of celebration, music, art, and community connection. Mark your calendars for the most fabulous event of the year.",              imageSrc: "https://img.b2bpic.net/free-photo/young-people-celebrating-pride-month_23-2149333019.jpg",              imageAlt: "Pride festival celebration with vibrant colors and dancing",              authorName: "Vitaliy Team",              date: "March 15, 2025"
            },
            {
              id: "2",              category: ["Community", "Support"],
              title: "Youth Empowerment Program Launches",              excerpt: "New initiatives designed to support LGBTQ+ youth in finding confidence, community, and their voice. Applications are now open.",              imageSrc: "https://img.b2bpic.net/free-photo/friends-drinking-tailgate-party_53876-132076.jpg",              imageAlt: "Youth community support program",              authorName: "Community Team",              date: "March 10, 2025"
            },
            {
              id: "3",              category: ["Inspiration", "Stories"],
              title: "Vitaliy's Impact: 5 Years of Celebration",              excerpt: "Reflecting on five transformative years of building community, breaking barriers, and celebrating authenticity. Here's what we've accomplished together.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-happy-friends-work_23-2149128413.jpg",              imageAlt: "Five years of community celebration",              authorName: "Leadership",              date: "March 5, 2025"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Pride Community"
          description="Subscribe to our newsletter and be the first to hear about celebrations, events, and stories from the Vitaliy community. Let's celebrate together."
          useInvertedBackground="noInvert"
          imageSrc="https://img.b2bpic.net/free-photo/friends-drinking-tailgate-party_53876-132076.jpg"
          imageAlt="Community coming together in celebration"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. You can unsubscribe anytime. By subscribing, you agree to receive updates about pride events and community news."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://img.b2bpic.net/free-photo/three-playful-couples-having-great-fun_329181-17916.jpg"
          imageAlt="Rainbow pride celebration footer image"
          columns={[
            {
              title: "Community",              items: [
                { label: "About Vitaliy", href: "about" },
                { label: "Our Mission", href: "about" },
                { label: "Join Us", href: "contact" }
              ]
            },
            {
              title: "Events",              items: [
                { label: "Upcoming Events", href: "blog" },
                { label: "Past Celebrations", href: "blog" },
                { label: "Event Calendar", href: "blog" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Stories", href: "testimonial" },
                { label: "Support", href: "contact" },
                { label: "Connect", href: "contact" }
              ]
            }
          ]}
          logoText="Vitaliy"
          copyrightText="© 2025 Vitaliy Pride Community. Celebrating authenticity, love, and joy."
        />
      </div>
    </ThemeProvider>
  );
}