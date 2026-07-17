// src/pages/Industries.jsx
import { Box, Container, Typography } from "@mui/material";

const serif = "'Playfair Display', serif";
const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

const SectionLabel = ({ children, dark = false }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
    <Box sx={{ width: 28, height: 2, background: "#D4A017" }} />
    <Typography sx={{ fontSize: "12px", letterSpacing: "3px", fontWeight: 600, color: dark ? "#B8C0CC" : "#B8901A" }}>
      {children}
    </Typography>
  </Box>
);

const DiamondIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path d="M4 8l4-5h8l4 5-8 12L4 8z" fill="#D4A017" stroke="#D4A017" strokeWidth="0.5" strokeLinejoin="round" />
    <path d="M4 8h16M9 3l3 5 3-5" stroke="#0A2647" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

/* =========================================================
   1. HERO
========================================================= */
function IndustriesHero() {
  return (
    <Box sx={{ background: "#0A2647", color: "#fff", pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <SectionLabel dark>INDUSTRIES WE SERVE</SectionLabel>
        <Typography
          sx={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: { xs: "36px", sm: "48px", md: "64px" },
            lineHeight: 1.2,
            maxWidth: 900,
            mb: 4,
          }}
        >
          Deep expertise across{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#E9CB6E" }}>
            nineteen sectors
          </Box>
          .
        </Typography>
        <Typography sx={{ fontSize: "17px", color: "#C4CBD4", lineHeight: 1.8, maxWidth: 640 }}>
          Every industry has its own vocabulary, hiring rhythm and compliance expectations. We speak all of them —
          with a specialised jewellery vertical that no generalist agency can match.
        </Typography>
      </Container>
    </Box>
  );
}

/* =========================================================
   2. FEATURED PRACTICE (Jewellery + Gold & Diamond)
========================================================= */
function FeaturedPractice() {
  const cards = [
    {
      title: "Jewellery Industry",
      desc: "Manufacturers, retail chains, gold & diamond showrooms, luxury brands, export houses, wholesale.",
      tags: ["Sales Executives", "Store Managers", "Counter Sales", "Gold Appraisers", "Diamond Graders", "CAD Designers", "Merchandisers"],
    },
    {
      title: "Gold & Diamond",
      desc: "Appraisers, graders, CAD designers, merchandisers, showroom staff.",
      tags: ["Sales Executives", "Store Managers", "Counter Sales", "Gold Appraisers", "Diamond Graders", "CAD Designers", "Merchandisers"],
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 }, px: sidePad }}>
      <SectionLabel>FEATURED PRACTICE</SectionLabel>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 4 }}>
        {cards.map((c) => (
          <Box
            key={c.title}
            sx={{
              flex: "1 1 45%",
              minWidth: 320,
              background: "#0A2647",
              color: "#fff",
              p: { xs: 4, md: 5 },
            }}
          >
            <Box sx={{ mb: 3 }}>
              <DiamondIcon />
            </Box>
            <Typography sx={{ fontFamily: serif, fontWeight: 700, fontSize: { xs: "32px", md: "40px" }, mb: 2 }}>
              {c.title}
            </Typography>
            <Typography sx={{ fontSize: "15.5px", color: "#C4CBD4", lineHeight: 1.7, mb: 4, maxWidth: 460 }}>
              {c.desc}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {c.tags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.35)",
                    borderRadius: "6px",
                    px: 2,
                    py: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "13.5px", fontWeight: 600, color: "#fff" }}>{tag}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

/* =========================================================
   3. ALL INDUSTRIES — 3-column grid, title turns gold on hover
========================================================= */
function AllIndustries() {
  const industries = [
    { title: "Manufacturing", desc: "Production, quality, plant operations, supervisors." },
    { title: "Automobile", desc: "OEMs, dealerships, service networks, ancillary units." },
    { title: "Engineering", desc: "Mechanical, electrical, civil, project engineers." },
    { title: "Healthcare", desc: "Hospitals, clinics, diagnostics, medical devices." },
    { title: "Pharmaceutical", desc: "R&D, production, QA/QC, formulations, medical reps." },
    { title: "Retail", desc: "Store managers, counter sales, cashiers, visual merchandisers." },
    { title: "Banking", desc: "Relationship managers, credit, operations, wealth advisors." },
    { title: "Finance", desc: "Accountants, auditors, CFOs, analysts, tax specialists." },
    { title: "Information Technology", desc: "Engineers, product managers, designers, DevOps, data." },
    { title: "Hospitality", desc: "Hotels, restaurants, cafés, banquets, event operations." },
    { title: "Logistics", desc: "Warehousing, dispatch, fleet, supply-chain and last-mile." },
    { title: "Education", desc: "Faculty, admin, academic operations, admissions counsellors." },
    { title: "Construction", desc: "Project managers, site engineers, contract labour, safety." },
    { title: "Telecom", desc: "Field engineers, network ops, enterprise sales, customer care." },
    { title: "FMCG", desc: "Sales, distribution, brand, trade marketing, area managers." },
    { title: "Textile", desc: "Weaving, spinning, garment, merchandising, exports." },
    { title: "Real Estate", desc: "Sales, leasing, project management, back-office." },
  ];

  return (
    <Box sx={{ background: "#F7F9FB", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Typography sx={{ fontSize: "12px", letterSpacing: "3px", fontWeight: 700, color: "#3A7D6E", mb: 5 }}>
          ALL INDUSTRIES
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            background: "#fff",
            border: "1px solid #E2E6EB",
          }}
        >
          {industries.map((ind, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(industries.length / 3);
            return (
              <Box
                key={ind.title}
                sx={{
                  flex: "1 1 33.33%",
                  minWidth: 280,
                  p: { xs: 3.5, md: 4.5 },
                  borderRight: col !== 2 ? "1px solid #E2E6EB" : "none",
                  borderBottom: row !== totalRows - 1 ? "1px solid #E2E6EB" : "none",
                  cursor: "pointer",
                  transition: "background 0.25s ease",
                  "&:hover .ind-title": { color: "#D4A017" },
                }}
              >
                <Typography sx={{ fontSize: "13px", color: "#A9B1BC", fontWeight: 600, mb: 1.5 }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography
                  className="ind-title"
                  sx={{
                    fontFamily: serif,
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "28px" },
                    color: "#0A2647",
                    mb: 1.5,
                    transition: "color 0.25s ease",
                  }}
                >
                  {ind.title}
                </Typography>
                <Typography sx={{ fontSize: "14.5px", color: "#5C6B7A", lineHeight: 1.7 }}>{ind.desc}</Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

/* =========================================================
   INDUSTRIES PAGE
========================================================= */
export default function Industries() {
  return (
    <Box>
      <IndustriesHero />
      <FeaturedPractice />
      <AllIndustries />
    </Box>
  );
}