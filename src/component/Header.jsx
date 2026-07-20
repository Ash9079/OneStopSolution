import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import Logo from "../assets/Logo.jpeg"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

// inline SVGs — no @mui/icons-material (breaks under Vite)
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="#0A2647" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="#0A2647" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LogoMark = () => (
  <Box
    sx={{
      width: 52,
      height: 52,
      borderRadius: "50%",
      border: "2px solid #0A2647",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      background: "#fff",
    }}
  >
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#0A2647" strokeWidth="1.4" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="#D4A017" strokeWidth="1.2" />
    </svg>
  </Box>
);

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        background: "#fff",
        borderBottom: "1px solid #DDE2E8",
        boxShadow: "0 4px 4px rgba(10,38,71,0.06)",
      }}
    >
      <Box sx={{ height: 4, background: "#0A2647" }} />
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
            alignItems: "center",
            justifyContent: "space-between",
            py: 2.5,
          }}
        >
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none" }}
          >
            <Box
                component="img"
                src={Logo}
                alt="One Stop Solution Logo"
                sx={{
                    width: 52,
                    height: 52,
                    objectFit: "contain",
                }}
                />
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontSize: { xs: "18px", md: "22px" },
                  color: "#0A2647",
                  lineHeight: 1.1,
                }}
              >
                One Stop Solution
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  fontWeight: 600,
                  color: "#3A7D6E",
                  mt: 0.3,
                }}
              >
                HR &middot; PAYROLL &middot; COMPLIANCE
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 4 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.path}
                component={RouterLink}
                to={link.path}
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#0A2647",
                  textDecoration: "none",
                  opacity: location.pathname === link.path ? 1 : 0.85,
                  borderBottom: location.pathname === link.path ? "2px solid #0A2647" : "2px solid transparent",
                  pb: 0.5,
                  "&:hover": { opacity: 1 },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>

          {/* Desktop buttons */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 1.5 }}>
            <Button
              component={RouterLink}
              to="/apply-for-jobs"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                fontSize: "15px",
                color: "#0A2647",
                border: "1.5px solid #0A2647",
                borderRadius: "0px",
                px: 2.5,
                py: 1,
                "&:hover": { background: "rgba(10,38,71,0.05)" },
              }}
            >
              Apply for Jobs
            </Button>
            <Button
              component={RouterLink}
              to="/hire-employees"
              endIcon={<ChevronRight />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                fontSize: "15px",
                color: "#fff",
                background: "#0A2647",
                borderRadius: "0px",
                px: 2.5,
                py: 1,
                "&:hover": { background: "#D4A017" },
                "&&:hover": { color: "black"},
              }}
            >
              Hire Employees
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton sx={{ display: { xs: "flex", lg: "none" } }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.path}
                component={RouterLink}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                sx={{ fontWeight: 500, color: "#0A2647" }}
              >
                {link.label}
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 2, px: 1 }}>
            <Button
              component={RouterLink}
              to="/apply-for-jobs"
              onClick={() => setDrawerOpen(false)}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#0A2647",
                border: "1.5px solid #0A2647",
                borderRadius: "0px",
              }}
            >
              Apply for Jobs
            </Button>
            <Button
              component={RouterLink}
              to="/hire-employees"
              onClick={() => setDrawerOpen(false)}
              endIcon={<ChevronRight />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#fff",
                background: "#0A2647",
                borderRadius: "0px",
              }}
            >
              Hire Employees
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}