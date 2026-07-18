import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Logo from "../assets/Logo.jpeg"

const services = [
  { label: "Placement Services", path: "/services#placement-services" },
  { label: "Payroll Services", path: "/services#payroll-services" },
  { label: "HR Compliance", path: "/services#hr-compliance" },
  { label: "HR Outsourcing", path: "/services#hr-outsourcing" },
  { label: "Corporate Training", path: "/services#corporate-training" },
  { label: "Post Placement", path: "/services#post-placement-services" },
];
const company = [
  { label: "About Us", path: "/about" },
  { label: "Industries", path: "/industries" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];
const forYou = [
  { label: "Apply for Jobs", path: "/apply-for-jobs" },
  { label: "Upload Resume", path: "/apply-for-jobs" },
  { label: "Hire Employees", path: "/hire-employees" },
  { label: "Careers @ OSS", path: "/hire-employees" },
  { label: "Privacy Policy", path: "/privacypolicy" },
  { label: "Terms & Conditions", path: "/TermsConditions" },
];

// inline SVG icons — keeps Vite build clean, no @mui/icons-material
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" fill="#fff" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.6" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="#fff" />
  </svg>
);
const MailIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.6" />
    <path d="M4 6.5l8 6 8-6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19.5c0 .6-.4 1-1 1C10.6 20.5 3.5 13.4 3.5 4.9c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2 2z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
const PinIcon = ({ color = "#D4A017" }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-7.4 7-12.6A7 7 0 105 9.4C5 14.6 12 22 12 22z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="9.4" r="2.4" stroke={color} strokeWidth="1.6" />
  </svg>
);

const colHeadSx = {
  fontSize: "12px",
  letterSpacing: "2.5px",
  fontWeight: 600,
  color: "#8B93A1",
  mb: 2.5,
};
const linkSx = {
  display: "block",
  fontSize: "15px",
  color: "#fff",
  textDecoration: "none",
  mb: 1.6,
  opacity: 0.92,
  "&:hover": { opacity: 1, textDecoration: "underline" },
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: "#0A2647", color: "#fff", pt: 7, pb: 3 }}>
      <Container
            maxWidth="xl"
            sx={{
                px: {
                xs: 2,
                sm: 3,
                md: 5,
                lg: 8,
                xl: 10,
                },
            }}
            >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 5, md: 4 },
            justifyContent: "space-between",
          }}
        >
          {/* Brand column */}
          <Box sx={{ flex: "1 1 320px", maxWidth: 420 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                    component="img"
                    src={Logo}
                    alt="One Stop Solution Logo"
                    sx={{
                        width: 56,
                        height: 56,
                        objectFit: "contain",
                        borderRadius: "10px", // Remove if your logo is square
                        background: "#fff",
                        p: 0.5, // Small padding
                    }}
                    />
              <Box>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "22px" }}>
                  One Stop Solution
                </Typography>
                <Typography sx={{ fontSize: "10px", letterSpacing: "2.5px", fontWeight: 600, color: "#3A7D6E" }}>
                  HR &middot; PAYROLL &middot; COMPLIANCE
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ fontSize: "14.5px", lineHeight: 1.8, color: "#C4CBD4", mb: 3 }}>
              India's trusted HR & placement partner. We secure your growth through premium recruitment,
              statutory compliance and workforce solutions — with a specialised practice for the Jewellery Industry.
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5 }}>
              {[<LinkedInIcon />, <InstagramIcon />, <MailIcon />, <PhoneIcon />].map((icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.35)",
                    "&:hover": { background: "rgba(255,255,255,0.08)" },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box sx={{ flex: "0 1 180px" }}>
            <Typography sx={colHeadSx}>SERVICES</Typography>
            {services.map((s) => (
              <Typography key={s.label} component={RouterLink} to={s.path} sx={linkSx}>
                {s.label}
              </Typography>
            ))}
          </Box>

          {/* Company */}
          <Box sx={{ flex: "0 1 160px" }}>
            <Typography sx={colHeadSx}>COMPANY</Typography>
            {company.map((c) => (
              <Typography key={c.label} component={RouterLink} to={c.path} sx={linkSx}>
                {c.label}
              </Typography>
            ))}
          </Box>

          {/* For You */}
          <Box sx={{ flex: "0 1 180px" }}>
            <Typography sx={colHeadSx}>FOR YOU</Typography>
            {forYou.map((f) => (
              <Typography key={f.label} component={RouterLink} to={f.path} sx={linkSx}>
                {f.label}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Get in touch */}
        <Box sx={{ mt: 6 }}>
          <Typography sx={colHeadSx}>GET IN TOUCH</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 420 }}>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <PinIcon />
              <Typography sx={{fontWeight: 500, fontSize: "15.5px", color: "#E4E8ED", lineHeight: 1.6 }}>
                Shop No. 1, Opp. Jyoti Bike Center, Near Sanjivni Hospital, Naigaon, Dadar East, Mumbai – 400014
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <PhoneIcon color="#D4A017" />
              <Typography sx={{ fontWeight: 500,fontSize: "14.5px", color: "#E4E8ED" }}>+91 81696 25342</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <MailIcon color="#D4A017" />
              <Typography sx={{ fontWeight: 500, fontSize: "14.5px", color: "#E4E8ED" }}>hr@1stopsolution.net.in</Typography>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.15)", mt: 5, pt: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "13.5px", color: "#8B93A1" }}>
              © 2026 One Stop Solution. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Typography component={RouterLink} to="/privacypolicy" sx={{ fontSize: "13.5px", color: "#8B93A1", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                Privacy Policy
              </Typography>
              <Typography component={RouterLink} to="/TermsConditions" sx={{ fontSize: "13.5px", color: "#8B93A1", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                Terms & Conditions
              </Typography>
              <Typography sx={{ fontSize: "13.5px", color: "#D4A017", fontWeight: 600 }}>
                We Secure Your Growth.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}