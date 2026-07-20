import React, { useState } from "react";
import { Box, Container, Typography, Collapse, Button } from "@mui/material";
import { Link } from "react-router-dom";

const COLORS = {
  navy: "#0A2647",
  teal: "#2F6F6A",
  gold: "#C9A227",
  bodyInk: "#4B5768",
  bg: "#FAFAF8",
  border: "#E4E2DC",
};

const FONT_DISPLAY = `"Playfair Display", "Georgia", serif`;
const FONT_UI = `"Inter", "Helvetica Neue", Arial, sans-serif`;

// Matches the padding used across every other page
const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

const ChevronIcon = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      flexShrink: 0,
    }}
  >
    <path d="M6 9l6 6 6-6" stroke={COLORS.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FAQS = [
  {
    q: "What services does One Stop Solution provide?",
    a: "We offer end-to-end HR services — permanent and contract recruitment, payroll outsourcing, statutory compliance, HR outsourcing, corporate training, and post-placement support — all under one roof.",
  },
  {
    q: "Do you specialise in any particular industry?",
    a: "Yes. We run a dedicated Jewellery Industry vertical covering gold & diamond showrooms, manufacturers and export houses, alongside broad coverage across IT, Manufacturing, Healthcare, Retail, BFSI, FMCG, Hospitality, Logistics and more.",
  },
  {
    q: "Which locations do you recruit for?",
    a: "We're headquartered in Mumbai and recruit pan-India across 40+ cities, with the ability to support multi-location hiring drives for national and regional clients.",
  },
  {
    q: "How long does a typical closure take?",
    a: "Most standard roles close within 2–4 weeks. Bulk hiring, executive search or niche jewellery-industry roles may take slightly longer depending on scope and specificity.",
  },
  {
    q: "Do you charge candidates any fee?",
    a: "No. Our services are completely free for candidates. Our fees are billed to the hiring employer only, never to the person we place.",
  },
  {
    q: "How do I submit my resume?",
    a: "You can upload your resume directly through our 'Apply for Jobs' page, or email it to hr@1stopsolution.net.in with the role you're interested in.",
  },
  {
    q: "What formats are accepted for resume upload?",
    a: "We accept PDF, DOC and DOCX formats. For best results, keep your resume under 5MB and ensure contact details are on the first page.",
  },
  {
    q: "How do employers raise a hiring requirement?",
    a: "Employers can share a role brief via our 'Hire Employees' / 'Post a Requirement' form, or reach out directly to our team — a dedicated account manager will follow up within 24 hours.",
  },
  {
    q: "Do you offer replacement guarantee?",
    a: "Yes, we offer a replacement guarantee window on most permanent placements should a candidate not complete the agreed probation period, subject to the terms in our service agreement.",
  },
  {
    q: "How is payroll outsourcing priced?",
    a: "Payroll outsourcing is typically priced on a per-employee, per-month basis, scaled to headcount and the complexity of statutory requirements involved. We'll share a custom quote after understanding your setup.",
  },
  {
    q: "Can you handle multi-state statutory compliance?",
    a: "Yes. Our compliance team manages PF, ESIC, Professional Tax, Labour Law, Factory Act and Shop & Establishment requirements across multiple states, keeping filings accurate and on schedule.",
  },
  {
    q: "Do you conduct background verification (BGV)?",
    a: "Yes, we offer background verification as part of our placement and HR outsourcing services, covering employment history, education and reference checks.",
  },
   {
    q: "Can you help with campous hiring",
    a: "Yes. We run structured campus drives — from pre-placement talks to online assessments, PI and offer roll-out — across engineering, management and vocational institutes.",
  },
  {
    q: "What is RPO and do you offer it?",
    a: "Recruitment Process Outsourcing (RPO) means we manage your entire hiring function — sourcing, screening, coordination and reporting — as an extension of your internal team. Yes, we offer this for clients with sustained hiring volume.",
  },
  {
    q: "Do you support blue-collar and factory hiring?",
    a: "Yes. Alongside white-collar and executive roles, we run dedicated blue-collar and factory-floor hiring drives for manufacturing, logistics and warehousing clients.",
  },
  {
    q: "What roles do you fill in the Jewellery industry?",
    a: "We place sales executives, store managers, counter sales staff, gold appraisers, diamond graders, CAD designers and merchandisers across jewellery manufacturers, retail chains and showrooms.",
  },
  {
    q: "Do you handle senior leadership hiring?",
    a: "Yes, our executive search practice covers CXO, director and senior leadership mandates, run with a discreet, targeted search process separate from our high-volume recruitment desk.",
  },
  {
    q: "How do you screen candidates?",
    a: "Every candidate goes through resume screening, a structured telephonic or video interview, and role-specific assessment where applicable, before being shortlisted to the client.",
  },
  {
    q: "Are your services available for startups and SMEs?",
    a: "Absolutely. We work with businesses of every size — from early-stage startups hiring their first few employees to large enterprises running high-volume recruitment.",
  },
  {
    q: "How do I contact One Stop Solution directly?",
    a: "You can call us at +91 81696 25342, email hr@1stopsolution.net.in, or visit our office in Dadar East, Mumbai. Our team typically responds within 24 hours.",
  },
];

function FAQItem({ index, q, a }) {
  const [open, setOpen] = useState(false);
  const isLast = index === FAQS.length - 1;

  return (
    <Box sx={{ borderBottom: isLast ? "none" : `1px solid ${COLORS.border}` }}>
      <Box
        onClick={() => setOpen((v) => !v)}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: 2, md: 3 },
          py: { xs: 3, md: 3.5 },
          cursor: "pointer",
          "&:hover .faq-q": { color: COLORS.teal },
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 700,
            color: COLORS.gold,
            letterSpacing: "1px",
            minWidth: 28,
            pt: { xs: "6px", md: "10px" },
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Typography>

        <Typography
          className="faq-q"
          sx={{
            flex: 1,
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            color: COLORS.navy,
            lineHeight: 1.3,
            transition: "color 0.25s ease",
          }}
        >
          {q}
        </Typography>

        <Box sx={{ pt: { xs: "6px", md: "10px" } }}>
          <ChevronIcon open={open} />
        </Box>
      </Box>

      <Collapse in={open} timeout={300} unmountOnExit>
        <Box sx={{ pb: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              fontFamily: FONT_UI,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: 1.8,
              color: COLORS.bodyInk,
              maxWidth: 720,
            }}
          >
            {a}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}

function FAQHero() {
  return (
    <Container maxWidth="xl" sx={{ px: sidePad }}>
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 10 } }}>
        <Typography
          sx={{
            fontFamily: FONT_UI,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: COLORS.bodyInk,
            mb: 2,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            color: COLORS.navy,
            lineHeight: 1.15,
            fontSize: { xs: 40, sm: 56, md: 68 },
          }}
        >
          The{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: COLORS.teal }}>
            practical stuff
          </Box>{" "}
          — answered.
        </Typography>
      </Box>
    </Container>
  );
}

function FAQCTA() {
  return (
    <Container maxWidth="xl" sx={{ px: sidePad, py: { xs: 8, md: 10 } }}>
      <Box
        sx={{
          border: `1px solid ${COLORS.border}`,
          textAlign: "center",
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT_UI,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: COLORS.teal,
            mb: 2,
          }}
        >
          Still have questions?
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            fontSize: { xs: "28px", md: "38px" },
            color: COLORS.navy,
            mb: 4,
          }}
        >
          Talk to our HR team directly.
        </Typography>
        <Button
          component={Link}
          to="/hire-employees"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: "15px",
            color: "#fff",
            background: COLORS.navy,
            borderRadius: "4px",
            px: 4,
            py: 1.4,
            "&:hover": { background: "#0d2f57" },
          }}
        >
          Contact HR
        </Button>
      </Box>
    </Container>
  );
}

export default function FAQ() {
  return (
    <Box sx={{ bgcolor: COLORS.bg }}>
      <FAQHero />

      <Container maxWidth="xl" sx={{ px: sidePad, pb: { xs: 4, md: 6 } }}>
        <Box>
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} index={i} q={item.q} a={item.a} />
          ))}
        </Box>
      </Container>

      <FAQCTA />
    </Box>
  );
}