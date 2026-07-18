import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const COLORS = {
  navy: "#0D2746",
  teal: "#2F8B79",
  lightBg: "#F7F7F7",
  white: "#FFFFFF",
  text: "#374151",
  border: "#E5E7EB",
  muted: "#6B7280",
};

const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

function FieldLabel({ children, required }) {
  return (
    <Typography
      sx={{
        mb: 1,
        fontSize: "11px",
        letterSpacing: "2px",
        fontWeight: 700,
        color: COLORS.teal,
      }}
    >
      {children}
      {required && (
        <Box component="span" sx={{ color: COLORS.teal }}>
          {" "}
          *
        </Box>
      )}
    </Typography>
  );
}

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    background: "#fff",
    "& fieldset": { borderColor: COLORS.border },
    "&:hover fieldset": { borderColor: COLORS.navy },
    "&.Mui-focused fieldset": { borderColor: COLORS.teal, borderWidth: 1 },
  },
  "& input": { padding: "13px", fontSize: "14px" },
  "& textarea": { padding: "13px", fontSize: "14px" },
};

function InfoColumn() {
  return (
    <Box>
      <Typography sx={{ color: COLORS.muted, fontSize: "12px", letterSpacing: "2px", fontWeight: 600, mb: 3 }}>
        HIRE EMPLOYEES
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: COLORS.navy,
          fontWeight: 400,
          lineHeight: 1.15,
          fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
          mb: 3,
        }}
      >
        Post a{" "}
        <Box component="span" sx={{ color: COLORS.teal, fontStyle: "italic", fontWeight: 300 }}>
          requirement.
        </Box>
      </Typography>

      <Typography sx={{ color: COLORS.muted, fontSize: "16px", lineHeight: 1.8, mb: 4, maxWidth: 480 }}>
        Tell us about the role — vacancies, location, must-haves — and a dedicated account manager will get back
        within 24 hours with a tailored proposal and shortlisted profiles.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {[
          "Shortlists in 48–72 hours for volume & mid-level roles",
          "Executive Search: 4–8 weeks depending on mandate",
          "Replacement guarantee as per SLA",
        ].map((line) => (
          <Typography key={line} sx={{ fontSize: "15px", color: COLORS.text }}>
            • {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default function HireEmployees() {
  const [formData, setFormData] = useState({
    companyName: "",
    hrContact: "",
    mobile: "",
    email: "",
    position: "",
    vacancies: "",
    industry: "",
    jobDescription: "",
  });

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: connect backend API
  };

  return (
    <Box sx={{ bgcolor: COLORS.lightBg }}>
      <Container maxWidth="xl" sx={{ px: sidePad, py: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left */}
          <Box sx={{ width: { xs: "100%", md: "38%" }, flexShrink: 0, position: { md: "sticky" }, top: { md: 100 } }}>
            <InfoColumn />
          </Box>

          {/* Right — form */}
          <Box sx={{ width: { xs: "100%", md: "62%" } }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: "4px",
                bgcolor: "#fff",
                p: { xs: 3, md: 5 },
              }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>COMPANY NAME</FieldLabel>
                  <TextField fullWidth required value={formData.companyName} onChange={handleChange("companyName")} sx={textFieldSx} />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>HR CONTACT PERSON</FieldLabel>
                  <TextField fullWidth required value={formData.hrContact} onChange={handleChange("hrContact")} sx={textFieldSx} />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>MOBILE NUMBER</FieldLabel>
                  <TextField fullWidth required value={formData.mobile} onChange={handleChange("mobile")} sx={textFieldSx} />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>EMAIL</FieldLabel>
                  <TextField fullWidth required type="email" value={formData.email} onChange={handleChange("email")} sx={textFieldSx} />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>POSITION REQUIRED</FieldLabel>
                  <TextField fullWidth required value={formData.position} onChange={handleChange("position")} sx={textFieldSx} />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>NUMBER OF VACANCIES</FieldLabel>
                  <TextField
                    fullWidth
                    required
                    placeholder="e.g. 3"
                    value={formData.vacancies}
                    onChange={handleChange("vacancies")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel>INDUSTRY</FieldLabel>
                  <TextField
                    fullWidth
                    placeholder="e.g. Jewellery / IT / Retail"
                    value={formData.industry}
                    onChange={handleChange("industry")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <FieldLabel>JOB DESCRIPTION</FieldLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="Paste or describe the role, key responsibilities, must-haves, salary range and location."
                    value={formData.jobDescription}
                    onChange={handleChange("jobDescription")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SendIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      mt: 1,
                      bgcolor: COLORS.navy,
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "15px",
                      px: 3.5,
                      py: 1.4,
                      borderRadius: "4px",
                      boxShadow: "none",
                      "&:hover": { bgcolor:" #D4A017", boxShadow: "none" },
                      "&&:hover": { color:"Black"},
                    }}
                  >
                    Submit Requirement
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}