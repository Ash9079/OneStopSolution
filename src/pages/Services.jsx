import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Fab,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const COLORS = {
  navy: "#0F2A4A",
  teal: "#2E7D6E",
  gold: "#C9A02A",
  bgLight: "#F3F5F7",
  bgWhite: "#FFFFFF",
  textMuted: "#5B6472",
  divider: "#E4E7EB",
};

const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

// `slug` must match the anchors used on Home.jsx service cards
// and Footer.jsx "SERVICES" links (/services#slug).
const PRACTICES = [
  {
    number: "01",
    slug: "placement-services",
    icon: GroupsOutlinedIcon,
    title: "Placement Services",
    description: "Curated talent for permanent, contract and executive roles across India.",
    columns: [
      ["Permanent Recruitment", "Bulk Hiring", "Campus Recruitment", "Non-IT Recruitment", "Healthcare Recruitment", "Retail Recruitment", "Finance Recruitment", "Blue Collar Recruitment"],
      ["Contract Staffing", "Executive Search", "IT Recruitment", "Manufacturing Recruitment", "Hospitality Recruitment", "Sales Recruitment", "Jewellery Industry Recruitment"],
    ],
    background: "white",
  },
  {
    number: "02",
    slug: "payroll-services",
    icon: AssignmentOutlinedIcon,
    title: "Payroll Services",
    description: "End-to-end payroll operations, statutory-ready and audit-friendly.",
    columns: [
      ["Salary Processing", "Payslip Generation", "Leave Management", "Full & Final Settlement"],
      ["Payroll Outsourcing", "Attendance Management", "Bonus Processing", "Tax Calculation"],
    ],
    background: "light",
  },
  {
    number: "03",
    slug: "hr-compliance",
    icon: VerifiedUserOutlinedIcon,
    title: "HR Compliance",
    description: "Stay fully compliant with Indian labour and statutory regulations.",
    columns: [
      ["PF Compliance", "Professional Tax", "Factory Act", "Minimum Wages Compliance", "HR Documentation"],
      ["ESIC Compliance", "Labour Law Compliance", "Shop & Establishment Registration", "Contract Labour Compliance"],
    ],
    background: "white",
  },
  {
    number: "04",
    slug: "hr-outsourcing",
    icon: ApartmentOutlinedIcon,
    title: "HR Outsourcing",
    description: "Your extended HR team policies, audits, performance and consulting.",
    columns: [
      ["HR Policies", "HR Audit", "Recruitment Process"],
      ["Employee Handbook", "Performance Management", "HR Consulting"],
    ],
    background: "light",
  },
  {
    number: "05",
    slug: "corporate-training",
    icon: SchoolOutlinedIcon,
    title: "Corporate Training",
    description: "Practical, outcome-driven training for teams that need to perform.",
    columns: [
      ["Soft Skills", "Personality Development", "Leadership Development", "Communication Skills"],
      ["Interview Skills", "Sales Training", "HR Training", "Workplace Ethics"],
    ],
    background: "white",
  },
  {
    number: "06",
    slug: "post-placement-services",
    icon: TrendingUpOutlinedIcon,
    title: "Post Placement Services",
    description: "We don't disappear after the offer letter we stay engaged.",
    columns: [
      ["Candidate Follow-up", "Replacement Support", "Candidate Feedback"],
      ["Employee Retention", "Employer Feedback"],
    ],
    background: "light",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 28 }) {
  const [ref, inView] = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}

function ChecklistColumn({ items }) {
  return (
    <Stack spacing={0} sx={{ height: "100%" }}>
      {items.map((item, idx) => (
        <Box
          key={item}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            py: 1.75,
            borderBottom: idx === items.length - 1 ? "none" : `1px solid ${COLORS.divider}`,
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 19, color: COLORS.gold, flexShrink: 0, mt: "2px" }} />
          <Typography sx={{ fontSize: { xs: "0.95rem", md: "1.05rem" }, color: COLORS.navy, fontWeight: 500, lineHeight: 1.5 }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

const INTRO_LEFT_TITLES = ["Placement Services", "HR Compliance", "Corporate Training"];

function PracticeSection({ practice }) {
  const Icon = practice.icon;
  const bg = practice.background === "light" ? COLORS.bgLight : COLORS.bgWhite;
  const introLeft = INTRO_LEFT_TITLES.includes(practice.title);
  const reverse = !introLeft;

  return (
    <Box id={practice.slug} sx={{ backgroundColor: bg, py: { xs: 6, md: 9 }, scrollMarginTop: "88px" }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
            alignItems: "flex-start",
            gap: { xs: 5, md: 8 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "33.333%" }, flexShrink: 0 }}>
            <Reveal>
              <Icon sx={{ fontSize: 40, color: COLORS.gold, mb: 2 }} />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", color: COLORS.teal, mb: 1.5 }}>
                PRACTICE {practice.number}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  color: COLORS.navy,
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                {practice.title}
              </Typography>
              <Typography sx={{ color: COLORS.textMuted, fontSize: "1rem", lineHeight: 1.6 }}>
                {practice.description}
              </Typography>
            </Reveal>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "66.666%" } }}>
            <Reveal delay={0.12}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 0, sm: 6 } }}>
                {practice.columns.map((col, idx) => (
                  <Box key={idx} sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 24px)" }, minWidth: 240 }}>
                    <ChecklistColumn items={col} />
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function Hero() {
  return (
    <Box sx={{ backgroundColor: COLORS.bgLight, py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Reveal>
          <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", color: COLORS.teal, mb: 2 }}>
            OUR SERVICES
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              color: COLORS.navy,
              lineHeight: 1.2,
              maxWidth: 900,
              mb: 3,
            }}
          >
            Six practices.{" "}
            <Box component="span" sx={{ color: COLORS.teal, fontStyle: "italic" }}>
              One partner.
            </Box>{" "}
            Zero handoffs.
          </Typography>
          <Typography sx={{ color: COLORS.textMuted, fontSize: { xs: "1rem", md: "1.15rem" }, maxWidth: 640, lineHeight: 1.6 }}>
            From talent discovery to payroll processing to statutory compliance
            everything a growing business needs to hire, pay and stay compliant.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

function FloatingCta() {
  return (
    <Fab
      aria-label="Contact us"
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        backgroundColor: COLORS.navy,
        color: "#fff",
        "&:hover": { backgroundColor: COLORS.navy, opacity: 0.9 },
      }}
    >
      <AddIcon />
    </Fab>
  );
}

export default function Services() {
  const location = useLocation();

  // Scroll to the matching practice section whenever we land on /services#slug
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Box sx={{ backgroundColor: COLORS.bgWhite }}>
      <Hero />
      {PRACTICES.map((practice) => (
        <PracticeSection key={practice.number} practice={practice} />
      ))}
      <FloatingCta />
    </Box>
  );
}