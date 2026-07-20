import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import Home1 from "../assets/Home1.jpg"

const COLORS = {
  navy: "#0A2647",
  navyDeep: "#081E3A",
  headingInk: "#152642",
  bodyInk: "#4B5768",
  gold: "#C9A227",
  goldSoft: "#D8B84A",
  teal: "#2F6F6A",
  bg: "#FAFAF8",
  cardBorder: "#E4E2DC",
  onNavySubtle: "rgba(255,255,255,0.62)",
  onNavyFaint: "rgba(255,255,255,0.14)",
};

const FONT_DISPLAY = `"Playfair Display", "Georgia", serif`;
const FONT_BODY = `"Lora", "Georgia", serif`;
const FONT_UI = `"Inter", "Helvetica Neue", Arial, sans-serif`;

const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

const EXPERTISE_LEFT = [
  "Permanent Recruitment",
  "Payroll Outsourcing",
  "HR Outsourcing",
  "Executive Search",
  "Recruitment Process Outsourcing (RPO)",
  "Post Placement Support",
];

const EXPERTISE_RIGHT = [
  "Contract Staffing",
  "Labour Law Compliance",
  "Corporate Training",
  "Campus Hiring",
  "Background Verification",
];

const STATS = [
  { icon: AddRoundedIcon, value: "5,000", label: "Candidates Placed" },
  { icon: AddRoundedIcon, value: "200", label: "Corporate Clients" },
  { icon: PercentRoundedIcon, value: "98", label: "Client Satisfaction" },
  { icon: Diversity3RoundedIcon, value: "15", label: "Industries Served" },
];

const PILLARS = [
  {
    label: "Vision",
    text: "To be India's most trusted HR partner — the first call for businesses seeking to hire, retain and comply.",
  },
  {
    label: "Mission",
    text: "Deliver the right talent, on time, with statutory-perfect back-office — so our clients focus on growth.",
  },
  {
    label: "Values",
    text: "Discretion. Accuracy. Speed. Long-term relationships. Zero compromise on candidate experience.",
  },
];

