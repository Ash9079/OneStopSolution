import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const COLORS = {
  navy: "#152642",
  bodyInk: "#374151",
  muted: "#6B7280",
  bg: "#FAFAF8",
};

const FONT_DISPLAY = `"Playfair Display", "Georgia", serif`;
const FONT_UI = `"Inter", "Helvetica Neue", Arial, sans-serif`;

const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

function LegalParagraph({ label, children }) {
  return (
    <Typography
      sx={{
        fontSize: { xs: "16px", md: "17px" },
        lineHeight: 1.85,
        color: COLORS.bodyInk,
        mb: 4,
      }}
    >
      <Box component="span" sx={{ fontWeight: 700, color: COLORS.navy }}>
        {label}
      </Box>{" "}
      {children}
    </Typography>
  );
}

export default function Terms() {
  return (
    <Box sx={{ bgcolor: COLORS.bg, minHeight: "60vh" }}>
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 }, maxWidth: 920, mx: "auto" }}>
          <Typography
            sx={{
              fontFamily: FONT_UI,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.muted,
              mb: 2,
            }}
          >
            Legal · Updated December 2025
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              color: COLORS.navy,
              lineHeight: 1.15,
              fontSize: { xs: 40, sm: 56, md: 68 },
              mb: 5,
            }}
          >
            Terms &amp; Conditions
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "17px" },
                lineHeight: 1.85,
                color: COLORS.bodyInk,
                mb: 4,
              }}
            >
              By accessing this website you agree to the following terms.
            </Typography>

            <LegalParagraph label="Services.">
              One Stop Solution provides HR consultancy, recruitment, payroll, statutory compliance, HR
              outsourcing and training services. All formal engagements are governed by a separate signed service
              agreement.
            </LegalParagraph>

            <LegalParagraph label="Candidate services.">
              We do not charge candidates for placement services. Any communication demanding money in exchange
              for a job is fraudulent — please report it to hr@1stopsolution.net.in.
            </LegalParagraph>

            <LegalParagraph label="Content.">
              All content, logos, imagery and text on this website are the property of One Stop Solution unless
              credited otherwise. No content may be reproduced without written consent.
            </LegalParagraph>

            <LegalParagraph label="Liability.">
              While we strive for accuracy, information on this website is provided "as is". We disclaim
              liability for indirect or consequential losses arising from its use.
            </LegalParagraph>

            <LegalParagraph label="Governing law.">
              These terms are governed by the laws of India, with exclusive jurisdiction of the courts at Mumbai,
              Maharashtra.
            </LegalParagraph>

            <Typography
              component={RouterLink}
              to="/contact"
              sx={{
                display: "inline-block",
                fontSize: "16px",
                fontWeight: 600,
                color: COLORS.navy,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                mt: 2,
                mb: { xs: 8, md: 10 },
                "&:hover": { color: "#2F6F6A" },
              }}
            >
              Have a question? Contact us →
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}