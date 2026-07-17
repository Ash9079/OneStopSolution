import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

// ---------------------------------------------------------------------------
// Palette (single-color theming, no gradients)
// ---------------------------------------------------------------------------
const COLORS = {
  navy: "#0F2A4A",
  teal: "#2E7D6E",
  gold: "#C9A02A",
  bgLight: "#F3F5F7",
  bgWhite: "#FFFFFF",
  textMuted: "#5B6472",
  divider: "#E4E7EB",
};

// ---------------------------------------------------------------------------
// Data six practices
// ---------------------------------------------------------------------------
const PRACTICES = [
  {
    number: "01",
    icon: GroupsOutlinedIcon,
    title: "Placement Services",
    description:
      "Curated talent for permanent, contract and executive roles across India.",
    columns: [
      [
        "Permanent Recruitment",
        "Bulk Hiring",
        "Campus Recruitment",
        "Non-IT Recruitment",
        "Healthcare Recruitment",
        "Retail Recruitment",
        "Finance Recruitment",
        "Blue Collar Recruitment",
      ],
      [
        "Contract Staffing",
        "Executive Search",
        "IT Recruitment",
        "Manufacturing Recruitment",
        "Hospitality Recruitment",
        "Sales Recruitment",
        "Jewellery Industry Recruitment",
      ],
    ],
    background: "white",
  },
  {
    number: "02",
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

// ---------------------------------------------------------------------------
// Scroll reveal fade + slide up as content enters the viewport
// ---------------------------------------------------------------------------
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion show content immediately
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

// ---------------------------------------------------------------------------
// Checklist column
// ---------------------------------------------------------------------------
function ChecklistColumn({ items }) {
  return (
    <Stack spacing={0}>
      {items.map((item, idx) => (
        <Box
          key={item}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            py: 1.75,
            borderBottom: idx === items.length - 1 ? "none" : `1px solid ${COLORS.divider}`,
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: 19, color: COLORS.gold, flexShrink: 0, strokeWidth: 0.5 }}
          />
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: COLORS.navy,
              fontWeight: 500,
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// One practice section
// ---------------------------------------------------------------------------
// Practices where intro sits LEFT and checklist sits RIGHT on desktop.
// All other practices keep checklist LEFT / intro RIGHT.
const INTRO_LEFT_TITLES = ["Placement Services", "HR Compliance", "Corporate Training"];

function PracticeSection({ practice }) {
  const Icon = practice.icon;
  const bg = practice.background === "light" ? COLORS.bgLight : COLORS.bgWhite;
  const introLeft = INTRO_LEFT_TITLES.includes(practice.title);
  const reverse = !introLeft;

  return (
    <Box sx={{ backgroundColor: bg, py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          {/* Intro column */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 1, md: reverse ? 2 : 1 },
            }}
          >
            <Reveal>
              <Icon sx={{ fontSize: 40, color: COLORS.gold, mb: 2 }} />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: COLORS.teal,
                  mb: 1.5,
                }}
              >
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
          </Grid>

          {/* Checklist columns */}
          <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: reverse ? 1 : 2 } }}>
            <Reveal delay={0.12}>
              <Grid container spacing={{ xs: 0, sm: 4 }}>
                {practice.columns.map((col, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <ChecklistColumn items={col} />
                  </Grid>
                ))}
              </Grid>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <Box sx={{ backgroundColor: COLORS.bgLight, py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: COLORS.teal,
              mb: 2,
            }}
          >
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
          <Typography
            sx={{
              color: COLORS.textMuted,
              fontSize: { xs: "1rem", md: "1.15rem" },
              maxWidth: 640,
              lineHeight: 1.6,
            }}
          >
            From talent discovery to payroll processing to statutory compliance
            everything a growing business needs to hire, pay and stay compliant.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Floating action button
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export default function Services() {
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