// src/pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Homebg1 from "../assets/Homebg1.jpg"
import Homebg2 from "../assets/Homebg2.jpg"
import Homebg3 from "../assets/Homebg3.jpg"
import Home1 from "../assets/Home1.jpg"
import Home2 from "../assets/Home2.jpg"
import Home3 from "../assets/Home3.jpg"
import Home4 from "../assets/Home4.jpg"
import Home5 from "../assets/Home5.jpg"
import Home6 from "../assets/Home6.jpg"
import Home7 from "../assets/Home7.jpg"
import Home8 from "../assets/Home8.jpg"


/* ---------------- Inline SVG Icons (no @mui/icons-material) ---------------- */
const ArrowRight = ({ color = "#D4A017", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 14h14M13 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const UsersIcon = ({ color = "#3A7D6E" }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="3" stroke={color} strokeWidth="1.5" />
    <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17" cy="8.5" r="2.3" stroke={color} strokeWidth="1.4" />
    <path d="M15.5 15.2c2.6.3 4.5 2 4.5 4.6" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const ClipboardIcon = ({ color = "#3A7D6E" }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="4" width="14" height="17" rx="2" stroke={color} strokeWidth="1.5" />
    <rect x="8.5" y="2.5" width="7" height="3" rx="1" fill={color} />
    <path d="M8 11h8M8 15h8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const ShieldIcon = ({ color = "#3A7D6E" }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path d="M14 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 14l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DiamondIcon = ({ color = "#3A7D6E" }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path d="M4 8l4-5h8l4 5-8 14L4 8z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M4 8h18M9 3l3 5 3-5M9.5 8L14 20l2.5-14" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);
const BuildingIcon = ({ color = "#3A7D6E" }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="3" width="10" height="18" stroke={color} strokeWidth="1.5" />
    <rect x="14" y="9" width="6" height="14" stroke={color} strokeWidth="1.5" />
    <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const GradCapIcon = ({ color = "#3A7D6E" }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M2 8l10-4 10 4-10 4-10-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 10.5V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" stroke={color} strokeWidth="1.4" />
    <path d="M22 8v5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const TrendIcon = ({ color = "#3A7D6E" }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M3 17l6-6 4 4 8-9" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 6h6v6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M14 2l1.8 6.2L20 10l-6.2 1.8L14 18l-1.8-6.2L4 10l6.2-1.8L14 2z" fill="#D4A017" />
  </svg>
);
const QuoteMark = () => (
  <svg width="26" height="20" viewBox="0 0 32 24" fill="none">
    <path
      d="M3 24V15.5C3 9 6.5 4 13 1l2 3.5C11 7 9 9.7 9 13h6v11H3zM19 24V15.5C19 9 22.5 4 29 1l2 3.5C27 7 25 9.7 25 13h6v11H19z"
      fill="#D4A017"
    />
  </svg>
);
const PinIcon = ({ color = "#D4A017" }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M14 22s7-7.4 7-14.6A7 7 0 105 9.4C5 14.6 14 22 14 22z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="14" cy="9.4" r="2.4" stroke={color} strokeWidth="1.6" />
  </svg>
);

/* ---------------- Count-up hook (0 → target, triggers on scroll into view) ---------------- */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

const formatNum = (n) => n.toLocaleString("en-IN");

function CountStat({ target, suffix, comma = false, sx = {} }) {
  const [count, ref] = useCountUp(target);
  return (
    <Typography ref={ref} sx={sx}>
      {comma ? formatNum(count) : count}
      <Box component="span" sx={{ color: "#D4A017" }}>{suffix}</Box>
    </Typography>
  );
}

/* ---------------- Shared bits ---------------- */
const SectionLabel = ({ children, dark = false }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
    <Box sx={{ width: 28, height: 2, background: "#D4A017", flexShrink: 0 }} />
    <Typography sx={{ fontSize: { xs: "11px", sm: "14px" }, letterSpacing: { xs: "2px", sm: "3px" }, fontWeight: 600, color: dark ? "#B8C0CC" : "#B8901A" }}>
      {children}
    </Typography>
  </Box>
);
const backgrounds = [Homebg1, Homebg2, Homebg3];


const serif = "'Playfair Display', serif";
const sidePad = { xs: 2, sm: 4, md: 8, lg: 10 };

/* =========================================================
   1. HERO — fixed background image, fully responsive layout
========================================================= */
function Hero() {
const industries = ["MANUFACTURING", "IT", "HEALTHCARE", "BANKING", "HOSPITALITY", "LOGISTICS", "FMCG", "REAL ESTATE", "EDUCATION"];

const [currentBg, setCurrentBg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
    }, []);
  return (
    <Box
        sx={{
            minHeight: { xs: "auto", md: "100vh" },
            backgroundImage: `
            linear-gradient(rgba(10,38,71,0.85), rgba(10,38,71,0.75)),
            url(${backgrounds[currentBg]})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
      <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 10 }, px: sidePad }}>
        <SectionLabel dark>WE SECURE YOUR GROWTH</SectionLabel>
        <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "28px", sm: "40px", md: "56px", lg: "68px" }, lineHeight: 1.15, color: "#D8DEE7" }}>
          India's Trusted
        </Typography>
        <Typography
          sx={{ fontFamily: serif, fontStyle: "italic", fontWeight: 600, fontSize: { xs: "30px", sm: "42px", md: "58px", lg: "72px" }, color: "#E9CB6E", lineHeight: 1.15 }}
        >
          HR &amp; Placement
        </Typography>
        <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "28px", sm: "40px", md: "56px", lg: "68px" }, lineHeight: 1.15, mb: 3, color: "#D8DEE7" }}>
          Partner.
        </Typography>

        <Typography sx={{ fontSize: { xs: "15px", sm: "18px", md: "18px" }, color: "#D8DEE7", maxWidth: 620, mb: 4, lineHeight: 1.7 }}>
          Helping companies hire exceptional talent and helping professionals build successful careers — with a
          specialised practice for the <Box component="span" sx={{ color: "#D4A017", fontWeight: 600 }}>Jewellery Industry</Box>.
        </Typography>

        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: { xs: "wrap", lg: "nowrap" },
                gap: { xs: 3, md: 4 },
                mt: 5,
            }}
            >
            {/* Left Side - Buttons */}
            <Box
                sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1.5, sm: 2 },
                width: { xs: "100%", lg: "auto" },
                }}
            >
                <Button
                    component={Link}
                    to="/hire-employees"
                sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#0A2647",
                    background: "#D4A017",
                    px: { xs: 3, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: "0px",
                }}
                >
                Hire Employees
                </Button>

                <Button
                    component={Link}
                    to="/apply-for-jobs"
                sx={{
                    textTransform: "none",
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,.3)",
                    px: { xs: 3, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: "0px",
                }}
                >
                Apply for Jobs
                </Button>

                <Button
                    component={Link}
                    to="/apply-for-jobs"
                sx={{
                    textTransform: "none",
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,.3)",
                    px: { xs: 3, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: "0px",
                }}
                >
                Upload Resume
                </Button>

                <Button
                component={Link}
                to="/hire-employees"
                sx={{
                    textTransform: "none",
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#fff",
                }}
                endIcon={<ArrowRight color="#fff" />}
                >
                Contact HR
                </Button>
            </Box>

            {/* Right Side - Stats */}
            <Box
                sx={{
                display: "flex",
                gap: { xs: 1.5, sm: 2 },
                flexWrap: { xs: "wrap", sm: "nowrap" },
                width: { xs: "100%", lg: "auto" },
                }}
            >
                {[
                { target: 5, suffix: "K+", label: "PLACEMENTS" },
                { target: 300, suffix: "+", label: "CLIENTS" },
                { target: 98, suffix: "%", label: "CSAT" },
                ].map((s) => (
                <Box
                    key={s.label}
                    sx={{
                    flex: { xs: "1 1 calc(33.33% - 14px)", sm: "0 0 auto" },
                    minWidth: { xs: 100, sm: 130, md: 150, lg: 185 },
                    width: { sm: 130, md: 150, lg: 185 },
                    height: { xs: 100, sm: 115, md: 130 },
                    border: "1px solid rgba(255,255,255,.18)",
                    background: "rgba(255,255,255,.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: 1.5, sm: 2, md: 3 },
                    }}
                >
                    <CountStat
                    target={s.target}
                    suffix={s.suffix}
                    sx={{
                        fontFamily: serif,
                        fontSize: { xs: 22, sm: 26, md: 32 },
                        color: "#D4A017",
                    }}
                    />

                    <Typography
                    sx={{
                        mt: 1,
                        fontSize: { xs: 10, sm: 11, md: 14 },
                        letterSpacing: { xs: 2, sm: 3, md: 4 },
                        color: "rgba(255,255,255,.45)",
                    }}
                    >
                    {s.label}
                    </Typography>
                </Box>
                ))}
            </Box>
            </Box>
      </Container>

      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.15)", mt: { xs: 4, md: 6 }, py: 2, overflow: "hidden", whiteSpace: "nowrap" }}>
        <Box
          sx={{
            display: "inline-flex",
            gap: { xs: 3, sm: 5 },
            animation: "scrollMarquee 22s linear infinite",
            "@keyframes scrollMarquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
          }}
        >
          {[...industries, ...industries].map((ind, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: { xs: 3, sm: 5 } }}>
              <Typography sx={{ fontSize: { xs: "11px", sm: "13px" }, letterSpacing: { xs: "1px", sm: "2px" }, fontWeight: 600, color: "#B8C0CC" }}>{ind}</Typography>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#D4A017" }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* =========================================================
   2. WHO WE ARE
========================================================= */
function WhoWeAre() {
  const items = [
    { icon: <UsersIcon />, title: "Permanent Recruitment", desc: "From volume hiring to executive search across sectors." },
    { icon: <ClipboardIcon />, title: "Payroll Outsourcing", desc: "Salary, PF, ESIC, tax, F&F — accurate and on time." },
    { icon: <ShieldIcon />, title: "Statutory Compliance", desc: "PF · ESIC · PT · Labour Law · Factory Act · CLRA." },
    { icon: <DiamondIcon />, title: "Jewellery Specialists", desc: "Appraisers, graders, CAD designers, retail staff." },
  ];
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 14 }, px: sidePad }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 4, md: 6 } }}>
        <Box sx={{ flex: "1 1 380px" }}>
          <SectionLabel>WHO WE ARE</SectionLabel>
          <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "28px", sm: "34px", md: "48px" }, color: "#0A2647", lineHeight: 1.15 }}>
            Comprehensive HR &amp;
          </Typography>
          <Typography sx={{ fontFamily: serif, fontStyle: "italic", fontWeight: 600, fontSize: { xs: "28px", sm: "34px", md: "48px" }, color: "#3A7D6E", lineHeight: 1.15, mb: 3 }}>
            workforce solutions
          </Typography>
          <Typography sx={{ fontSize: { xs: "14.5px", sm: "18px" }, color: "#5C6B7A", lineHeight: 1.8, mb: 3, maxWidth: 480 }}>
            One Stop Solution is a full-spectrum HR consultancy delivering premium recruitment, payroll, statutory
            compliance, corporate training and post-placement support across India — with deep expertise in the
            Jewellery Industry.
          </Typography>

          <Box component={Link} to="/about" sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
            <Typography sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, color: "#0A2647" }}>Read the full company story</Typography>
            <ArrowRight color="#0A2647" />
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 480px", display: "flex", flexWrap: "wrap" }}>
          {items.map((item) => (
            <Box key={item.title} sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%" }, pl: 3, py: 2, borderLeft: "2px solid #D4A017", mb: { xs: 3, sm: 4 }, pr: 2 }}>
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "19px", sm: "21px" }, color: "#0A2647", mb: 1 }}>{item.title}</Typography>
              <Typography sx={{ fontSize: "14.5px", color: "#5C6B7A", lineHeight: 1.6 }}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

/* =========================================================
   3. SERVICES — CSS Grid so borders stay correct at any
      column count (1 / 2 / 3 columns depending on screen)
========================================================= */
function Services() {
  const services = [
    { icon: <UsersIcon />, num: "01", title: "Placement Services", slug: "placement-services", desc: "Curated talent for permanent, contract and executive roles across India." },
    { icon: <ClipboardIcon />, num: "02", title: "Payroll Services", slug: "payroll-services", desc: "End-to-end payroll operations, statutory-ready and audit-friendly." },
    { icon: <ShieldIcon />, num: "03", title: "HR Compliance", slug: "hr-compliance", desc: "Stay fully compliant with Indian labour and statutory regulations." },
    { icon: <BuildingIcon />, num: "04", title: "HR Outsourcing", slug: "hr-outsourcing", desc: "Your extended HR team — policies, audits, performance and consulting." },
    { icon: <GradCapIcon />, num: "05", title: "Corporate Training", slug: "corporate-training", desc: "Practical, outcome-driven training for teams that need to perform." },
    { icon: <TrendIcon />, num: "06", title: "Post Placement Services", slug: "post-placement-services", desc: "We don't disappear after the offer letter — we stay engaged." },
  ];
  return (
    <Box sx={{ background: "#F7F9FB", pt: { xs: 3, md: 5 }, pb: { xs: 6, sm: 8, md: 14 } }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", mb: { xs: 4, md: 6 }, gap: 2 }}>
          <Box>
            <SectionLabel>OUR SERVICES</SectionLabel>
            <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#0A2647", maxWidth: 640, lineHeight: 1.2 }}>
              Everything you need under one roof.
            </Typography>
          </Box>
          <Box component={Link} to="/services" sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
            <Typography sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, color: "#0A2647" }}>Explore all services</Typography>
            <ArrowRight color="#0A2647" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            border: "1px solid #E2E6EB",
            background: "#fff",
          }}
        >
          {services.map((s) => (
            <Box
              key={s.title}
              component={Link}
              to={`/services#${s.slug}`}
              sx={{
                p: { xs: 3, sm: 4 },
                border: "1px solid #E2E6EB",
                marginRight: "-1px",
                marginBottom: "-1px",
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
                transition: "background 0.3s ease",
                "&:hover": { background: "#0A2647" },
                "&:hover .service-title": { color: "#fff" },
                "&:hover .service-desc": { color: "#C4CBD4" },
                "&:hover .learn-more": { color: "#E9CB6E" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                {s.icon}
                <Typography sx={{ fontSize: "13px", color: "#A9B1BC", fontWeight: 600 }}>{s.num}</Typography>
              </Box>
              <Typography className="service-title" sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "20px", sm: "23px" }, color: "#0A2647", mb: 1.5, transition: "color 0.3s ease" }}>
                {s.title}
              </Typography>
              <Typography className="service-desc" sx={{ fontSize: "14.5px", color: "#5C6B7A", lineHeight: 1.7, mb: 3, transition: "color 0.3s ease" }}>
                {s.desc}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography className="learn-more" sx={{ fontSize: "14.5px", letterSpacing: "1.5px", fontWeight: 500, color: "#D4A017", transition: "color 0.3s ease" }}>
                  LEARN MORE
                </Typography>
                <ArrowRight size={14} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* =========================================================
   4. WHY CHOOSE US — count-up animation 0 → target
========================================================= */
function WhyChooseUs() {
  const badges = ["Fast Hiring Process", "Pan India Recruitment", "Expert HR Consultants", "Dedicated Account Managers"];
  const numSx = { fontFamily: serif, fontWeight: 500, fontSize: { xs: "32px", sm: "40px", md: "52px" }, color: "#0A2647" };
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 14 }, px: sidePad }}>
      <SectionLabel>WHY CHOOSE US</SectionLabel>
      <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#0A2647", lineHeight: 1.2 }}>
        Numbers that reflect our
      </Typography>
      <Typography sx={{ fontFamily: serif, fontStyle: "italic", fontWeight: 600, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#3A7D6E", mb: { xs: 4, md: 6 } }}>
        consistency.
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 3, sm: 5 }, mb: { xs: 5, md: 7 } }}>
        <Box sx={{ flex: "1 1 140px" }}>
          <CountStat target={5000} suffix="+" comma sx={numSx} />
          <Typography sx={{ fontSize: { xs: "11px", sm: "14.5px" }, letterSpacing: { xs: "1px", sm: "2px" }, fontWeight: 600, color: "#8B93A1", mt: 1 }}>CANDIDATES PLACED</Typography>
        </Box>
        <Box sx={{ flex: "1 1 140px" }}>
          <CountStat target={300} suffix="+" sx={numSx} />
          <Typography sx={{ fontSize: { xs: "11px", sm: "14.5px" }, letterSpacing: { xs: "1px", sm: "2px" }, fontWeight: 600, color: "#8B93A1", mt: 1 }}>CORPORATE CLIENTS</Typography>
        </Box>
        <Box sx={{ flex: "1 1 140px" }}>
          <CountStat target={98} suffix="%" sx={numSx} />
          <Typography sx={{ fontSize: { xs: "11px", sm: "14.5px" }, letterSpacing: { xs: "1px", sm: "2px" }, fontWeight: 600, color: "#8B93A1", mt: 1 }}>CLIENT SATISFACTION</Typography>
        </Box>
        <Box sx={{ flex: "1 1 140px" }}>
          <CountStat target={40} suffix="+" sx={numSx} />
          <Typography sx={{ fontSize: { xs: "11px", sm: "14.5px" }, letterSpacing: { xs: "1px", sm: "2px" }, fontWeight: 600, color: "#8B93A1", mt: 1 }}>CITIES SERVICED</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, sm: 3 } }}>
        {badges.map((b) => (
          <Box
            key={b}
            sx={{ flex: { xs: "1 1 100%", sm: "1 1 220px" }, display: "flex", alignItems: "center", gap: 1.5, border: "1px solid #E2E6EB", borderRadius: "8px", px: 3, py: 2.5, boxShadow: "0 2px 6px rgba(10,38,71,0.04)" }}
          >
            <SparkleIcon />
            <Typography sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, color: "#0A2647" }}>{b}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

/* =========================================================
   5. INDUSTRIES
========================================================= */
function Industries() {
  const highlighted = ["Jewellery Industry", "Gold & Diamond"];
  const rowOne = ["Manufacturing", "Automobile", "Engineering", "Healthcare", "Pharmaceutical", "Retail", "Banking"];
  const rowTwo = ["Finance", "Information Technology", "Hospitality", "Logistics", "Education", "Construction", "Telecom", "FMCG", "Textile", "Real Estate"];

const Pill = ({ label, active }) => (
  <Box
    sx={{
      px: { xs: 2, sm: 3 },
      py: { xs: 1.2, sm: 1.6 },
      borderRadius: "6px",
      border: active ? "none" : "1px solid rgba(255,255,255,0.3)",
      background: active ? "#D4A017" : "transparent",
      display: "flex",
      alignItems: "center",
      gap: 1,
      cursor: "pointer",
      transition: "border-color 0.25s ease, background 0.25s ease",
      "&:hover": active
        ? {}
        : {
            borderColor: "#D4A017",
            background: "rgba(214,180,23,0.08)",
          },
      "&:hover .pill-label": active ? {} : { color: "#D4A017" },
    }}
  >
    {active && <Box sx={{ width: 6, height: 6, background: "#0A2647", transform: "rotate(45deg)", flexShrink: 0 }} />}
    <Typography
      className="pill-label"
      sx={{
        fontSize: { xs: "13px", sm: "14.5px" },
        fontWeight: 600,
        color: active ? "#0A2647" : "#fff",
        transition: "color 0.25s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Typography>
  </Box>
);

  return (
    <Box sx={{ background: "#0A2647", color: "#fff", py: { xs: 6, sm: 8, md: 14 } }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <SectionLabel dark>INDUSTRIES WE SERVE</SectionLabel>
        <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "24px", sm: "30px", md: "46px" }, lineHeight: 1.3, maxWidth: 900, mb: { xs: 4, md: 6 } }}>
          From{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#E9CB6E" }}>
            Jewellery showrooms
          </Box>{" "}
          to global IT floors — we know the roles that keep them running.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 1.5 }, mb: { xs: 1, sm: 1.5 } }}>
          {highlighted.map((h) => <Pill key={h} label={h} active />)}
          {rowOne.map((r) => <Pill key={r} label={r} />)}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 1.5 }, mb: { xs: 4, md: 6 } }}>
          {rowTwo.map((r) => <Pill key={r} label={r} />)}
        </Box>

        <Button
          component={Link} to="/industries"
          sx={{ textTransform: "none", fontWeight: 600, fontSize: { xs: "14px", sm: "15px" }, color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "6px", px: 3, py: 1.3, "&:hover": { background: "rgba(255,255,255,0.08)" } }}
          endIcon={<ArrowRight color="#fff" />}
        >
          Explore industries
        </Button>
      </Container>
    </Box>
  );
}

