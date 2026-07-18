import React, { useState, useRef } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const COLORS = {
  navy: "#0D2746",
  teal: "#2F8B79",
  gold: "#C9A227",
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

const UploadIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 16V4M12 4l-4 4M12 4l4 4"
      stroke={COLORS.gold}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
      stroke={COLORS.gold}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ResumeDropzone({ file, onFileSelect }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.[0]) onFileSelect(e.dataTransfer.files[0]);
  };

  return (
    <Box>
      <FieldLabel>RESUME UPLOAD</FieldLabel>
      <Box
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        sx={{
          border: `1.5px dashed ${dragOver ? COLORS.teal : COLORS.border}`,
          borderRadius: "4px",
          background: dragOver ? "#FAF8EF" : COLORS.lightBg,
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "border-color 0.2s ease, background 0.2s ease",
        }}
      >
        <UploadIcon />
        <Typography sx={{ mt: 2, fontSize: "15px", color: COLORS.text }}>
          Click to select or drop your resume (PDF, DOC, DOCX)
        </Typography>
      </Box>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        hidden
        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
      />
      <Box
        onClick={() => inputRef.current?.click()}
        sx={{
          mt: 1.5,
          fontSize: "14px",
          color: COLORS.navy,
          fontWeight: 600,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        {file ? file.name : "Choose file →"}
      </Box>
    </Box>
  );
}

function InfoColumn() {
  return (
    <Box>
      <Typography sx={{ color: COLORS.muted, fontSize: "12px", letterSpacing: "2px", fontWeight: 600, mb: 3 }}>
        APPLY / UPLOAD RESUME
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
        Your next career move —{" "}
        <Box component="span" sx={{ color: COLORS.teal, fontStyle: "italic", fontWeight: 300 }}>
          starts here.
        </Box>
      </Typography>

      <Typography sx={{ color: COLORS.muted, fontSize: "16px", lineHeight: 1.8, mb: 4, maxWidth: 480 }}>
        Upload your resume and our recruiters will match you with the right role across jewellery, manufacturing,
        IT, BFSI, retail, healthcare, hospitality, logistics and more. All candidate services are 100% free.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {[
          "We respond within 3 working days",
          "PDF, DOC, DOCX up to 10 MB accepted",
          "Your data stays strictly confidential",
        ].map((line) => (
          <Typography key={line} sx={{ fontSize: "15px", color: COLORS.text }}>
            • {line}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default function ApplyForJobs() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    qualification: "",
    experience: "",
    currentSalary: "",
    expectedSalary: "",
    location: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, resume: file });
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
                  <FieldLabel required>FULL NAME</FieldLabel>
                  <TextField fullWidth required value={formData.fullName} onChange={handleChange("fullName")} sx={textFieldSx} />
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
                  <FieldLabel required>QUALIFICATION</FieldLabel>
                  <TextField fullWidth required value={formData.qualification} onChange={handleChange("qualification")} sx={textFieldSx} />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel required>TOTAL EXPERIENCE</FieldLabel>
                  <TextField
                    fullWidth
                    required
                    placeholder="e.g. 3 years"
                    value={formData.experience}
                    onChange={handleChange("experience")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel>CURRENT SALARY</FieldLabel>
                  <TextField
                    fullWidth
                    placeholder="e.g. 4.5 LPA"
                    value={formData.currentSalary}
                    onChange={handleChange("currentSalary")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel>EXPECTED SALARY</FieldLabel>
                  <TextField
                    fullWidth
                    placeholder="e.g. 6 LPA"
                    value={formData.expectedSalary}
                    onChange={handleChange("expectedSalary")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: { xs: "100%", md: "calc(50% - 12px)" } }}>
                  <FieldLabel>PREFERRED LOCATION</FieldLabel>
                  <TextField
                    fullWidth
                    placeholder="e.g. Mumbai"
                    value={formData.location}
                    onChange={handleChange("location")}
                    sx={textFieldSx}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <ResumeDropzone file={file} onFileSelect={setFile} />
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
                    Submit Application
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