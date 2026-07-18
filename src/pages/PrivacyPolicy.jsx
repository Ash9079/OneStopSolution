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

export default function PrivacyPolicy() {
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
            Privacy Policy
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
              One Stop Solution ("we", "us") respects your privacy and is committed to protecting the personal
              information you share with us.
            </Typography>

            <LegalParagraph label="What we collect.">
              For candidates: full name, contact details, qualification, experience, salary and location
              preferences, and resume documents. For employers: company name, contact person and hiring
              requirements. For visitors: standard analytics data.
            </LegalParagraph>

            <LegalParagraph label="How we use it.">
              Candidate data is used exclusively to match you with relevant roles at client companies. Employer
              data is used to fulfil hiring mandates. We do not sell or rent your data to third parties.
            </LegalParagraph>

            <LegalParagraph label="Storage & retention.">
              Data is stored securely on servers accessible only to authorised team members. You may request
              deletion of your data at any time by writing to hr@1stopsolution.net.in.
            </LegalParagraph>

            <LegalParagraph label="Cookies.">
              The website uses minimal functional cookies for session management and analytics.
            </LegalParagraph>

            <LegalParagraph label="Contact.">
              Questions about this policy? Reach us at hr@1stopsolution.net.in or +91 81696 25342.
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