/* =========================================================
   6. TESTIMONIALS — 3 / 2 / 1 per row depending on screen
========================================================= */
function Testimonials() {
  const items = [
    { quote: "One Stop Solution understands the nuances of jewellery retail — from counter sales etiquette to diamond grading expertise. They closed 14 positions for us in under 6 weeks.", name: "Rajesh Malhotra", role: "Director · Malhotra Jewellers, Mumbai" },
    { quote: "Their payroll and compliance team runs like clockwork. Zero escalations from statutory authorities in three years. We finally have HR bandwidth to focus on strategy.", name: "Priya Sundaram", role: "Head — Human Resources · A leading FMCG brand" },
    { quote: "The team didn't just place me — they coached me through three rounds of interviews and even helped negotiate the offer. Genuine career partners.", name: "Amit Verma", role: "Placed Candidate — Store Manager · Luxury Jewellery Brand, Bandra" },
    { quote: "From contract labour compliance to leadership hiring, we've handed over the entire HR function to them. Best decision we made this year.", name: "Neha Iyer", role: "Founder · Manufacturing SME, Bhiwandi" },
    { quote: "Recruiting CAD designers and merchandisers used to take us months. Their jewellery vertical delivers screened, industry-ready candidates in days.", name: "Sandeep Rao", role: "VP Operations · Diamond Export House, BKC" },
    { quote: "Warm, professional, and honest about role expectations. I appreciated that they followed up 30 days after joining just to check in.", name: "Kavita Deshmukh", role: "Placed Candidate — HR Executive · IT Services Company" },
  ];
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, sm: 8, md: 14 }, px: sidePad }}>
      <SectionLabel>TESTIMONIALS</SectionLabel>
      <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#0A2647", lineHeight: 1.2 }}>
        What our clients &amp;
      </Typography>
      <Typography sx={{ display: "inline", fontFamily: serif, fontStyle: "italic", fontWeight: 600, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#3A7D6E" }}>
        candidates{" "}
      </Typography>
      <Typography sx={{ display: "inline", fontFamily: serif, fontWeight: 500, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#0A2647", mb: 6 }}>
        say.
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 3, md: 4 }, mt: { xs: 4, md: 6 } }}>
        {items.map((t) => (
          <Box
            key={t.name}
            sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" }, maxWidth: { sm: "calc(50% - 14px)", md: "32%" }, border: "1px solid #E2E6EB", borderRadius: "8px", p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
              <QuoteMark />
            </Box>
            <Typography sx={{ fontSize: "15px", color: "#3A4A5C", lineHeight: 1.7, mb: 3, flexGrow: 1 }}>{t.quote}</Typography>
            <Box sx={{ borderTop: "1px solid #E2E6EB", pt: 2 }}>
              <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: "17px", color: "#0A2647" }}>{t.name}</Typography>
              <Typography sx={{ fontSize: "13px", color: "#8B93A1" }}>{t.role}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

/* =========================================================
   7. GALLERY — 1 big left, 2x2 small right on desktop;
      stacks cleanly on tablet/mobile with responsive heights
========================================================= */
function Gallery() {
  const big = Home1;
  const small = [
    Home2,
    Home3,
    Home4,
    Home5,
    Home6,
    Home7,
    Home8,
  ];

  return (
    <Box sx={{ background: "#F7F9FB", py: { xs: 6, sm: 8, md: 14 } }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", mb: { xs: 4, md: 6 }, gap: 2 }}>
          <Box>
            <SectionLabel>GALLERY</SectionLabel>
            <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "26px", sm: "34px", md: "48px" }, color: "#0A2647" }}>
              Inside the work we do.
            </Typography>
          </Box>
          <Box component={Link} to="/Gallery" sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
            <Typography sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, color: "#0A2647" }}>View full gallery</Typography>
            <ArrowRight color="#0A2647" />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "stretch" }}>
          {/* Big image left */}
          <Box sx={{ flex: "1 1 40%", minWidth: { xs: "100%", md: 300 } }}>
            <Box
              component="img"
              src={big}
              sx={{ width: "100%", height: "100%", minHeight: { xs: 260, sm: 360, md: 520 }, objectFit: "cover", borderRadius: "4px", display: "block" }}
            />
          </Box>

          {/* 2x2 small grid right */}
          <Box sx={{ flex: "1 1 55%", minWidth: { xs: "100%", md: 300 }, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
              <Box component="img" src={small[0]} sx={{ flex: 1, height: { xs: 130, sm: 180, md: 250 }, objectFit: "cover", borderRadius: "4px" }} />
              <Box component="img" src={small[1]} sx={{ flex: 1, height: { xs: 130, sm: 180, md: 250 }, objectFit: "cover", borderRadius: "4px" }} />
            </Box>
            <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
              <Box component="img" src={small[2]} sx={{ flex: 1, height: { xs: 130, sm: 180, md: 250 }, objectFit: "cover", borderRadius: "4px" }} />
              <Box component="img" src={small[3]} sx={{ flex: 1, height: { xs: 130, sm: 180, md: 250 }, objectFit: "cover", borderRadius: "4px" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* =========================================================
   8. FOR EMPLOYERS / FOR CANDIDATES — stacks on mobile
========================================================= */
function EmployerCandidateCTA() {
  return (
    <Box sx={{ px: sidePad, py: { xs: 4, sm: 5, md: 8 } }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", border: "1px solid #E2E6EB" }}>
        {/* For Employers */}
        <Box sx={{ flex: "1 1 50%", minWidth: { xs: "100%", md: 320 }, background: "#0A2647", color: "#fff", px: { xs: 3, sm: 4, md: 6 }, py: { xs: 5, sm: 6, md: 8 } }}>
          <Typography sx={{ fontSize: { xs: "11px", sm: "14px" }, letterSpacing: { xs: "2px", sm: "3px" }, fontWeight: 600, color: "#8B93A1", mb: 3 }}>
            FOR EMPLOYERS
          </Typography>
          <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "24px", sm: "30px", md: "50px" }, lineHeight: 1.2, mb: 3, maxWidth: 480 }}>
            Ready to build your dream team?
          </Typography>
          <Typography sx={{ fontSize: { xs: "14.5px", sm: "18px" }, color: "#C4CBD4", lineHeight: 1.7, mb: 4, maxWidth: 460 }}>
            Share your requirement — a dedicated account manager will get back within 24 hours.
          </Typography>
          <Button
            component={Link} to="/hire-employees"
            sx={{ textTransform: "none", fontWeight: 500, fontSize: { xs: "14px", sm: "18px" }, color: "#0A2647", background: "#D4A017", borderRadius: "0px", px: 3, py: 1.4, "&:hover": { background: "#c39515" } }}
            endIcon={<ArrowRight color="#0A2647" />}
          >
            Post a Requirement
          </Button>
        </Box>

        {/* For Candidates */}
        <Box sx={{ flex: "1 1 50%", minWidth: { xs: "100%", md: 320 }, background: "#fff", px: { xs: 3, sm: 4, md: 6 }, py: { xs: 5, sm: 6, md: 8 } }}>
          <Typography sx={{ fontSize: { xs: "11px", sm: "14px" }, letterSpacing: { xs: "2px", sm: "3px" }, fontWeight: 600, color: "#3A7D6E", mb: 3 }}>
            FOR CANDIDATES
          </Typography>
          <Typography sx={{ fontFamily: serif, fontWeight: 500, fontSize: { xs: "24px", sm: "30px", md: "50px" }, lineHeight: 1.2, color: "#0A2647", mb: 3, maxWidth: 480 }}>
            Your next role is closer than you think.
          </Typography>
          <Typography sx={{ fontSize: { xs: "14.5px", sm: "18px" }, color: "#5C6B7A", lineHeight: 1.7, mb: 4, maxWidth: 460 }}>
            Upload your resume and our recruiters will match you with the right opportunity.
          </Typography>
          <Button
            component={Link} to="/apply-for-jobs"
            sx={{ textTransform: "none", fontWeight: 500, fontSize: { xs: "14px", sm: "18px" }, color: "#fff", background: "#0A2647", borderRadius: "0px", px: 3, py: 1.4, mb: 4, "&:hover": { background: "#0d2f57" } }}
            endIcon={<ArrowRight color="#fff" />}
          >
            Upload Resume
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PinIcon />
            <Typography sx={{ fontSize: { xs: "13.5px", sm: "15.5px" }, color: "#5C6B7A" }}>Dadar East, Mumbai – 400014</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* =========================================================
   HOME — assembles all sections
========================================================= */
export default function Home() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Gallery />
      <EmployerCandidateCTA />
    </Box>
  );
}