const Eyebrow = ({ children, color = COLORS.bodyInk, dash = true, sx = {} }) => (
  <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 2, ...sx }}>
    {dash && (
      <Box sx={{ width: 28, height: 1.5, bgcolor: color, opacity: 0.9 }} />
    )}
    <Typography
      sx={{
        fontFamily: FONT_UI,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </Typography>
  </Stack>
);

const ExpertiseRow = ({ text }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={2}
    sx={{
      py: { xs: 1.5, md: 1.75 },
      borderBottom: `1px solid ${COLORS.cardBorder}`,
    }}
  >
    <CheckCircleOutlineRoundedIcon
      sx={{ color: COLORS.gold, fontSize: 24, flexShrink: 0 }}
    />
    <Typography
      sx={{
        fontFamily: FONT_DISPLAY,
        fontSize: { xs: 17, md: 19 },
        color: COLORS.headingInk,
      }}
    >
      {text}
    </Typography>
  </Stack>
);

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: COLORS.bg, fontFamily: FONT_BODY }}>
      {/* ── Intro / About — text left, image right, one aligned frame ── */}
      <Container maxWidth="xl" sx={{ px: sidePad, py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: { md: 6 },
            rowGap: { xs: 4, md: 0 },
            alignItems: "center",
          }}
        >
          <Box>
            <Eyebrow color={COLORS.bodyInk}>About One Stop Solution</Eyebrow>

            <Typography
              component="h1"
              sx={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 500,
                color: COLORS.headingInk,
                lineHeight: 1.15,
                fontSize: { xs: 34, sm: 44, md: 57 },
                mb: 2.5,
              }}
            >
              We secure your growth — one{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", color: COLORS.teal }}
              >
                right hire
              </Box>{" "}
              at a time.
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_BODY,
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.8,
                color: COLORS.bodyInk,
                mb: 2,
              }}
            >
              One Stop Solution is a Mumbai-headquartered HR consultancy
              delivering comprehensive workforce solutions across India. From
              founders and CXOs to store staff and factory floor, we find
              people who fit — and we keep the back-office running with
              payroll, statutory compliance, training and audit support.
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_BODY,
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.8,
                color: COLORS.bodyInk,
              }}
            >
              We are particularly known for our{" "}
              <Box component="span" sx={{ fontWeight: 700, color: COLORS.headingInk }}>
                Jewellery Industry
              </Box>{" "}
              vertical — placing gold appraisers, diamond graders, CAD
              designers, merchandisers, store managers and counter sales
              staff across manufacturers, retail chains, showrooms, luxury
              brands and export houses. Alongside jewellery, we serve IT,
              Manufacturing, Healthcare, Retail, BFSI, FMCG, Hospitality,
              Logistics, Engineering, Real Estate, Telecom and Education.
            </Typography>
          </Box>

          <Box
            component="img"
            src={Home1}
            alt="One Stop Solution team at work"
            sx={{
              width: "100%",
              height: { xs: 300, sm: 420, md: 680 },
              objectFit: "cover",
              borderRadius: 1,
              display: "block",
            }}
          />
        </Box>
      </Container>

      {/* ── Expertise ─────────────────────────────────────────────── */}
      <Container maxWidth="xl" sx={{ px: sidePad, pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
            columnGap: { md: 6 },
            rowGap: { xs: 3, md: 0 },
          }}
        >
          <Box>
            <Eyebrow color={COLORS.gold}>Our Expertise</Eyebrow>
            <Typography
              component="h2"
              sx={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 500,
                color: COLORS.headingInk,
                fontSize: { xs: 32, md: 44 },
                lineHeight: 1.15,
              }}
            >
              What we do best.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              columnGap: 6,
            }}
          >
            <Box>
              {EXPERTISE_LEFT.map((item) => (
                <ExpertiseRow key={item} text={item} />
              ))}
            </Box>
            <Box>
              {EXPERTISE_RIGHT.map((item) => (
                <ExpertiseRow key={item} text={item} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ── By the numbers (navy band) ───────────────────────────── */}
      <Box
          sx={{
            bgcolor: COLORS.navy,
            color: "white",
            minHeight: { xs: 320, sm: 380, md: 460 },
            display: "flex",
            alignItems: "center",
          }}
        >
        <Container maxWidth="xl" sx={{ px: sidePad, py: { xs: 6, md: 7 } }}>
          <Eyebrow
            color={COLORS.onNavySubtle}
            dash
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            By The Numbers
          </Eyebrow>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              columnGap: { xs: 3, md: 6 },
              rowGap: { xs: 3, md: 0 },
              mt: { xs: 1.5, md: 2 },
            }}
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <Stack
                key={label}
                spacing={1.25}
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Stack
                  direction="row"
                  spacing={1.25}
                  alignItems="baseline"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Typography
                    sx={{
                      fontFamily: FONT_DISPLAY,
                      fontWeight: 600,
                      fontSize: { xs: 42, md: 72 },
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </Typography>
                  <Icon
                    sx={{
                      color: COLORS.goldSoft,
                      fontSize: 42,
                      position: "relative",
                      top: 3,
                    }}
                  />
                </Stack>
                <Typography
                  sx={{
                    fontFamily: FONT_UI,
                    fontSize: 12.5,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: COLORS.onNavySubtle,
                  }}
                >
                  {label}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Vision / Mission / Values — 3 cards in one row ──────────── */}
      <Container maxWidth="xl" sx={{ px: sidePad, py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 3 },
          }}
        >
          {PILLARS.map(({ label, text }) => (
            <Box
              key={label}
              sx={{
                border: `1px solid ${COLORS.cardBorder}`,
                borderRadius: 1,
                height: "100%",
                p: { xs: 3, md: 3.5 },
                bgcolor: "#fff",
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
                "&:hover": {
                  boxShadow: "0 18px 40px rgba(10,38,71,0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: FONT_UI,
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.gold,
                  mb: 1.75,
                }}
              >
                {label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: { xs: 22, md: 25 },
                  lineHeight: 1.4,
                  color: COLORS.headingInk,
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}