import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Fab,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
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

// Matches the padding used across Home / Industries / About / Gallery / Services pages
const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(40px)",
        transition: `all .8s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}

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
        <Box
          component="span"
          sx={{
            color: COLORS.teal,
          }}
        >
          {" "}
          *
        </Box>
      )}
    </Typography>
  );
}

function ContactItem({ icon: Icon, title, children }) {
  return (
    <Stack
      direction="row"
      spacing={2.5}
      sx={{
        mb: 5,
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "6px",
          bgcolor: COLORS.navy,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon
          sx={{
            color: "#fff",
            fontSize: 20,
          }}
        />
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: COLORS.teal,
            fontWeight: 700,
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: COLORS.text,
            fontSize: "15px",
            lineHeight: 1.8,
          }}
        >
          {children}
        </Typography>
      </Box>
    </Stack>
  );
}

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    background: "#fff",

    "& fieldset": {
      borderColor: COLORS.border,
    },

    "&:hover fieldset": {
      borderColor: COLORS.navy,
    },

    "&.Mui-focused fieldset": {
      borderColor: COLORS.teal,
      borderWidth: 1,
    },
  },

  "& input": {
    padding: "13px",
    fontSize: "14px",
  },

  "& textarea": {
    fontSize: "14px",
    padding: "13px",
  },
};

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: COLORS.lightBg,
        overflow: "hidden",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Ship Background */}
      <Box
        sx={{
          position: "absolute",
          right: {
            xs: "-180px",
            md: "-60px",
          },
          bottom: 0,
          width: {
            xs: "420px",
            md: "700px",
          },
          opacity: 0.12,
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Reveal>
          {/* Small Heading */}

          <Typography
            sx={{
              color: COLORS.teal,
              fontWeight: 700,
              letterSpacing: "3px",
              fontSize: "12px",
              mb: 2,
            }}
          >
            CONTACT US
          </Typography>

          {/* Large Heading */}

          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: COLORS.navy,
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: 700,
              fontSize: {
                xs: "2.7rem",
                sm: "3.4rem",
                md: "4.7rem",
              },
            }}
          >
            Let's{" "}
            <Box
              component="span"
              sx={{
                color: COLORS.teal,
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              talk
            </Box>{" "}
            hiring.
          </Typography>

          {/* Description */}

          <Typography
            sx={{
              mt: 4,
              maxWidth: 520,
              color: COLORS.muted,
              lineHeight: 1.9,
              fontSize: {
                xs: "15px",
                md: "17px",
              },
            }}
          >
            Whether you're an employer searching for exceptional talent or a
            candidate looking for the perfect opportunity, our recruitment
            experts are ready to help you succeed.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

function ContactInfo() {
  return (
    <Reveal>
      <Box>
        <Typography
          sx={{
            color: COLORS.teal,
            fontWeight: 700,
            letterSpacing: "3px",
            fontSize: "12px",
            mb: 5,
          }}
        >
          GET IN TOUCH
        </Typography>

        <ContactItem icon={PhoneOutlinedIcon} title="PHONE">
          +91 81696 25342
        </ContactItem>

        <ContactItem icon={EmailOutlinedIcon} title="EMAIL">
          hr@1stopsolution.net.in
        </ContactItem>

        <ContactItem icon={LocationOnOutlinedIcon} title="OFFICE">
          1 Stop Solution
          <br />
          Shop No. 1, Opp. Jyoti Bike Center,
          <br />
          Near Sanjivni Hospital, Naigaon, Dadar East, Mumbai – 400014
        </ContactItem>

        {/* Social Icons */}

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 2,
          }}
        >
          {[LinkedInIcon, InstagramIcon].map((Icon, index) => (
            <Box
              key={index}
              component="a"
              href="#"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "6px",
                border: `1px solid ${COLORS.border}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: COLORS.navy,
                transition: ".25s",

                "&:hover": {
                  bgcolor: COLORS.navy,
                  color: "#fff",
                  borderColor: COLORS.navy,
                },
              }}
            >
              <Icon fontSize="small" />
            </Box>
          ))}
        </Stack>
      </Box>
    </Reveal>
  );
}

function ContactSection({ children }) {
  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "flex-start",
            gap: {
              xs: 6,
              md: 8,
            },
          }}
        >
          {/* Left */}

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "30%",
              },
              flexShrink: 0,
            }}
          >
            <ContactInfo />
          </Box>

          {/* Right */}

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "70%",
              },
            }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    // TODO:
    // Connect your backend API here.
  };

  return (
    <Reveal delay={0.15}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          border: `1px solid ${COLORS.border}`,
          borderRadius: "4px",
          bgcolor: COLORS.lightBg,
          bgcolor: "#fff",
          p: {
            xs: 3,
            md: 5,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "calc(50% - 12px)",
              },
            }}
          >
            <FieldLabel required>FULL NAME</FieldLabel>

            <TextField
              fullWidth
              required
              value={formData.fullName}
              onChange={handleChange("fullName")}
              sx={textFieldSx}
            />
          </Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "calc(50% - 12px)",
              },
            }}
          >
            <FieldLabel required>EMAIL</FieldLabel>

            <TextField
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              sx={textFieldSx}
            />
          </Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "calc(50% - 12px)",
              },
            }}
          >
            <FieldLabel>MOBILE</FieldLabel>

            <TextField
              fullWidth
              value={formData.mobile}
              onChange={handleChange("mobile")}
              sx={textFieldSx}
            />
          </Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "calc(50% - 12px)",
              },
            }}
          >
            <FieldLabel>SUBJECT</FieldLabel>

            <TextField
              fullWidth
              value={formData.subject}
              onChange={handleChange("subject")}
              sx={textFieldSx}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <FieldLabel required>MESSAGE</FieldLabel>

            <TextField
              fullWidth
              required
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange("message")}
              placeholder="Tell us how we can help — hiring, payroll, compliance or general enquiry."
              sx={{
                ...textFieldSx,

                "& textarea": {
                  fontSize: "14px",
                  lineHeight: 1.8,
                },
              }}
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
                transition: ".25s",

                "&:hover": { bgcolor:" #D4A017", boxShadow: "none" },
                "&&:hover": { color:"Black"},
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Reveal>
  );
}

function MapSection() {
  const address = "1 Stop Solution, Naigaon, Dadar East, Mumbai";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <Box
      sx={{
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Reveal>
          <Typography
            sx={{
              fontSize: "12px",
              letterSpacing: "3px",
              fontWeight: 700,
              color: COLORS.teal,
              mb: 4,
            }}
          >
            FIND US
          </Typography>

          <Box
            sx={{
              overflow: "hidden",
              border: `1px solid ${COLORS.border}`,
              borderRadius: "4px",
              width: "100%",
              height: {
                xs: 320,
                sm: 420,
                md: 500,
              },
            }}
          >
            <Box
              component="iframe"
              src={mapUrl}
              title="Google Map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

function FloatingButton() {
  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        bgcolor: COLORS.navy,
        color: "#fff",

        "&:hover": {
          bgcolor: COLORS.teal,
        },
      }}
    >
      <PhoneOutlinedIcon />
    </Fab>
  );
}

export default function Contact() {
  return (
    <Box
      sx={{
        bgcolor: COLORS.lightBg,
      }}
    >
      <Hero />

      <ContactSection>
        <ContactForm />
      </ContactSection>

      <MapSection />

      {/* Uncomment if needed */}
      {/* <FloatingButton /> */}
    </Box>
  );
}