// src/components/FloatingContactMenu.jsx
import { useState } from "react";
import { Box, Fab, Zoom, Tooltip } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * FloatingContactMenu
 *
 * A fixed-position "+" button that expands upward into a stack of
 * colour-coded contact actions (chat, call, upload resume, email,
 * LinkedIn, Instagram), then collapses into an "✕" to close.
 *
 * Mount this ONCE at the top level of your app (e.g. in App.jsx, outside
 * <Routes>) so it stays visible on every page. See the usage notes at the
 * bottom of this file.
 * ─────────────────────────────────────────────────────────────────────────
 */

// ---- Edit these to point at your real contact channels ---------------------
const ACTIONS = [
  {
    key: "chat",
    label: "Chat with us",
    icon: ChatBubbleRoundedIcon,
    color: "#2ECC71",
    href: "https://wa.me/919999999999", // WhatsApp number
  },
  {
    key: "call",
    label: "Call us",
    icon: CallRoundedIcon,
    color: "#0A2647",
    href: "tel:+919999999999",
  },
  {
    key: "resume",
    label: "Upload resume",
    icon: UploadFileRoundedIcon,
    color: "#D4A017",
    href: "/apply-for-jobs",
  },
  {
    key: "email",
    label: "Email us",
    icon: MailRoundedIcon,
    color: "#3A7D6E",
    href: "mailto:info@onestopsolution.com",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: LinkedInIcon,
    color: "#0A66C2",
    href: "https://www.linkedin.com/company/your-page",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
    color: "#D62976",
    href: "https://www.instagram.com/your-page",
  },
];

const MAIN_SIZE = 56; // px, size of the main +/close button
const ITEM_SIZE = 48; // px, size of each action button
const GAP = 14; // px, vertical gap between stacked buttons

export default function FloatingContactMenu({
  position = { bottom: 24, left: 24 }, // change to { bottom: 24, right: 24 } for the other side
}) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 1300,
        ...position,
        display: "flex",
        flexDirection: "column-reverse", // main button stays at the bottom
        alignItems: "center",
        gap: `${GAP}px`,
      }}
    >
      {/* Main toggle button (always last so it renders at the bottom) */}
      <Fab
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        sx={{
          width: MAIN_SIZE,
          height: MAIN_SIZE,
          bgcolor: "#0A2647",
          color: "#fff",
          boxShadow: "0 8px 20px rgba(10,38,71,0.35)",
          "&:hover": { bgcolor: "#0d2f57" },
          transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        {open ? <CloseRoundedIcon /> : <AddRoundedIcon />}
      </Fab>

      {/* Stacked action buttons, animated in with a staggered zoom */}
      {ACTIONS.map(({ key, label, icon: Icon, color, href }, i) => (
        <Zoom
          key={key}
          in={open}
          style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          unmountOnExit
        >
          <Tooltip title={label} placement="right">
            <Fab
              component="a"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              sx={{
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                bgcolor: color,
                color: "#fff",
                boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                "&:hover": { bgcolor: color, filter: "brightness(0.92)" },
              }}
            >
              <Icon fontSize="small" />
            </Fab>
          </Tooltip>
        </Zoom>
      ))}
    </Box>
  );
}