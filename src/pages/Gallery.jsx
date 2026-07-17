import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import Home1 from "../assets/Home1.jpg";
import Home2 from "../assets/Home2.jpg";
import Home3 from "../assets/Home3.jpg";
import Home4 from "../assets/Home4.jpg";
import Home5 from "../assets/Home5.jpg";
import Home6 from "../assets/Home6.jpg";
import Home7 from "../assets/Home7.jpg";
import Home8 from "../assets/Home8.jpg";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * FONTS — add these once in your index.html <head> (or import in your
 * global CSS) so the serif display / body faces render correctly:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 * <link
 *   href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600;700&display=swap"
 *   rel="stylesheet"
 * />
 * ─────────────────────────────────────────────────────────────────────────
 */

// ---- Design tokens (matches the About page) --------------------------------
const COLORS = {
  headingInk: "#152642",
  bodyInk: "#4B5768",
  teal: "#2F6F6A",
  bg: "#FAFAF8",
};

const FONT_DISPLAY = `"Playfair Display", "Georgia", serif`;
const FONT_UI = `"Inter", "Helvetica Neue", Arial, sans-serif`;

// Matches the padding used across Home / Industries pages
const sidePad = { xs: 2.5, sm: 4, md: 8, lg: 10 };

// ---- Content -----------------------------------------------------------------
// Swap these src imports for your own photography whenever you have it.
const GALLERY_IMAGES = [
  { src: Home1, alt: "Candidates in conversation during an interview" },
  { src: Home2, alt: "Modern office building exterior" },
  { src: Home3, alt: "Glass-walled boardroom during a meeting" },
  { src: Home4, alt: "Team collaborating around a table with laptops" },
  { src: Home5, alt: "Client presentation in a corporate meeting room" },
  { src: Home6, alt: "Gold jewellery display in a showroom" },
  { src: Home7, alt: "Factory ceiling with industrial lighting" },
  { src: Home8, alt: "Warehouse aisle with stocked shelves" },
];

// Split the images into groups of 3: [big, smallTop, smallBottom]
const chunkIntoTriples = (arr) => {
  const groups = [];
  for (let i = 0; i < arr.length; i += 3) groups.push(arr.slice(i, i + 3));
  return groups;
};

// ---- Small reusable bits ------------------------------------------------------
const Eyebrow = ({ children }) => (
  <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 2 }}>
    <Box sx={{ width: 28, height: 1.5, bgcolor: COLORS.bodyInk, opacity: 0.9 }} />
    <Typography
      sx={{
        fontFamily: FONT_UI,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: COLORS.bodyInk,
      }}
    >
      {children}
    </Typography>
  </Stack>
);

const imgSx = {
  width: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: 1,
};

// One block: a big image on the left, two stacked small images on the right.
// Gracefully degrades if a trailing group only has 1 or 2 images.
const GalleryBlock = ({ group }) => {
  const [big, small1, small2] = group;

  if (group.length === 3) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: { xs: 2, md: 2.5 },
          mb: { xs: 2, md: 2.5 },
        }}
      >
        <Box
          component="img"
          src={big.src}
          alt={big.alt}
          loading="lazy"
          sx={{ ...imgSx, height: { xs: 280, sm: 380, md: 524 } }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            gap: { xs: 2, md: 2.5 },
          }}
        >
          <Box
            component="img"
            src={small1.src}
            alt={small1.alt}
            loading="lazy"
            sx={{ ...imgSx, height: { xs: 200, sm: 250, md: 253 } }}
          />
          <Box
            component="img"
            src={small2.src}
            alt={small2.alt}
            loading="lazy"
            sx={{ ...imgSx, height: { xs: 200, sm: 250, md: 253 } }}
          />
        </Box>
      </Box>
    );
  }

  if (group.length === 2) {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: { xs: 2, md: 2.5 },
          mb: { xs: 2, md: 2.5 },
        }}
      >
        {group.map((img) => (
          <Box
            key={img.src}
            component="img"
            src={img.src}
            alt={img.alt}
            loading="lazy"
            sx={{ ...imgSx, height: { xs: 280, sm: 340, md: 400 } }}
          />
        ))}
      </Box>
    );
  }

  // Single leftover image — full width
  return (
    <Box
      component="img"
      src={big.src}
      alt={big.alt}
      loading="lazy"
      sx={{ ...imgSx, height: { xs: 280, sm: 380, md: 480 }, mb: { xs: 2, md: 2.5 } }}
    />
  );
};

// ---- Page -----------------------------------------------------------------------
export default function GalleryPage() {
  const groups = chunkIntoTriples(GALLERY_IMAGES);

  return (
    <Box sx={{ bgcolor: COLORS.bg }}>
      {/* ── Header — extra breathing room above and below ───────────── */}
      <Container maxWidth="xl" sx={{ px: sidePad }}>
        <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 10 } }}>
          <Eyebrow>Gallery</Eyebrow>
          <Typography
            component="h1"
            sx={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 500,
              color: COLORS.headingInk,
              lineHeight: 1.15,
              fontSize: { xs: 40, sm: 56, md: 68 },
            }}
          >
            The work, up{" "}
            <Box component="span" sx={{ fontStyle: "italic", color: COLORS.teal }}>
              close
            </Box>
            .
          </Typography>
        </Box>
      </Container>

      {/* ── Gallery — big image + two stacked small images, repeating ── */}
      <Container maxWidth="xl" sx={{ px: sidePad, pb: { xs: 8, md: 12 } }}>
        {groups.map((group, i) => (
          <GalleryBlock key={i} group={group} />
        ))}
      </Container>
    </Box>
  );
}